import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/themes";
import Navbar from "./components/navbar/Index";
import HeroSection from "./components/heroSection/Index";

import styled from "styled-components";
import Skills from "./components/skills/Skill";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

export default function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}
