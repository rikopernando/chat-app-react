import styled from 'styled-components'

export const ChatHeader = styled.div`
  color: #ffffff;
  margin: 12px auto;
  font-weight: bold;
`

export const ChatBox = styled.div`
  padding: 10px;
  font-size: 13px;
`

export const ChatItem = styled.div`
  background-color: #d3e4df59;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 10px;
  margin-bottom: 10px;

  .clock {
    font-size: 10px;
    text-align: right;
    color: #7d7979;
  }
`

export const ChatHandleBox = styled.div`
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
