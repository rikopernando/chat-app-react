import React from 'react'
import styled from 'styled-components'

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

const ChatHeader = styled.div`
  color: #ffffff;
  margin: 12px auto;
  font-weight: bold;
`

const ChatBox = styled.div`
  padding: 10px;
  font-size: 13px;
`

const ChatHandleBox = styled.div`
  max-width: 480px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff; 
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%);
  border-top: 2px solid #ece9e9;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`

const ChatHandle = styled.textarea`
  font-size: 12px;
  padding: 5px;
  width: 100%;
  border-color: transparent;
  letter-spacing: 1px;

  :focus {
    outline: none;
  }
`


function App() {
  return (
    <>
    <header>
      <div className="container">
        <ChatHeader>
          header chat
        </ChatHeader>
      </div>
    </header>
    <main>
      <ChatBox>
        Chat App
      </ChatBox>
      <ChatHandleBox>
        <ChatHandle 
          rows="2" 
          cols="20"
          placeholder="Type a message"
          type="text" />
        <SendIcon/>
      </ChatHandleBox>
    </main>
    </>
  );
}

export default App;
