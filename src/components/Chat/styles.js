import styled from 'styled-components'

export const ChatHeader = styled.div`
  color: #ffffff;
  margin: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  .app-name {
    display: flex;
  }

  span {
    margin-top: 3px;
    font-size: 16px;
  }
`

export const ChatBox = styled.div`
  padding: 10px;
  font-size: 13px;
  overflow-y: auto;
  margin-bottom: 50px;
`

export const ChatItem = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  margin-bottom: 10px;
  font-size: 12px;
  width: 80%;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14);

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
    display: block;
    width: 100%;
    padding: .25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
`
