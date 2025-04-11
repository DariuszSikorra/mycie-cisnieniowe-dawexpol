import React from "react";
import { useSpring, animated } from "react-spring";

import svgSign from "../assets/minus.svg";

const QuestionSign = props => {
  const turnLeft = useSpring({
    transform: props.visibility ? "rotate(0deg)" : "rotate(90deg)",
    width: "15px",
    height: "15px",
    position: "absolute"
  });
  const svgStyle = {
    width: "15px",
    height: "15px",
    position: "absolute"
  };

  const alt = "minus"

  return (
    <span>
        <animated.img style={turnLeft} src={svgSign} alt={alt}/>
        <img style={svgStyle} src={svgSign} alt={alt}/>
    </span>
  );
};

export default QuestionSign;
