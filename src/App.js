import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import Globalstyle from "./styles/Globalstyle";
import { Signup } from "./pages/Signup/Signup";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { Setting } from "./pages/Settings/Setting";

function App() {
  const localThemeMode = window.localStorage.getItem("theme" || "lightTheme");
  const [themeMode, setThemeMode] = useState(localThemeMode);
  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  // const toggleTheme = useCallback(() => {
  //   if (themeMode === "lightTheme") {
  //     setThemeMode("darkTheme");
  //     window.localStorage.setItem("theme", "darkTheme");
  //   } else {
  //     setThemeMode("lightTheme");
  //     window.localStorage.setItem("theme", "lightTheme");
  //   }
  // });
  const toggleTheme = () => {
    if (themeMode === "lightTheme") {
      setThemeMode("darkTheme");
      window.localStorage.setItem("theme", "darkTheme");
    } else {
      setThemeMode("lightTheme");
      window.localStorage.setItem("theme", "lightTheme");
    }
  };

  // 파이어베이스 데이터가져오기

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Routes>
        <Route path="/" element={<Setting />} />
        <Route
          path="/home"
          element={<Home toggleTheme={toggleTheme} themeMode={themeMode} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
