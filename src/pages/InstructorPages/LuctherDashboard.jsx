
import Footer from "../../components/Footer";
import Searchbar from "../../Searchbar/searchbar";
import Aicalender from "../../components/Aicalender";
import live from "../../assets/Image/live.png";
import syllbus from "../../assets/Image/syllbus.png";
import calender from "../../assets/Image/calendar.png";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";

const LuctherDashboard = () => {


  return (
    <>
      <LuctherNavbar />
      <Searchbar />
      <Aicalender />
      <div className="mt-10 px-4 lg:px-10 relative">
        <div className="text-center">
          <h2 className="py-2 font-inter text-4xl lg:text-5xl font-extrabold">
            Welcome <span className="text-green-400"> Priya Chawla</span>
          </h2>
          <h3 className="font-inter text-2xl lg:text-3xl font-extrabold">
            at Course Compass as an instructor!
          </h3>
        </div>

        {/* Courses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 pr-6  lg:grid-cols-3 gap-12 mt-20">
          <div className="border-2  font-inter px-6 space-y-6 py-5 rounded-2xl">
            <div>
              <img className=" w-20" src={live} alt="logo" />
            </div>
            <h2 className="text-2xl font-bold">Go Live ! </h2>
            <p className="w-60">
              Host live lectures at Course Compass LMS. Host live lectures at.
            </p>
            <button className="w-full p-2  bg-green-500 rounded-md font-semibold text-white">
              Host a Lecture
            </button>
          </div>
          <div className="border-2  font-inter px-6 space-y-4 py-5 rounded-2xl">
            <div>
              <img className=" w-20" src={syllbus} alt="logo" />
            </div>
            <h2 className="text-2xl font-bold">Course Syllabus! </h2>
            <p className="w-60">
              Host live lectures at Course Compass LMS. Host live lectures at.
            </p>
            <button className="w-full p-2  bg-yellow-400 rounded-md font-semibold ">
              Go to Course Syllabus
            </button>
          </div>
          <div className="border-2  font-inter px-6 space-y-4 py-5 rounded-2xl">
            <div>
              <img className=" w-20" src={calender} alt="logo" />
            </div>
            <h2 className="text-2xl font-bold">My Calendar! </h2>
            <p className="w-64">
              Share the schedule for your upcoming live classes on the
              generative AI course.
            </p>
            <button className="w-full p-2  bg-[#0455BF] rounded-md font-semibold text-white">
              Go to My Calendar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LuctherDashboard;
