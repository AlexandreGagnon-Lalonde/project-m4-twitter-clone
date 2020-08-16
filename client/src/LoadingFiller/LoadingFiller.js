import React from "react";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { COLORS } from "../constants";

const LoadingFiller = () => {
  const props = useSpring({
    opacity: 1,
    transform: "rotateZ(360deg)",
    config: {
      tension: 5,
      friction: 0,
    },
    from: { opacity: 0.5, transform: "rotateZ(0deg)" },
  });
  const AnimatedIcon1 = animated(LoadingIcon1);
  const AnimatedIcon2 = animated(LoadingIcon2);
  const AnimatedIcon3 = animated(LoadingIcon3);
  const AnimatedIcon4 = animated(LoadingIcon4);
  return (
    <StyledDiv>
      <AnimatedIcon1 style={props}>
        <AnimatedIcon2 style={props}>
          <AnimatedIcon3 style={props}>
            <AnimatedIcon4 style={props}></AnimatedIcon4>
          </AnimatedIcon3>
        </AnimatedIcon2>
      </AnimatedIcon1>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
const LoadingIcon1 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px dotted ${COLORS.primary};
`;
const LoadingIcon2 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px dotted ${COLORS.loadingOrange};
`;
const LoadingIcon3 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px dotted ${COLORS.loadingLime};
`;
const LoadingIcon4 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px dotted ${COLORS.loadingPink};
`;

export default LoadingFiller;
