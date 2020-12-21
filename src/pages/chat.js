import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import moment from "moment"
import axios from "axios"
import socketIOClient from "socket.io-client"
import Loader from "../components/Chat/Loader"
import SendIcon from "../icons/Send"
import SettingIcon from "../icons/Setting"
import {getSession, removeSession} from "../utils/session"
import {ChatHeader, ChatBox, ChatItem, ChatHandleBox, ChatInput, ChatSetting} from "./styles"

const App = (props) => {
  const url = process.env.REACT_APP_URL
  const socket = socketIOClient(url)
  const session = getSession("chat-apps")
  const [message, setMessage] = useState("")
  const [chats, setChat] = useState([])
  const [isSetting, setSetting] = useState(false)
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
      .then((resp) => {
        const {
          status,
          data: {data}
        } = resp
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

  const onExit = () => {
    removeSession("chat-apps")
    props.history.push("/")
  }

  return (
    <>
      <header>
        <ChatHeader>
          <div className="app-name">
            <span>React Chat App</span>
          </div>
          <div>
            <span onClick={() => setSetting(!isSetting)}>
              <SettingIcon />
            </span>
            <ChatSetting active={isSetting}>
              <div className="setting-item" onClick={onExit}>
                Keluar
              </div>
            </ChatSetting>
          </div>
        </ChatHeader>
      </header>
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ChatBox id="chat-box">
              {chats.length > 0 &&
                chats.map((chat, key) => (
                  <ChatItem
                    key={key}
                    style={
                      session && chat.User.id === session.id
                        ? {
                            marginLeft: "20%",
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 0,
                            backgroundColor: "#C1E6FF"
                          }
                        : {}
                    }
                  >
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
          </>
        )}
      </main>
    </>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
