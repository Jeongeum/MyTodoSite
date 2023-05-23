import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import Globalstyle from "./styles/Globalstyle";
import { Signup } from "./pages/Signup/Signup";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const [themeMode, setThemeMode] = useState("lightTheme");
  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeMode(themeMode === "lightTheme" ? "darkTheme" : "lightTheme");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <Routes>
          <Route path="/home" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
