import React from "react"
import BeatLoader from "react-spinners/BeatLoader"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)"
}

const Loader = () => (
  <div style={style}>
    <BeatLoader sizeUnit={"px"} size={14} color={"#FF7C1F"} />
  </div>
)

export default Loader
