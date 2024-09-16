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
import Setting from "./pages/Setting";
import Profile from "./components/Setting/Profile";
import Account from "./components/Setting/Account";
import Subscriptions from "./components/Setting/Subscriptions";
import Purchase from "./components/Setting/Purchase";
import CourseOverview from "./pages/CourseOverview";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Layout and Authentication Routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="siginpassword" element={<SigninPassword />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="passwordcode" element={<Passwordcode />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>

        {/* Dashboard and Course Overview Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courseoverview/:courseId" element={<CourseOverview />} />

        {/* Setting Page with Nested Routes */}
        <Route path="/setting" element={<Setting />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="subscription" element={<Subscriptions />} />
          <Route path="purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
