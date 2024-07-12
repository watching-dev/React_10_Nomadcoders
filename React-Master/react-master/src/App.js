import styled from "styled-components";
import {
  delay,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  // useEffect(() => {
  //   x.on("change", () => console.log(x.get()));
  // }, [x]);
  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <Wrapper>
      <button
        onClick={() => {
          x.set(200);
        }}
      >
        click me
      </button>
      <Box style={{ x }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
