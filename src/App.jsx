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
import Purchase from "./components/Setting/Purchase";
import LuctherSetting from "./pages/InstructorPages/LuctherSetting.jsx";
import AccountIN from "./components/Instructor/Setting/Account.jsx";
import Help from "./components/Instructor/Setting/Help.jsx";
import ProfileIN from "./components/Instructor/Setting/Profile.jsx";
import CourseOverview from "./pages/CourseOverview";
import MyCertificates from "./pages/MyCertificates";
import Notification from "./pages/Notification";
import Cart from "./pages/Cart";
import MyCourses from "./pages/MyCourses";
import CoursesModule from "./pages/CoursesModule";
import LuctherHomeLayout from "./pages/InstructorPages/LuctherHomepage";
import LuctherLogin from "./components/Instructor/LuctherLogin";
import LuctherRegister from "./components/Instructor/LuctherRegister";
import LuctherDashboard from "./pages/InstructorPages/LuctherDashboard";
import Module from "./pages/Module";
import ModuleVideo from "./components/Module/ModuleVideo";
import VideoLive from "./components/Module/ViedoLive";
import QuizTest from "./components/Module/QuizTest";
import AssessementTest from "./components/Module/AssessementTest";
import Assessments from "./pages/Assessments";
import QuizReport from "./pages/QuizReport";
import AssessmentReport from "./pages/AssessmentReport";
import CalanderPage from "./pages/InstructorPages/CalanderPage";
import AssessmentMiniproject from "./components/AssessmentMiniproject";
import Livepage from "./pages/InstructorPages/Livepage";
import { CourseProvider } from "./Context/CourseContext";
import LuctherSignin from "./components/Instructor/LuctherSignin";
import LuctherSigninPassword from "./components/Instructor/LuctherSigninPassword";
import LuctherForgotPassword from "./components/Instructor/LuctherForgotPassword";
import LuctherPasswordcode from "./components/Instructor/LuctherPasswordcode";
import LuctherChangePassword from "./components/Instructor/LuctherChangePassword";
import Classroam from "./pages/InstructorPages/Classroam";
import Grading from "./pages/InstructorPages/Grading";
import Studentmark from "./pages/InstructorPages/Studentmark.jsx";
import LuctherNotification from "./components/Instructor/LuctherNotification.jsx";
import { AuthProvider } from "./Context/AuthProvider";
import ProtectedRoute from "./Context/ProtectedRoute.jsx";

function App() {
  const idToken = "YOUR_ID_TOKEN"; // Replace with actual token retrieval logic
  const course = {}; // Replace with actual course data retrieval logic

  return (
    <Router>
      <AuthProvider>
        <CourseProvider>
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

            {/* Instructor Pages */}
            <Route path="/luctherhomelayout" element={<LuctherHomeLayout />}>
              <Route index element={<LuctherLogin />} />
              <Route path="luctherlogin" element={<LuctherLogin />} />
              <Route path="luctherregister" element={<LuctherRegister />} />
              <Route path="lucthersignin" element={<LuctherSignin />} />
              <Route
                path="lucthersiginpassword"
                element={<LuctherSigninPassword />}
              />
              <Route
                path="luctherforgotpassword"
                element={<LuctherForgotPassword />}
              />
              <Route
                path="luctherpasswordcode"
                element={<LuctherPasswordcode />}
              />
              <Route
                path="luctherchangepassword"
                element={<LuctherChangePassword />}
              />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/luctherdashboard" element={<LuctherDashboard />} />
            </Route>
            <Route path="/calanderpage" element={<CalanderPage />} />
            <Route path="/livepage" element={<Livepage />} />
            <Route path="/classroam/:id" element={<Classroam />} />
            <Route path="/grading/:assessmentId" element={<Grading />} />
            <Route
              path="/lucthernotification"
              element={<LuctherNotification />}
            />
            <Route
              path="/studentmark/:assessmentId/:studentId/:studentname"
              element={<Studentmark />}
            />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/mycourses" element={<MyCourses />} />
            </Route>

            {/* Dashboard and Course Overview Routes */}
            <Route
              path="/courseoverview/:courseId"
              element={<CourseOverview />}
            />
            <Route path="/cart" element={<Cart />} />

            {/* Setting Page with Nested Routes */}
            <Route path="/setting" element={<Setting />}>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
              <Route path="purchase" element={<Purchase />} />
            </Route>

            {/* Instructor Setting Page with Nested Routes */}
            <Route path="/lucthersetting" element={<LuctherSetting />}>
              <Route path="profile" element={<ProfileIN />} />
              <Route path="account" element={<AccountIN />} />
              <Route path="help" element={<Help />} />
            </Route>

            <Route path="/mycertificates" element={<MyCertificates />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/coursesmodule" element={<CoursesModule />} />

            {/* Module with Props */}
            <Route path="/module" element={<Module idToken={idToken} course={course} />}>
              <Route index element={<ModuleVideo />} />
              <Route path="quiztest" element={<QuizTest />} />
              <Route path="assessementtest" element={<AssessementTest />} />
              <Route path="modulevideo" element={<ModuleVideo />} />
              <Route path="videolive" element={<VideoLive />} />
            </Route>

            <Route path="/quizreport" element={<QuizReport />} />
            <Route path="/assessmentreport" element={<AssessmentReport />} />
            <Route path="/project" element={<AssessmentMiniproject />} />
          </Routes>
        </CourseProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
