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
import bulding from "../assets/Image/bulding.png";
import { useCourse } from "../Context/CourseContext";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CourseOverview = () => {
  const { courseId } = useParams();
  const { joinCourse } = useCourse(); // Get the courseId from the URL

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
   const [showJoinPopup, setShowJoinPopup] = useState(false);


   const handleConfirmJoin = () => {
    setShowJoinPopup (true);

   };

    const handleCancelJoin = () => {
      
      setShowJoinPopup(false);
    };

    const handleJoinCourse = () => {
      joinCourse(course); 
      setShowJoinPopup(false);
    };


   useEffect(() => {
     
     gsap.fromTo(
       ".svg-scroll1", 
       {
         y: 0, 
       },
       {
         y: 770, 
         scrollTrigger: {
           trigger: ".scroll-line1", 
           start: "top top", 
           end: "bottom bottom", 
           scrub: 2, 
         },
       }
     );

     
     gsap.fromTo(
       ".svg-scroll", 
       {
         y: 0, 
       },
       {
         y: 1000,
         scrollTrigger: {
           trigger: ".scroll-line2", 
           start: "top center", 
           end: "bottom center", 
           scrub: true, 
         },
       }
     );
   }, []);




  return (
    <>
      <Navbar />
      <Aicalender />
      <div className="pt-28 font-inter">
        <div className="drop-shadow-md flex relative container mx-auto text-black rounded-3xl px">
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
                <button
                  className="font-inter font-bold text-white  px-6 bg-black border-[1px] p-2 rounded-lg w-full"
                  onClick={handleConfirmJoin}>
                  {" "}
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

          {/* month 1 */}

          <div className=" relative">
            <h2 className=" font-inter text-3xl font-bold">
              Month #1{" "}
              <span className=" underline ml-2 font-inter text-lg font-bold ">
                Covers 4 Subcategories
              </span>
            </h2>

            <div className=" relative">
              <div className="absolute top-1 left-1/2 translate-x-14">
                <div className="scroll-line1">
                  <p className="p-2 w-2 mt-1 ml-1 z-10 rounded-3xl bg-black"></p>
                  <hr className="border-r-2 border-t-0 ml-[5px] h-[830px] inset-2 w-2 -z-10 border-blue-500" />
                  <p className="p-2 w-2 -mt-1 ml-1 z-10 rounded-3xl bg-black"></p>
                </div>
                <div className="absolute top-5 -right-8 -translate-x-2 svg-scroll1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 73 73"
                    fill="none">
                    <path
                      d="M36.5 -1.36376e-06L22.8125 36.5L36.5 73L50.1875 36.5L36.5 -1.36376e-06ZM36.5 9.18887L41.0157 21.2327L45.5315 33.2766L27.4685 33.2766L36.5 9.18887Z"
                      fill="black"
                    />
                    <path
                      d="M36.5838 8.60938L45.9023 33.6266H27.2652L36.5838 8.60938Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* week 1 */}
            <div className="h-52">
              <div className=" relative mt-10 ">
                <div className=" absolute right-1/2  justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto  gap-3 justify-end flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M18.6562 23.375H11.3438C10.791 23.375 10.3438 22.9277 10.3438 22.375C10.3438 21.8223 10.791 21.375 11.3438 21.375H18.6562C19.209 21.375 19.6562 21.8223 19.6562 22.375C19.6562 22.9277 19.209 23.375 18.6562 23.375Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M15 23.3735C14.4472 23.3735 14 22.9263 14 22.3735V15.1372L12.5488 16.1431C12.0928 16.4565 11.4717 16.3433 11.1572 15.8901C10.8428 15.437 10.956 14.814 11.4101 14.4985L14.4306 12.4048C14.7353 12.1919 15.1347 12.1685 15.4638 12.3413C15.7929 12.5142 16 12.855 16 13.2271V22.3735C16 22.9263 15.5527 23.3735 15 23.3735Z"
                          fill="#FF0004"
                        />
                      </svg>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-right  underline">
                      Category 1
                    </h3>
                    <p className="font-semibold text-right text-base  text-[#444]">
                      (Introduction to AI/ML & Generative AI)
                    </p>
                    <ul className="text-left  text-secondary text-sm list-disc ml-5">
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

            {/* week 2 */}

            <div className="h-36">
              <div className=" relative mt-10 ">
                <div className=" absolute left-1/2  translate-x-40 justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto relative gap-4  justify- flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                      </svg>
                      <span className=" absolute top-1.5 left-3">2</span>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-left  underline">
                      Category 2
                    </h3>
                    <p className="font-semibold text-left text-base  text-[#444]">
                      Mini Project 1 - Image Generation with GANs
                    </p>
                    <ul className="text-left  text-secondary w-96 text-sm list-disc ml-5">
                      <li>
                        Train a simple GAN to generate images similar to a given
                        dataset, such as handwritten digits from the MNIST
                        dataset.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* week 3 */}

            <div className="h-40">
              <div className=" relative mt-10 ">
                <div className=" absolute right-1/2  justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto relative gap-3  justify-end flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                      </svg>
                      <span className=" absolute top-1.5  right-16">3</span>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-right  underline">
                      Category 3
                    </h3>
                    <p className="font-semibold text-right text-base  text-[#444]">
                      Mini Project 2 - Music Generation with LSTMs
                    </p>
                    <ul className="text-left w-80 text-secondary text-sm list-disc  ml-6 ">
                      <li>
                        Develop a model to generate short sequences of music
                        notes based on a dataset of MIDI files, creating new
                        musical compositions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* week 4 */}

            <div className="h-52">
              <div className=" relative mt-10 ">
                <div className=" absolute left-1/2  translate-x-40 justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto relative gap-x-4  justify- flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                      </svg>
                      <span className=" absolute top-1.5 left-3">4</span>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-left  underline">
                      Category 4
                    </h3>
                    <p className="font-semibold text-left text-base  text-[#444]">
                      Mini Project 3 - Face Aging with Conditional GANs
                    </p>
                    <ul className="text-left  text-secondary w-96 text-sm list-disc ml-5">
                      <li>
                        Use a conditional GAN (cGAN) to simulate aging effects
                        on faces, creating images of people at different ages.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-40 ">
              {" "}
              <div className=" absolute  bottom-2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="146"
                  height="146"
                  viewBox="0 0 146 146"
                  fill="none">
                  <path
                    d="M20.6858 24.435C24.1261 24.435 26.915 21.6461 26.915 18.2058C26.915 14.7655 24.1261 11.9766 20.6858 11.9766C17.2455 11.9766 14.4565 14.7655 14.4565 18.2058C14.4565 21.6461 17.2455 24.435 20.6858 24.435Z"
                    fill="#FFBF76"
                  />
                  <path
                    d="M19.2794 12.1406C16.5174 12.7788 14.4563 15.2485 14.4563 18.2045C14.4563 21.1604 16.5174 23.6299 19.2791 24.2683C20.9128 22.7587 21.9417 20.6043 21.9417 18.2045C21.9417 15.8046 20.9128 13.6505 19.2794 12.1406Z"
                    fill="#FFD9BE"
                  />
                  <path
                    d="M2.55588 90.6484C13.8233 83.0812 51.0909 57.9535 61.3371 49.8049C62.6143 48.7892 64.3144 48.4943 65.8577 49.0253C73.2498 51.5689 94.7489 58.9225 104.49 61.7755C105.732 62.1393 106.357 63.5186 105.819 64.696L101.359 74.4615L113.034 66.5167C113.788 66.0032 114.736 65.8689 115.603 66.156C119.792 67.5453 132.748 71.793 142.501 74.472C144.418 74.9984 145.071 77.3786 143.685 78.8038C137.059 85.6196 121.655 101.432 115.353 107.624C114.997 107.973 114.533 108.185 114.036 108.225L105.524 108.921L108.025 111.194C108.929 112.015 108.958 113.426 108.087 114.281C104.193 118.105 94.2074 127.912 89.4404 132.608C87.955 134.071 85.7117 134.44 83.8351 133.531L47.8592 116.112C46.9524 115.673 46.4785 114.657 46.724 113.68L47.7771 109.489L39.292 113.846C38.6145 114.194 37.8083 114.156 37.1693 113.742C33.4172 111.309 19.7377 102.65 2.84132 94.5011C1.29035 93.7526 1.12639 91.6085 2.55588 90.6484Z"
                    fill="#964B00"
                  />
                  <path
                    d="M124.046 82.5976C125.389 81.3378 124.925 79.1082 123.19 78.4911C118.685 76.8882 112.17 74.5089 105.111 71.9085L101.359 74.4618L102.898 71.0927C88.4703 65.77 72.4351 59.7783 66.7385 57.6473C65.4037 57.148 63.9146 57.3639 62.7791 58.2253C54.1178 64.7945 29.2556 83.2121 20.9433 89.365C19.8075 90.2059 20.0376 91.9684 21.3553 92.4794C28.9542 95.4259 41.1574 101.896 41.1574 101.896C52.2058 107.858 73.7936 116.709 81.0787 119.651C82.5835 120.258 84.293 119.935 85.4741 118.822C94.028 110.758 116.051 90.0967 124.046 82.5976Z"
                    fill="#FFE7D0"
                  />
                  <path
                    d="M89.4946 100.452L86.1691 97.4678C85.9344 97.2574 85.6113 97.175 85.3042 97.2477L79.8811 98.532L77.0649 95.4886C76.8342 95.2396 76.49 95.1304 76.1584 95.2006L71.8417 96.1165C71.1323 96.2668 70.8377 97.1177 71.3019 97.6746L73.3131 100.088L67.5749 101.447C66.8338 101.622 66.5803 102.547 67.1284 103.077L70.2614 106.1C70.4972 106.327 70.8326 106.419 71.1516 106.344L77.3133 104.887L80.5008 108.711C80.7483 109.008 81.1492 109.128 81.5194 109.016L86.3465 107.555C87.0271 107.349 87.257 106.502 86.7739 105.98L84.2457 103.248L89.0734 102.106C89.8297 101.927 90.0732 100.971 89.4946 100.452Z"
                    fill="black"
                  />
                  <path
                    d="M65.2433 69.1372C66.8674 69.5815 68.512 68.7428 68.9167 67.2638C69.3214 65.7847 68.3329 64.2255 66.7088 63.7812C65.0847 63.3368 63.4401 64.1755 63.0354 65.6546C62.6307 67.1336 63.6192 68.6928 65.2433 69.1372Z"
                    fill="#919191"
                  />
                  <path
                    d="M88.4557 86.0312L85.5363 86.064C85.5477 87.9683 85.349 89.904 84.9389 91.8222L87.7987 92.4105C88.2419 90.3303 88.47 88.1876 88.4557 86.0312Z"
                    fill="#5D5D5D"
                  />
                  <path
                    d="M85.0664 74.9688L82.6962 76.6737C83.7478 78.1654 84.5511 79.8344 84.9897 81.6383L87.8181 80.914C87.2994 78.789 86.3376 76.7624 85.0664 74.9688Z"
                    fill="#5F5F5F"
                  />
                  <path
                    d="M75.7854 68.1172L74.772 70.8553C76.5337 71.5182 78.2227 72.4136 79.6795 73.5628L81.472 71.2579C79.7519 69.9063 77.8135 68.88 75.7854 68.1172Z"
                    fill="#8C8C8C"
                  />
                  <path
                    d="M20.971 26.6452C22.1347 25.2454 24.4695 23.2944 28.3876 23.4198C29.2094 23.4461 29.9619 23.8986 30.4125 24.5864L42.8744 43.6217L31.4601 50.4124C31.4601 50.4124 24.6287 38.4575 20.6119 29.3294C20.2179 28.4354 20.3462 27.3969 20.971 26.6452Z"
                    fill="#D0D0D0"
                  />
                  <path
                    d="M20.4905 29.2456C21.6728 27.574 24.5411 24.4336 29.5074 24.2194C30.1524 24.1915 30.5189 23.476 30.1365 22.9559L29.7929 22.4885C28.8949 21.2672 27.3522 20.6875 25.8814 21.0542C24.1878 21.4762 21.8986 22.4016 19.7374 24.4253C18.41 25.668 18.1759 27.6966 19.1662 29.2219L19.1699 29.2279C19.4779 29.7027 20.1634 29.7078 20.4905 29.2456Z"
                    fill="#FFD9BE"
                  />
                  <path
                    d="M32.4742 49.8082L42.8744 43.6209L30.4125 24.5856C29.962 23.8975 29.2094 23.4452 28.3876 23.419C27.5806 23.393 26.8569 23.472 26.1808 23.5995C30.5089 28.5652 38.333 39.6703 32.4742 49.8082Z"
                    fill="#313131"
                  />
                  <path
                    d="M25.6287 25.0741C26.7448 24.6087 28.0311 24.283 29.5071 24.2194C30.1521 24.1915 30.5186 23.476 30.1362 22.9559L29.7926 22.4885C28.8946 21.2672 27.3519 20.6875 25.8811 21.0542C25.4 21.174 24.8676 21.3408 24.307 21.5555C25.0091 22.2801 25.7066 23.4278 25.6287 25.0741Z"
                    fill="#FFBF76"
                  />
                  <path
                    d="M30.2919 54.657C30.2919 54.657 41.0719 73.2797 46.6005 79.8266H62.3135C62.3135 79.8266 51.388 53.0567 46.3028 45.0547L30.2919 54.657Z"
                    fill="#E7EFFF"
                  />
                  <path
                    d="M62.3132 79.8266C62.3132 79.8266 51.3877 53.0567 46.3025 45.0547L30.2919 54.657C30.2919 54.657 30.4869 54.9932 30.8294 55.5784C35.0959 56.9024 42.8744 59.4582 42.8744 59.4582L54.3964 79.8266H62.3132Z"
                    fill="#97B3F5"
                  />
                  <path
                    d="M17.5679 56.6109L54.101 36.2921C55.1498 35.7087 56.4076 35.5738 57.5306 35.997C58.6433 36.4162 59.9207 37.2021 60.5723 38.6683C60.5723 38.6683 60.594 38.7137 60.6285 38.7981C62.2117 42.6665 58.0932 46.5401 54.3491 44.6817C53.9952 44.5061 53.655 44.2928 53.3488 44.0333C52.7725 43.5454 51.9595 43.459 51.3079 43.8405L48.5864 45.4337C48.2764 45.615 48.0292 45.8868 47.8777 46.2127L43.6118 55.3956C43.1664 56.354 42.1826 56.9449 41.1272 56.8875L29.4079 56.2502C29.0945 56.2331 28.7825 56.2998 28.5037 56.4438L25.4804 58.0031C24.8297 58.3387 24.4507 59.0368 24.5371 59.7636C24.6198 60.4583 24.6489 61.4201 24.4445 62.5219C24.0586 64.6027 22.0705 65.9974 19.9829 65.6498C19.9398 65.6427 19.8965 65.6353 19.8532 65.6276C16.4347 65.0171 14.3454 61.3055 15.9633 58.2332C16.0438 58.0804 16.1324 57.9301 16.2303 57.7832C16.5627 57.2839 17.0441 56.9024 17.5679 56.6109Z"
                    fill="#FFD9BE"
                  />
                  <path
                    d="M43.6115 55.3953L47.8777 46.2124C48.0292 45.8865 48.2761 45.6147 48.5864 45.4334L51.3079 43.8405C51.9595 43.459 52.7727 43.5454 53.3488 44.0336C53.655 44.2928 53.9952 44.5061 54.3491 44.6817C58.0932 46.5401 62.2117 42.6665 60.6285 38.7981C60.594 38.714 60.5723 38.6683 60.5723 38.6683C59.9208 37.2021 58.643 36.4162 57.5306 35.997C56.4076 35.5738 55.1498 35.7087 54.101 36.2921L36.7889 45.921C38.3042 47.6784 40.9251 51.4182 41.7135 56.8453C42.5339 56.7005 43.2508 56.1724 43.6115 55.3953Z"
                    fill="#FFBF76"
                  />
                  <path
                    d="M42.2165 80.0572C41.8681 80.0275 41.8558 79.5205 42.2028 79.4774C44.6752 79.1703 48.8267 78.7628 53.7654 78.7095C53.7654 78.7095 61.101 78.4891 67.1985 79.4429C67.5367 79.496 67.517 79.9916 67.1763 80.0224C64.094 80.3013 58.2138 80.7829 53.8355 80.8368C53.8287 80.8368 53.829 80.8371 53.8218 80.8368C53.6539 80.8279 47.2775 80.4915 42.2165 80.0572Z"
                    fill="#5F5F5F"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* month 2 */}

          <div className="  space-y-3 pt-8 relative">
            <h2 className=" font-inter text-center text-3xl font-bold">
              Month #2 - Live Project / Internship
              <p className=" underline  py-1 font-inter text-lg font-bold ">
                Covers 4 Subcategories
              </p>
            </h2>

            <p className=" py-1 font-inter text-lg font-bold ">
              <span className=" underline">Project</span> - Personalized
              Learning Pathways with AI
            </p>
            <div className="h-32  relative">
              <p className=" py-1 font-inter absolute left-96 text-center w-1/2  place-items-center text-lg font-bold ">
                <span className=" underline">Task </span>- Develop an AI-powered
                system to create personalized learning pathways for students.
                This system will analyze student data to recommend tailored
                courses, resources, and feedback, enhancing the learning
                experience based on individual needs and progress.
              </p>
            </div>
            <div className=" relative">
              <div className="absolute t left-1/2 translate-x-14">
                <div className="scroll-line2">
                  <p className="p-2 w-2 mt-1 ml-1 z-10 rounded-3xl bg-black"></p>
                  <hr className="border-r-2 border-t-0 ml-[5px] h-[1050px] inset-2 w-2 -z-10 border-[#F2A700]" />
                  <p className="p-2 w-2 -mt-1 ml-1 z-10 rounded-3xl bg-black"></p>
                </div>
                <div className="absolute  top-5 -right-8 -translate-x-2 svg-scroll">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 73 73"
                    fill="none">
                    <path
                      d="M36.5 -1.36376e-06L22.8125 36.5L36.5 73L50.1875 36.5L36.5 -1.36376e-06ZM36.5 9.18887L41.0157 21.2327L45.5315 33.2766L27.4685 33.2766L36.5 9.18887Z"
                      fill="black"
                    />
                    <path
                      d="M36.5838 8.60938L45.9023 33.6266H27.2652L36.5838 8.60938Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* week 1 */}
            <div className="h-52">
              <div className=" relative mt-10 ">
                <div className=" absolute right-1/2  justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto  gap-3 justify-end flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M18.6562 23.375H11.3438C10.791 23.375 10.3438 22.9277 10.3438 22.375C10.3438 21.8223 10.791 21.375 11.3438 21.375H18.6562C19.209 21.375 19.6562 21.8223 19.6562 22.375C19.6562 22.9277 19.209 23.375 18.6562 23.375Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M15 23.3735C14.4472 23.3735 14 22.9263 14 22.3735V15.1372L12.5488 16.1431C12.0928 16.4565 11.4717 16.3433 11.1572 15.8901C10.8428 15.437 10.956 14.814 11.4101 14.4985L14.4306 12.4048C14.7353 12.1919 15.1347 12.1685 15.4638 12.3413C15.7929 12.5142 16 12.855 16 13.2271V22.3735C16 22.9263 15.5527 23.3735 15 23.3735Z"
                          fill="#FF0004"
                        />
                      </svg>
                      WEEK
                    </h2>
                    <h3 className="font-bold text-base  text-right  underline">
                      Research & Planning
                    </h3>

                    <ul className="text-left  text-secondary text-sm list-disc ">
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Define Requirements:
                        </span>
                        Gather stakeholder input and define key features.
                      </li>
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Research & Data Collection:
                        </span>
                        Study existing systems, collect datasets (student
                        performance, learning styles).
                      </li>
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Technical Planning:
                        </span>
                        Design system architecture and select technologies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* week 2 */}

            <div className="h-72">
              <div className=" relative mt-10 ">
                <div className=" absolute left-1/2  translate-x-36 justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto relative gap-4  justify- flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                      </svg>
                      <span className=" absolute top-1.5 left-3">2</span>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-left  underline">
                      Development
                    </h3>

                    <ul className="text-left w-[480px] space-y-4  text-sm  ml-5">
                      <li className=" list-disc text-black font-medium">
                        <span className=" underline">
                          {" "}
                          AI Model Development:
                        </span>

                        <li className=" list-none text-secondary ">
                          <span className="font-medium text-black">
                            Student Profiling:{" "}
                          </span>
                          Classify students by learning style and performance.
                        </li>
                        <li className=" list-none text-secondary ">
                          <span className="font-medium text-black">
                            Recommendation Engine:{" "}
                          </span>
                          Build a system to suggest courses based on profiles.
                        </li>
                        <li className=" list-none text-secondary ">
                          <span className="font-medium text-black">
                            Performance Tracking:{" "}
                          </span>
                          Implement models to track and predict student
                          progress.
                        </li>
                      </li>
                      <li className=" list-disc text-black font-medium">
                        <span className=" underline">
                          {" "}
                          Frontend Development:
                        </span>

                        <li className=" list-none text-secondary ">
                          <span className="font-medium text-black">
                            User Interface:{" "}
                          </span>
                          Design and implement a dashboard for personalized
                          learning pathways and recommendations.
                        </li>
                      </li>
                      <li className=" list-disc text-black font-medium">
                        <span className=" underline">
                          {" "}
                          Backend Development:
                        </span>

                        <li className=" list-none text-secondary ">
                          <span className="font-medium text-black">APIs: </span>
                          Create APIs for model interaction and data management.
                        </li>
                        <li className=" list-none text-secondary ">
                          <span className="font-medium text-black">
                            Database:{" "}
                          </span>
                          Set up and integrate a database for student and course
                          data.
                        </li>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* week 3 */}

            <div className="h-52">
              <div className=" relative mt-10 ">
                <div className=" absolute right-1/2  justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto relative gap-3  justify-end flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                      </svg>
                      <span className=" absolute top-1.5  right-16">3</span>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-right  underline">
                      Integration & Testing
                    </h3>

                    <ul className="text-left  text-secondary text-sm list-disc ">
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Integrate Components:
                        </span>
                        Connect AI models, backend, and frontend systems.
                      </li>
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Testing:
                        </span>
                        Conduct thorough testing (unit, integration, user
                        acceptance) to ensure functionality & performance.
                      </li>
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Feedback Collection:
                        </span>
                        Gather feedback from a small group of users for
                        improvements.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* week 4 */}

            <div className="h-60">
              <div className=" relative mt-10 ">
                <div className=" absolute left-1/2  translate-x-40 justify-items-center">
                  <div className=" space-y-3 place-items-center">
                    <h2 className="text-[#ED0004] text-base my-auto relative gap-x-4  justify- flex  font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M29 30.002H1C0.447266 30.002 0 29.5547 0 29.002V6.60156C0 6.04883 0.447266 5.60156 1 5.60156H29C29.5527 5.60156 30 6.04883 30 6.60156V29.002C30 29.5547 29.5527 30.002 29 30.002ZM2 28.002H28V7.60156H2V28.002Z"
                          fill="#FF0004"
                        />
                        <path
                          d="M29 7.59961H1C0.447266 7.59961 0 7.15234 0 6.59961V1C0 0.447266 0.447266 0 1 0H29C29.5527 0 30 0.447266 30 1V6.59961C30 7.15234 29.5527 7.59961 29 7.59961ZM2 5.59961H28V2H2V5.59961Z"
                          fill="#FF0004"
                        />
                      </svg>
                      <span className=" absolute top-1.5 left-3">4</span>
                      WEEK
                    </h2>
                    <h3 className="font-bold  text-left  underline">
                      Deployment & Evaluation
                    </h3>

                    <ul className="text-left  text-secondary text-sm list-disc ">
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Deployment:
                        </span>
                        Launch the system for wider use.
                      </li>
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Monitoring:
                        </span>
                        Track system performance and user interaction.
                      </li>
                      <li className="w-96 ">
                        <span className=" underline font-medium text-[#1F1F1F]">
                          Final Adjustments:
                        </span>
                        Make final adjustments based on user feedback and system
                        performance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-36  flex">
              {" "}
              <div className=" absolute flex  bottom-2 left-1/2">
                <img className="size-40" src={bulding} alt="image" />
                <h2 className=" my-auto text-xl font-semibold">
                  Ready to boom or for <br /> industry (something)
                </h2>
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
              <h2 className="text-3xl font-extrabold">{course.name} Course</h2>
            </div>
            <div className="flex  my-auto">
              <button
                className="font-inter font-bold text-white  w-80 px-6 bg-black border-[1px] p-2 rounded-lg "
                onClick={handleConfirmJoin}>
                {" "}
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showJoinPopup && (
        <div className="fixed top-0 left-0 w-full h-full font-inter bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 shadow-xl w-1/4">
            <p className="text-center text-lg mb-6">
              Are you sure you want to continue with this elective?
            </p>
            <div className="space-y-3 px-10">
              <button
                className="px-4 py-2 bg-black text-white rounded-lg w-full"
                onClick={handleJoinCourse}>
                Join
              </button>
              <button
                className="px-4 py-2 rounded-lg w-full"
                onClick={handleCancelJoin}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseOverview;
