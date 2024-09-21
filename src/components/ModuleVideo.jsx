import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import mod1 from "../assets/Image/moduleimg1.png";

const ModuleVideo = () => {
  return (
    <>
      <div className="  pl-10 ">
        <div className="flex space-x-1 font-inter">
          <h2 className="text-2xl font-semibold">Month 1 </h2>
          <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
          <h2 className="text-2xl font-semibold">Week1</h2>
          <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
          <h2 className="text-2xl font-semibold">Day#1</h2>
        </div>

        <div className="mt-5 font-inter">
          <h3 className="py-2 font-medium text-xl ">
            Deep Learning Fundamentals{" "}
          </h3>
          <div className="w-full">
            <img className="max-w-[845px] max-h-[409px]:" src={mod1} alt="" />
          </div>
        </div>
        <div className="py-5 space-y-3 font-inter">
          <h4 className="text-lg font-medium">About the Topic</h4>
          <p className="min-w-[800px] text-sm">
            Lorem ipsum dolor sit amet consectetur. Nisi feugiat id proin
            bibendum senectus aliquam nulla. Nisl sed turpis nunc enim at amet
            orci. Libero egestas in netus volutpat. Et iaculis faucibus lacus
            integer. Etiam libero eu rhoncus dis. Nulla ac nisi donec ridiculus
            ultrices rhoncus. Quis in arcu lectus cras tortor enim auctor
            venenatis in. Vel libero aenean at proin ut ornare. Morbi ultrices
            rhoncus curabitur cursus nulla consectetur.
          </p>
          <button className="p-3 text-white bg-black rounded-xl">Download Notes as PDF</button>
        </div>
      </div>
    </>
  );
};

export default ModuleVideo;
