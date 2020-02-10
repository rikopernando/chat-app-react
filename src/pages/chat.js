import React, {useState, useEffect} from 'react'
import moment from 'moment'
import axios from 'axios'
import socketIOClient from 'socket.io-client'
import {
  ChatHeader,
  ChatBox,
  ChatItem,
  ChatHandleBox,
  ChatHandle,
  ChatSetting
} from '../components/Chat/styles'
import {getSession, removeSession} from "../utils/session"

const SendIcon = () => (
  <svg
    style={{marginTop: 7, fontSize: 25, marginLeft: 10}}
    width="1em" 
    height="1em" 
    viewBox="0 0 24 24">
      <path 
        d="M4 6.03l7.5 3.22l-7.5-1V6.03m7.5 8.72L4 17.97v-2.22l7.5-1M2 3v7l15 2l-15 2v7l21-9L2 3z"
        fill="#554fe8"/>
  </svg>
)

const MenuIcon = () => (
  <svg 
    style={{fontSize: 25}}
    width="1em" 
    height="1em"
    viewBox="0 0 24 24">
      <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="#fff"/>
  </svg>
)

const SettingIcon = () => (
  <svg 
    style={{fontSize: 25, cursor: "pointer"}}
    width="1em"
    height="1em"
    viewBox="0 0 24 24">
      <path 
      d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" 
      fill="#fff"/>
  </svg>
)

const App = (props) => {
  const url = process.env.REACT_APP_URL 
  const socket = socketIOClient(url)
  const [message, setMessage] = useState('')
  const [chats, setChat] = useState([])
  const [isSetting, setSetting] = useState(false)

  const onSendMessage = () => {
    if (message) {
      const session = getSession('chat-apps')
      socket.emit('chat', {
        message,
        user_id: session.id
      })
      setMessage('')
    }
  }

  useEffect(() => {
    socket.on('chat', chat => getChat())
  }, [])

  useEffect(() => {
    getChat()
  }, [])

  const getChat = () => {
    axios.get(`${url}/chat`)
      .then(resp => {
        const {status, data : {data}} = resp
        if (status === 200) {
          setChat(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onExit = (e) => {
    removeSession('chat-apps')
    props.history.push('/')
  }

  return (
    <>
    <header>
        <ChatHeader>
          <div className="app-name">
            {/*
            <MenuIcon />
            */}
            <span>React Chat App</span>
          </div>
          <div>
            <span onClick={() => setSetting(!isSetting)}>
              <SettingIcon />
            </span>
            <ChatSetting active={isSetting}>
              <div className="setting-item" onClick={onExit}>Exit</div>
            </ChatSetting>
          </div>
        </ChatHeader>
    </header>
    <main>
      <ChatBox>
        {chats.length > 0 &&
          chats.map((chat, key) => (
            <ChatItem key={key} style={
                getSession('chat-apps') && chat.User.id === getSession('chat-apps').id ?
                  {
                    marginLeft: "20%",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 0,
                    backgroundColor: "#d3e4dfcf"
                  }
                  :
                  {}
              }>
              <div className="user">{chat.User.name}</div>
              <div className="message">
                {chat.message}
              </div>
              <div className="clock">
                {moment(chat.createdAt).format("HH:mm")}
              </div>
            </ChatItem>
        ))}
      </ChatBox>
      <ChatHandleBox>
        <ChatHandle 
          rows="1" 
          cols="20"
          placeholder="Type a message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          //onKeyDown={onSendMessage}
        />
        <span style={{cursor: 'pointer'}} onClick={onSendMessage}>
          <SendIcon/>
        </span>
      </ChatHandleBox>
    </main>
    </>
  );
}

export default App;
