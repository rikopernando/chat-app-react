import styled from 'styled-components'

export const ChatHeader = styled.div`
  color: #ffffff;
  margin: 12px auto;
  font-weight: bold;
`

export const ChatBox = styled.div`
  padding: 10px;
  font-size: 13px;
  overflow-y: scroll;
  margin-bottom: 50px;
`

export const ChatItem = styled.div`
  background-color: #d3e4dfcf;
  padding: 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  margin-bottom: 10px;
  font-size: 12px;

  .user {
    font-size: 10px;
    font-weight: bold;
  }

  .clock {
    font-size: 10px;
    text-align: right;
    color: #7d7979;
  }
`

export const ChatHandleBox = styled.div`
  border-radius: 10px;
  max-width: 480px;
  position: fixed;
  bottom: 2%;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff; 
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%);
  border-top: 2px solid #ece9e9;
  border-bottom: 2px solid #ece9e9;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`

export const ChatHandle = styled.textarea`
  font-size: 12px;
  padding: 5px;
  width: 100%;
  border-color: transparent;
  letter-spacing: 1px;

  :focus {
    outline: none;
  }
`
