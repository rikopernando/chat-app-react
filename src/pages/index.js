import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import {Form, Input, Button} from "./styles"
import {storeSession} from "../utils/session"

const Home = () => {
  const url = process.env.REACT_APP_URL
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  let history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setLoading(true)
      axios
        .post(`${url}/add-user`, {name})
        .then((resp) => {
          const {
            data: {data},
            status
          } = resp
          if (status === 200) {
            storeSession("chat-apps", data, {value: 26, type: "hours"})
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
            }}
          >
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
