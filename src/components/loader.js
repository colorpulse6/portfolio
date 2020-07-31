import React from "react";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import loader from "./loading-gif-1.json";

const styles ={
    marginTop:'-10px',
    position:'absolute',
    left:'37.7%',
    top:'-25.5px',

}
class Loading extends React.Component {
  render() {
    const defaultOptions = {
        
      loop: true,
      autoplay: true,
      animationData: loader,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div style={styles}>
        <Lottie speed={3} options={defaultOptions} height={350} width={350} />
      </div>
    );
  }
}

export default Loading;
