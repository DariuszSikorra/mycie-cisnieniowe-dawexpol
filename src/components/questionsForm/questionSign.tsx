import React from "react";
import { useSpring, animated } from "@react-spring/web";
import svgSign from "../assets/minus.svg";

interface QuestionSignProps {
  visibility: boolean;
}

const QuestionSign: React.FC<QuestionSignProps> = ({ visibility }) => {
  const turnStyle = useSpring({
    transform: visibility ? "rotate(0deg)" : "rotate(90deg)",
  });

  const staticStyle: React.CSSProperties = {
    width: "15px",
    height: "15px",
    position: "absolute",
    top: -15,
  };

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <animated.img
        style={{ ...staticStyle, ...turnStyle }}
        src={svgSign}
        alt="minus"
      />
    </span>
  );
};

export default QuestionSign;
