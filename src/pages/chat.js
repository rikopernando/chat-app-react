import React, {useState, useEffect} from 'react'
import moment from 'moment'
import axios from 'axios'
import socketIOClient from 'socket.io-client'
import {
  ChatHeader,
  ChatBox,
  ChatItem,
  ChatHandleBox,
  ChatHandle
} from '../components/Chat/styles'
import {getSession} from "../utils/session"

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

const App = () => {
  const url = 'http://192.168.5.218:7000'
  const socket = socketIOClient(url)
  const [message, setMessage] = useState('')
  const [chats, setChat] = useState([])

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

  return (
    <>
    <header>
        <ChatHeader>
          <div className="container">
            header chat
          </div>
        </ChatHeader>
    </header>
    <main>
      <ChatBox>
        {chats.length > 0 &&
          chats.map((chat, key) => (
            <ChatItem key={key}>
              <div className="user">{chat.User.name}</div>
              <div className="message">
                {chat.message}
              </div>
              <div className="clock">
                {moment.utc(chat.createdAt).format("HH:mm")}
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
