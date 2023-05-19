import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import Globalstyle from "./styles/Globalstyle";
import { Signup } from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <Globalstyle />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
