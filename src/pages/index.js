import React, {useState} from "react"
import axios from "axios"
import {storeSession} from "../utils/session"
import styled from "styled-components"

const Box = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

const Input = styled.input`
  padding: 16px;
  width: 100%;
  border-radius: 2px;
  border-color: transparent;
  outline: none;
  border: 1px solid #554fe8;
  font-size: 16px;
`

const Button = styled.button`
  width: 100%;
  color: #fff;
  background: #554fe8;
  padding: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
`

const Home = (props) => {

  const url = 'http://192.168.5.218:7000'
  const [name, setName] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault() 
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
          props.history.push('/chat')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <Box>
          <Input 
            type="text" 
            placeholder="What's your name?"
            name="name" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default Home
