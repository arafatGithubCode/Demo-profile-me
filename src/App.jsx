import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/themes";
import Navbar from "./components/navbar/Index";

import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body></Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}
