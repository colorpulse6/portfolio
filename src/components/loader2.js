import React from "react";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import loader2 from "./loading-gif-2.json";

const styles ={
    marginTop:'-10px',
}
class Loading2 extends React.Component {
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: loader2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div style={styles}>
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
    );
  }
}

export default Loading2;