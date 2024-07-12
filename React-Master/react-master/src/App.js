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

const Svg = styled.svg`
  height: 300px;
  width: 300px;
  /* color: white; */
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { fill: "rgba(255, 255, 255, 0)", pathLength: 0 },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
    // transition: { duration: 5 },
  },
};

function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
          variants={svg}
          // initial={{
          //   fill: "rgba(255, 255, 255, 0)", // 처음 세팅이 이렇고
          //   pathLength: 0, // airbnb 길이인데
          // }}
          initial="start"
          // animate={{
          //   fill: "rgba(255, 255, 255, 1)", // 시작하면 이렇게 될건데
          //   pathLength: 1, // 각각 값에 따라 이미지 그려지는게 다르게 보임
          // }}
          animate="end"
          // transition={{ duration: 5 }} // 시간이 이만큼 걸려
          // fill="currentColor"
          // fill="transparent" // 배경 투명
          // stroke="white" // 라인선 색상
          // strokeWidth={2}
          transition={{
            // 위 svg에서 duration을 준다면 같이 동작함, 따로 동작시키려면 여기 transition prop을 이용해야 함
            default: { duration: 5 }, // 모든 설정은 5초동안 실행
            fill: { duration: 1, delay: 3 }, // fill만 2초동안 실행하는데 딜레이가 3초임
          }}
          d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
        />
      </Svg>
    </Wrapper>
  );
}

export default App;
