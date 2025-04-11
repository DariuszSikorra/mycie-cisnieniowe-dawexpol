import { useSpring, animated } from "react-spring";

const Answer = (props) => {
  const slide = useSpring({
    margin: props.visibility ? "0px 0px 0px 15px" : "-100% 0 0 15px",
  });
  const overflow = {
    overflow: "hidden",
  };

  return (
    <div style={overflow}>
      <animated.p className="questionBox__response" style={slide}>
        {props.answer}
      </animated.p>
    </div>
  );
};

export default Answer;
