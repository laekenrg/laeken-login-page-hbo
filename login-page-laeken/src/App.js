import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Header from "./Components/Header";
import Landing from "./Components/Landing";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
