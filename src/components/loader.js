import React from "react";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import loader from "./loading-gif-1.json";


class Loading extends React.Component {
  render() {
    const defaultOptions = {
        
      loop: false,
      autoplay: true,
      animationData: loader,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div >
        <Lottie  options={defaultOptions} height={350} width={350} speed="7"/>
      </div>
    );
  }
}

export default Loading;
