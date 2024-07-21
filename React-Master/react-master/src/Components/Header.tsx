import { Link, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

function Header() {
  const homeMatch = useRouteMatch("/");
  const comingSoonMatch = useRouteMatch("/coming-soon");
  const nowPlayingMatch = useRouteMatch("/now-playing");
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Items>
          <Item>
            <Link to="/">
              POPULAR {homeMatch?.isExact && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/coming-soon">
              COMMING SOON {comingSoonMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/now-playing">
              NOW PLAYING {nowPlayingMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Header;
