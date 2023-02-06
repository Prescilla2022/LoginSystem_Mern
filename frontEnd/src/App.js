import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import "./styles/header.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/forgot.css";
import "./styles/success.css";
import Forgot from "./components/ForgotPassword";
import ResetNewPassword from "./components/ResetNewPassword";
import Success from "./components/Success";
import UpdatedStatus from "./components/UpdatedStatus";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Forgot" element={<Forgot />} />

        <Route
          path="/ResetNewPassword/:id/:resetToken"
          element={<ResetNewPassword />}
        />
        <Route exact path="/UpdatedStatus" element={<UpdatedStatus />} />
      </Routes>
    </div>
  );
}

export default App;
