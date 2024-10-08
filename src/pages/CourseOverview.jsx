import { IoMdPerson } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import data from "../assets/Image/data.png";
import ai from "../assets/Image/ai.png";
import mlgif from "../assets/Image/ml.gif";
import ml from "../assets/Image/ml.png";
import datagif from "../assets/Image/data.gif";
import aigif from "../assets/Image/ai.gif";
import Navbar from "../components/Navbar";
import Aicalender from "../components/Aicalender";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa6";
import certificate from "../assets/Image/certificate.png";
import { CiCalendarDate } from "react-icons/ci";

const CourseOverview = () => {
  const { courseId } = useParams(); // Get the courseId from the URL

  const courses = [
    {
      id: "generative-ai",
      name: "Generative AI",
      image: aigif,
      icon: ai,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "data-science",
      name: "Data Science",
      image: datagif,
      icon: data,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "Prompt Engineering",
      name: "Prompt Engineering",
      image: mlgif,
      icon: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  // Find the course that matches the courseId
  const course = courses.find((c) => c.id === courseId);

  return (
    <>
      <Navbar />
      <Aicalender />

      <div className="drop-shadow-2xl mt-20 z-10  flex relative container mx-auto text-black rounded-3xl px">
        <div className="-ml-32 absolute">
          <Link to="/dashboard">
            <RxDoubleArrowLeft size={32} />
          </Link>
        </div>
        <div className="w-3/5">
          <img
            className="bg-cover bg-left rounded-l-3xl w-full h-full"
            src={course.image}
            alt={course.name}
          />
        </div>
        <div className="w-2/5 -ml-4 border-[1px] drop-shadow-2xl rounded-3xl">
          <div className="bg-center h-28 w-full flex flex-col rounded-t-3xl relative justify-center items-center bg-white text-white">
            <p className="rounded-full text-xs top-6 right-40 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
              Popular
            </p>
            <p className="rounded-full text-xs top-6 right-5 text-left absolute bg-red-600 ml-2 p-2">
              Top Recommended
            </p>

            <h2 className="text-2xl text-black flex xl:text-4xl font-semibold font-inter absolute bottom-0 left-3">
              <img className="pr-4 -mt-2" src={course.icon} alt="logo" />
              {course.name}
            </h2>
          </div>
          <div className="bg-white mx-auto rounded-b-3xl px-5 py-4">
            <p className="font-inter text-secondary text-sm">
              {course.description}
            </p>
            <div className="py-5 space-y-4">
              <p className="flex font-light items-center font-inter">
                <IoMdPerson size={25} className="mr-2" /> {course.instructor}
              </p>
              <p className="flex font-light items-center font-inter">
                <MdAccessTime size={25} className="mr-2" /> {course.duration}
              </p>
              <p className="flex font-light items-center font-inter">
                <TbCertificate size={25} className="mr-2" /> Certification
              </p>
            </div>

            <div className="flex text-sm justify-evenly gap-4 py-5">
              
              <button className="font-inter font-bold text-white  px-6 bg-black border-[1px] p-2 rounded-lg w-full">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto mt-10   grid grid-cols-5 justify-items-center text-center">
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            7 Module Series
          </h3>
          <p className="text-xs font-inter font-normal">
            Earn a career credential that demonstrates
          </p>
        </div>
        <div className="px-2 ">
          <h3 className="text-lg flex gap-x-2 my-auto font-inter font-bold underline py-1">
            4.5
            <FaStar className="my-auto" />
          </h3>
        </div>
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            Intermediate level
          </h3>
          <p className="text-xs font-inter font-normal">
            Recommended experience
          </p>
        </div>
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            Flexible schedule
          </h3>
          <p className="text-xs font-inter font-normal">
            6 months, 10 hours a week.Learn at your own pace.
          </p>
        </div>
        <div className="px-2">
          <h3 className="text-lg font-inter font-bold underline py-1">
            Earn degree credit
          </h3>
        </div>
      </div>
      <div className="text-center mt-14">
        <h2 className="font-inter text-4xl font-bold"> Course Overview</h2>
        <p className=" py-6 font-inter w-2/6 px-5 font-medium mx-auto text-center">
          Mastering AI Innovation: A 2-Month Journey through 5 Cutting-Edge
          Generative Technology Subcategories
        </p>
        <div className=" relative">
          <h2 className=" font-inter text-3xl font-bold">
            Month #1{" "}
            <span className=" underline ml-2 font-inter text-lg font-bold ">
              Covers 4 Subcategories
            </span>
          </h2>
          <div className=" relative mt-10 ">
            <div className="  justify-items-center">
              <div className=" space-y-2">
                <h2 className="text-[#ED0004] mr-28 relative text-lg font-semibold">
                  <CiCalendarDate
                    className="my-auto left-1/2 -translate-x-16 absolute "
                    size={30}
                  />{" "}
                  WEEK
                </h2>
                <h3 className="font-bold mr-32  underline">Category 1</h3>
                <p className="font-semibold mr-40">
                  (Introduction to AI/ML & Generative AI)
                </p>
                <ul className="text-left text-base list-disc list-outside pl-6">
                  <li>Fundamentals</li>
                  <li>Generative Adversarial Networks</li>
                  <li>Machine Learning Basics</li>
                  <li>Deep Learning Fundamentals</li>
                  <li>Generative Models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex  place-content-center ">
          <div className="bg-[#092E47]/95 backdrop-blur-42 drop-shadow-xl  border-4 border-transparent pointer-events-none border-[#9B9B9B]  justify-items-center py-5 font-inter text-cer w-4/6  text-center rounded-3xl ">
            <div className="flex justify-center text-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="51"
                viewBox="0 0 47 51"
                fill="none">
                <path
                  d="M34.8009 17.1198L39.2706 6.15637C39.3549 5.90337 39.3549 5.56603 39.1862 5.31303L38.8489 4.89136H38.4272L27.0422 7.92738L18.3558 0.253001L18.0184 0H17.6811C17.1751 0 16.7534 0.421669 16.7534 0.843338L16.0788 12.6501L6.21171 18.8064C5.87437 18.9751 5.79004 19.3124 5.79004 19.6498L5.87437 20.2401L17.1751 24.7941L22.6568 41.4922C22.7411 41.9139 23.1628 42.1669 23.5001 42.1669C23.8375 42.1669 24.2591 41.9139 24.3435 41.5766L29.6565 27.2398L40.1982 28.5048H40.2826C40.6199 28.5048 40.9572 28.3362 41.0416 27.9988L41.2946 27.4928L34.8009 17.1198Z"
                  fill="#FFD54F"
                />
                <path
                  d="M28.5595 9.27742L26.6198 9.86776L24.3428 7.84375L31.5111 25.8068L35.3062 26.2285L28.5595 9.27742Z"
                  fill="#FFECB3"
                />
                <path
                  d="M20.3792 4.30226L18.3552 2.53125L17.7649 13.6633L17.0059 14.085L25.1862 34.5781L28.5596 25.3857L28.8126 25.47L20.3792 4.30226Z"
                  fill="#FFE082"
                />
                <path
                  d="M23.6677 40.2276L22.2341 35.9266L23.1617 35.5893L23.7521 37.2759L24.8484 34.2399L25.7761 34.5773L23.6677 40.2276ZM26.3664 32.8063L25.4388 32.4689L28.3904 24.5415L32.3541 25.0475L32.2698 25.9752L29.0651 25.5535L26.3664 32.8063ZM38.4262 25.9752L37.4142 24.2885L38.2575 23.7825L39.2695 25.4692L38.4262 25.9752ZM18.6077 24.7945L18.186 23.6139L7.22266 19.2285L8.48766 18.4695L8.74066 18.8068L19.0294 22.9392L19.5354 24.5415L18.6077 24.7945ZM10.6803 18.2165L10.1743 17.3732L16.7524 13.2408L17.2584 14.0842L10.6803 18.2165ZM35.0528 14.0842L34.1251 13.7468L37.0768 6.57845L38.0045 6.91578L35.0528 14.0842ZM26.7881 9.78313L25.0171 8.18079L25.6918 7.42179L27.1254 8.68679L36.0648 6.32545L36.3178 7.25312L26.7881 9.78313ZM19.1137 3.03643L18.5234 2.53043H18.0174L18.1017 0.84375L19.7884 2.36176L19.1137 3.03643Z"
                  fill="#FFCA28"
                />
                <path
                  d="M32.7761 40.4805H14.2227V44.6972H32.7761V40.4805Z"
                  fill="#FF7043"
                />
                <path
                  d="M36.1497 43.0117H10.8496V49.7584H36.1497V43.0117Z"
                  fill="#B71C1C"
                />
                <path
                  d="M36.9927 48.9141H10.0059V50.6007H36.9927V48.9141Z"
                  fill="#3E2723"
                />
                <path
                  d="M29.4034 43.0117H17.5967V48.0717H29.4034V43.0117Z"
                  fill="#FFB300"
                />
                <path
                  d="M28.5595 43.8555H18.4395V47.2288H28.5595V43.8555Z"
                  fill="#FBE9E7"
                />
                <path
                  d="M10.6814 39.6378L7.13934 34.8308C6.296 32.2165 6.296 29.5178 7.13934 26.9878C7.22367 26.7348 7.47667 26.4818 7.81401 26.3974C8.15134 26.3131 8.40435 26.4818 8.65735 26.6504C11.5247 30.2768 12.368 35.2525 10.6814 39.6378Z"
                  fill="#FFCA28"
                />
                <path
                  d="M6.12798 32.9756C5.79064 32.2166 5.53764 31.6262 5.36897 31.0359C6.80265 26.6505 5.87498 21.8435 2.92329 18.3858C2.75463 18.2171 2.50163 18.1328 2.33296 18.1328C1.91129 18.1328 1.65829 18.3858 1.48962 18.7231C0.140279 23.1928 1.40529 28.0842 4.60997 31.4576C4.77864 32.0479 5.03164 32.6382 5.36897 33.3972L6.12798 32.9756Z"
                  fill="#FFCA28"
                />
                <path
                  d="M8.74157 35.4202C8.0669 35.4202 7.47656 34.6612 7.47656 33.7336C7.47656 32.8059 8.0669 32.0469 8.74157 32.0469C9.41624 32.0469 10.0066 32.8059 10.0066 33.7336C10.0066 34.6612 9.41624 35.4202 8.74157 35.4202Z"
                  fill="#FFB300"
                />
                <path
                  d="M3.09142 31.5437C2.66975 31.5437 2.16375 31.2907 1.74208 30.9533C1.40474 30.616 1.23608 30.2787 1.15174 29.9413C1.06741 29.5197 1.15174 29.098 1.40474 28.845C1.91075 28.339 2.83842 28.5077 3.51309 29.1823C3.85042 29.5197 4.01909 29.857 4.10342 30.1943C4.18776 30.616 4.10342 31.0377 3.85042 31.2907C3.68176 31.4593 3.34442 31.5437 3.09142 31.5437Z"
                  fill="#FFB300"
                />
                <path
                  d="M12.5368 40.8185C11.9465 40.3968 11.2718 39.8908 10.5971 39.2161C9.16345 34.8308 5.53709 31.4574 0.983067 30.5298C0.645732 30.4454 0.308397 30.6141 0.139729 30.8671C-0.0289386 31.1201 -0.0289389 31.3731 0.0553949 31.6261C1.65774 35.9271 5.53709 39.1318 10.0911 39.8908C10.7658 40.4811 11.4405 41.0715 12.0308 41.4931L12.5368 40.8185Z"
                  fill="#FFB300"
                />
                <path
                  d="M36.3191 39.6378L39.8612 34.8308C40.7045 32.2165 40.7045 29.5178 39.8612 26.9878C39.7768 26.7348 39.5238 26.4818 39.1865 26.3974C38.8492 26.3131 38.5961 26.4818 38.3431 26.6504C35.4758 30.2768 34.6325 35.2525 36.3191 39.6378Z"
                  fill="#FFE082"
                />
                <path
                  d="M40.873 32.9756C41.2104 32.2166 41.4634 31.6262 41.6321 31.0359C40.1984 26.6505 41.1261 21.8435 44.0777 18.3858C44.2464 18.2171 44.4994 18.1328 44.6681 18.1328C45.0897 18.1328 45.3427 18.3858 45.5114 18.7231C46.8607 23.1928 45.5957 28.0842 42.3911 31.4576C42.2224 32.0479 41.9694 32.6382 41.6321 33.3972L40.873 32.9756Z"
                  fill="#FFD54F"
                />
                <path
                  d="M36.9941 33.7336C36.9941 32.8059 37.5845 32.0469 38.2591 32.0469C38.9338 32.0469 39.5242 32.8059 39.5242 33.7336C39.5242 34.6612 38.9338 35.4202 38.2591 35.4202C37.5845 35.4202 36.9941 34.6612 36.9941 33.7336Z"
                  fill="#FFB300"
                />
                <path
                  d="M43.1499 31.2034C42.8969 30.9504 42.8125 30.5288 42.8969 30.1071C42.9812 29.7697 43.1499 29.3481 43.4872 29.0951C44.1619 28.4204 45.0895 28.3361 45.5955 28.7577C45.8485 29.0107 45.9329 29.4324 45.8485 29.8541C45.7642 30.1914 45.5955 30.6131 45.2582 30.8661C44.8365 31.2878 44.4149 31.4564 43.9089 31.4564C43.6559 31.5408 43.3185 31.4564 43.1499 31.2034Z"
                  fill="#FFB300"
                />
                <path
                  d="M34.4639 40.8185C35.0542 40.3968 35.7289 39.8908 36.4035 39.2161C37.8372 34.8308 41.4636 31.4574 46.0176 30.5298C46.3549 30.4454 46.6923 30.6141 46.8609 30.8671C47.0296 31.1201 47.0296 31.3731 46.9453 31.6261C45.3429 35.9271 41.4636 39.1318 36.9095 39.8908C36.2349 40.4811 35.5602 41.0715 34.9699 41.4931L34.4639 40.8185Z"
                  fill="#FFCA28"
                />
              </svg>
              <h2 className=" py-2 text-2xl pl-5 font-semibold underline ">
                Skills youll gain
              </h2>
            </div>
            <div className=" container py-5">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4  px-10">
                <li className="list-none  text-left py-2 font-normal text-base">
                  1. Mastery of Generative AI and GANs
                </li>
                <li className="list-none text-left py-2 font-normal text-base">
                  4. AI-Powered Personalization Systems
                </li>
                <li className="list-none text-left py-2 font-normal text-base">
                  2. Proficiency in Deep Learning Frameworks
                </li>
                <li className="list-none text-left py-2 font-normal text-base">
                  5. Image Processing and Transformation
                </li>
                <li className="list-none text-left py-2 font-normal text-base">
                  3. Sequence Modeling with LSTMs:
                </li>
                <li className="list-none text-left py-2 font-normal text-base">
                  6. Practical, Hands-on AI Project Experience
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-28 relative   place-content-center ">
          <div className=" bg-[#9D6F16] border-4 border-white borde py-12 font-inter text-cer w-2/3 drop-shadow-md  px-8 rounded-l-3xl ">
            <h2 className="py-4 text-2xl font-semibold underline">
              Earn a career certificate
            </h2>
            <p className="py-2 w-2/3 leading-10 font-normal text-base">
              Add this credential to your LinkedIn profile, resume or CV Share
              it <br /> on social media and in your performance review
            </p>
          </div>
          <div className=" absolute left-1/2 translate-x-24 -top-5">
            <img
              className="max-w-96 max-h-80 "
              src={certificate}
              alt="certificate"
            />
          </div>
        </div>

        <div className="flex   justify-evenly place-content-center font-inter  mt-24 py-10 ">
          <div className="">
            <h2 className="text-3xl font-extrabold">Generative AI Course</h2>
          </div>
          <div className="flex space-x-10 my-auto">
            <p className="font-inter text-base line-through ">₹9,000</p>
            <p className="font-inter text-base ">₹5,000</p>
            <button className=" bg-[#00BF63] p-2 px-7 rounded-md text-white -mt-1 text-base ">
              Enrol Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseOverview;
