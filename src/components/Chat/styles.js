import styled from 'styled-components'

export const ChatHeader = styled.div`
  color: #ffffff;
  margin: 1rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;

  .app-name {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 16px;
  }
`

export const ChatBox = styled.div`
  padding: 1rem 1rem 5rem 1rem;
  overflow-y: auto;
  margin-top: 3.8rem;
`

export const ChatItem = styled.div`
  background-color: #ffffff;
  padding: 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  margin-bottom: 1rem;
  width: 80%;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14);

  .user {
    font-size: 12px;
    font-weight: 600;
    color: #0E3854;
    margin-bottom: 0.5rem;
  }

  .message {
    font-size: 1rem;
    color: #333;
  }

  .clock {
    font-size: 10px;
    text-align: right;
    color: #7d7979;
  }
`

export const ChatHandleBox = styled.div`
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  max-width: 480px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;

  span {
    cursor: pointer;
    background: #FF7C1F;
    border-radius: 50%;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ChatInput = styled.textarea`
  border-radius: 25px;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  border-color: transparent;
  resize: none;
  font-family: "Montserrat",sans-serif;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.07);
  outline: none;
  margin-right: 1rem;
  transition: all .3s ease;

  &:focus {
    border: 1px solid #FF7C1F;
  }
`

export const ChatSetting = styled.div`
  display: ${props => props.active ? "block" : "none"};
  position: absolute;
  transform: translate3d(0px, 38px, 0px);
  top: 0px;
  right: 0px;
  will-change: transform;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem; 

  .setting-item {
    width: 100%;
    padding: 0.5rem 1rem;
    font-weight: 400;
    color: #0E3854;
  }
`
