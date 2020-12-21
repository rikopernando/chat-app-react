import React, {useState, useEffect, Fragment} from "react"
import PropTypes from "prop-types"
import moment from "moment"
import axios from "axios"
import socketIOClient from "socket.io-client"
import Header from "../components/Chat/Header"
import Loader from "../components/Chat/Loader"
import SendIcon from "../icons/Send"
import {getSession} from "../utils/session"
import {ChatBox, ChatItem, ChatHandleBox, ChatInput} from "./styles"

const App = (props) => {
  const url = process.env.REACT_APP_URL
  const socket = socketIOClient(url)
  const session = getSession("chat-apps")
  const [message, setMessage] = useState("")
  const [chats, setChat] = useState([])
  const [isLoading, setLoading] = useState(false)

  const onSendMessage = () => {
    if (message) {
      socket.emit("new message", {
        message,
        user_id: session.id
      })
      setMessage("")
    }
  }

  useEffect(() => {
    socket.on("new message", () => getChat())
  }, [])

  useEffect(() => {
    setLoading(true)
    getChat()
  }, [])

  const getChat = () => {
    axios
      .get(`${url}/chat`)
      .then((response) => {
        const {
          status,
          data: {data}
        } = response
        if (status === 200) {
          setChat(data)
          setLoading(false)
          window.scrollTo(0, document.querySelector("#chat-box").scrollHeight)
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <Fragment>
      <Header {...props} />
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <ChatBox id="chat-box">
              {chats.length > 0 &&
                chats.map((chat, key) => (
                  <ChatItem key={key} me={session && chat.User.id === session.id}>
                    <div className="user">{chat.User.name}</div>
                    <div className="message">{chat.message}</div>
                    <div className="clock">{moment(chat.createdAt).format("HH:mm")}</div>
                  </ChatItem>
                ))}
            </ChatBox>
            <ChatHandleBox>
              <ChatInput
                rows="1"
                cols="20"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span onClick={onSendMessage}>
                <SendIcon />
              </span>
            </ChatHandleBox>
          </Fragment>
        )}
      </main>
    </Fragment>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
