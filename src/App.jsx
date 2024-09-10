import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import SigninPassword from "./components/SigninPassword";
import ForgotPassword from "./components/ForgotPassword";
import Passwordcode from "./components/Passwordcode";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="siginpassword" element={<SigninPassword />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="passwordcode" element={<Passwordcode />} />
          <Route path="changepassword" element={<ChangePassword/>} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
