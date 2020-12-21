import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import {storeSession} from "../utils/session"
import styled from "styled-components"

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-width: 100%;
  min-height: 100vh;

  div {
    min-width: 300px;
  }
`

const Input = styled.input`
  padding: 16px;
  width: 100%;
  border-radius: 8px;
  border-color: transparent;
  outline: none;
  border: 1px solid rgb(0 0 0 / 0.12);
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
`

const Button = styled.button`
  width: 100%;
  color: #fff;
  background: #FF7C1F;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  outline: none;

  &:disabled {
    opacity: 0.5;
  }
`

const Home = () => {

  const url = process.env.REACT_APP_URL 
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  let history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault() 
    if(name) {
      setLoading(true)
      axios
        .post(`${url}/add-user`,{name})
        .then(resp => {
          const {data : {data}, status} = resp
          if (status === 200) {
            storeSession(
              "chat-apps",
              data,
              {value: 26, type: "hours"}
            )
            setLoading(false)
            history.push("/chat")
          }
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    } else {
      setError(true)
    }
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <div>
          <Input 
            type="text" 
            placeholder="Masukan Nama Kamu"
            name="name" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
            <div 
              style={{
                color: "#da4157",
                fontSize: 12
            }}>
              {error && "Masukin nama kamu dulu ya"}
            </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Masuk"}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Home
