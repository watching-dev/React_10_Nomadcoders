import styled from "styled-components";
import {
  delay,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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
  const rotateZ = useTransform(x, [-800, 800], [360, -360]);
  useMotionValueEvent(rotateZ, "change", (latest) => {
    console.log("x changed to", latest);
  });
  const gradient = useTransform(
    x,
    [-800, /*0,*/ 800],
    [
      "linear-gradient(135deg, rgb(0,210,238),rgb(0,83,238)",
      // "linear-gradient(135deg, rgb(238,0,153),rgb(221,0,238)",
      "linear-gradient(135deg, rgb(0,238,155),rgb(238,178,0)",
    ]
  );
  // motionValue는 state가 아니라서 리랜더링을 안함. 차이점 주의
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, [scrollY, scrollYProgress]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <button
        onClick={() => {
          x.set(200);
        }}
      >
        click me
      </button>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
