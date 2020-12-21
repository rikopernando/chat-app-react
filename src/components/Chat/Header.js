import React, {useState} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import SettingIcon from "../../icons/Setting"
import {removeSession} from "../../utils/session"

const ChatHeader = styled.div`
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
`

const ChatSetting = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  transform: translate3d(0px, 38px, 0px);
  top: 0px;
  right: 0px;
  will-change: transform;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;

  .setting-item {
    width: 100%;
    padding: 0.5rem 1rem;
    font-weight: 400;
    color: #0e3854;
  }
`

const Header = (props) => {
  const [isSetting, setSetting] = useState(false)

  const onExit = () => {
    removeSession("chat-apps")
    props.history.push("/")
  }

  return (
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
  )
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default Header
