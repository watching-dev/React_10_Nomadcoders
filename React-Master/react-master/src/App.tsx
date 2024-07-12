import styled from "styled-components";
import {
  AnimatePresence,
  delay,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 10px;
  border-radius: 40px;
  display: flex;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
