import logo from "../assets/Image/logo.png";
import facimg from "../assets/Image/facebook.png";
import twitimg from "../assets/Image/x.png";
import linkimg from "../assets/Image/Linkedin.png"

const FooterDashboard = () => {
  return (
    <>
      {" "}
      <div className="bg-[#282828] mt-10 font-inter px-2 pt-5 lg:pr-16 lg:pt-6 text-white font-poppins">
        <div className="   grid gap-2 grid-flow-col grid-cols-7 ">
          <div className="list-none  mx-auto  space-y-1 col-span-2 md:col-span-2">
            <img className="w-52" src={logo} alt="logo" />
            <div>
              <p className="text-center text-[#A5A5A5]">Get in touch</p>
              <div className="flex justify-center space-x-2 py-2">
                <img className="w-6" src={facimg} alt="img" />
                <img className="w-6" src={twitimg} alt="img" />
                <img className="w-6" src={linkimg} alt="img" />
              </div>
            </div>
          </div>
          <div className="list-none  space-y-3">
            <li className=" lg:text-base  font-medium">Dashboard</li>
            <li className="lg:text-base  font-medium">My Courses</li>
            <li className="lg:text-base  font-medium">My Certificates</li>
          </div>
          <div className="list-none  space-y-3">
            <li className="lg:text-base  font-medium">Assessments</li>
            <li className="lg:text-base  font-medium">Settings</li>
            <li className="lg:text-base  font-medium">Privacy Policy </li>
          </div>
          <div className="list-none  space-y-3">
            <li className="lg:text-base  font-medium">Privacy Policy</li>
          </div>
          <div className="p-[3px] md:p-2 lg:px-4 lg:py-3 bg-[#4F4F4F] rounded-xl col-span-2 md:col-span-2">
            <h3 className="text-[5.5px] md:text-[12px] lg:text-base whitespace-nowrap font-semibold">
              SUBSCRIBE TO OUR NEWSLETTER!
            </h3>
            <div className="flex py-5 space-x-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="h-3 md:h-5 lg:h-8 w-full pl-5 text-black focus:outline-none rounded-3xl text-[3px] md:text-[5px] lg:text-xs  placeholder:text-[#616161] placeholder:text-[3px] md:placeholder:text-[5px] lg:placeholder:text-xs"
              />
              <button className="w-full bg-black md:text-[7px] lg:text-xs rounded-3xl text-[4px] font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <p className=" py-2 text-[#7F7F7F] text-sm text-center ">
          Copyright @CourseCompass 2024
        </p>
      </div>
    </>
  );
}

export default FooterDashboard