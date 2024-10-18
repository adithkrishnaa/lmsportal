import { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer";
import Searchbar from "../../Searchbar/searchbar";
import live from "../../assets/Image/live.png";
import syllbus from "../../assets/Image/syllbus.png";
import calender from "../../assets/Image/calendar.png";
import LuctherNavbar from "../../components/Instructor/LuctherNavbar";
import Aitutore from "../../components/Instructor/Aitutore";
import ai from "../../assets/Image/ai.png";
import data from "../../assets/Image/data.png";
import ml from "../../assets/Image/ml.png";
import { MdAccessTime } from "react-icons/md";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LuctherDashboard = () => {
  const courses = [
    {
      id: "generative-ai",
      option: "Option 1",
      name: "Generative AI",
      image: ai,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
    {
      id: "data-science",
      option: "Option 2",
      name: "Data Science",
      image: data,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills innovation across industries worldwide",
    },
    {
      id: "prompt-engineering",
      option: "Option 3",
      name: "Prompt Engineering",
      image: ml,
      instructor: "Priya Chawla",
      duration: "3 hours",
      description:
        "Start your journey today and gain the cutting-edge skills driving innovation across industries worldwide",
    },
  ];

  const [showPopup, setShowPopup] = useState(true); // State to manage pop-up visibility
  const [currentIndex, setCurrentIndex] = useState(0); // State for the index of visible courses
  const [showLive, setshowLive] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null); // To track the selected class
  const [confirmedCourse, setConfirmedCourse] = useState(null); // State to track the confirmed course
  const navigate = useNavigate();
   const [liveCourse, setLiveCourse] = useState(null);
  const modalRef = useRef(null);

  // Handler to close the pop-up
  const handleClosePopup = (course) => {
    setConfirmedCourse(course); // Set the confirmed course
    setShowPopup(false); // Close the popup
  };

  // Navigate to previous course
  const handlePrevCourse = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShowLive = (course) => {
    setLiveCourse(course); // Set the selected course for the live pop-up
    setshowLive(true); // Open the live modal
  };

  // Handle checkbox change
  const handleClassSelect = (className, classTime) => {
    setSelectedClass({ name: className, time: classTime }); // Set both name and time
  };

  const handleGoLive = () => {
    if (selectedClass) {
      navigate("/livepage"); // Navigate to the live page
    }
  };

  // Navigate to next course
  const handleNextCourse = () => {
    if (currentIndex < courses.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setshowLive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <LuctherNavbar />
      <Searchbar />
      <Aitutore />
      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full font-inter bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="rounded-3xl shadow-2xl w-7/12  bg-white">
            <div className="bg-[#E6E5E7] p-4 space-x-2 flex rounded-t-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="59"
                viewBox="0 0 57 59"
                fill="none">
                <path
                  d="M56.4526 39.5233C56.4526 39.5215 56.4521 39.5198 56.4521 39.5181V14.1258C56.4512 13.1463 56.0618 12.2072 55.3693 11.5145C54.6768 10.8217 53.7378 10.432 52.7583 10.4309H50.459L50.4497 1.81172C50.4492 1.3312 50.2579 0.870549 49.918 0.530881C49.5781 0.191212 49.1174 0.000282126 48.6369 0H29.8341C29.3538 0.000530409 28.8933 0.191578 28.5536 0.531226C28.214 0.870874 28.0229 1.33138 28.0224 1.81172V7.62305L24.1102 10.4309H21.2454V10.1297C21.2444 9.17742 20.8656 8.26447 20.1922 7.59111C19.5189 6.91776 18.6059 6.53899 17.6537 6.53789H12.9451C11.9924 6.53793 11.0787 6.91639 10.405 7.59003C9.73138 8.26366 9.35288 9.1773 9.35279 10.13V10.4309H3.69428C2.71479 10.432 1.77578 10.8217 1.08329 11.5145C0.390803 12.2072 0.00139883 13.1463 0.000527389 14.1258V39.5181C0.000527389 39.5199 0 39.5215 0 39.5233C0 39.5252 0.000515671 39.5268 0.000527389 39.5286V44.3567C0.00139573 45.3362 0.390799 46.2753 1.08329 46.968C1.77578 47.6607 2.71479 48.0504 3.69428 48.0516H23.7955L22.5903 56.8564H19.7329C19.5775 56.8564 19.4285 56.9181 19.3186 57.028C19.2087 57.1379 19.147 57.2869 19.147 57.4423C19.147 57.5977 19.2087 57.7468 19.3186 57.8566C19.4285 57.9665 19.5775 58.0283 19.7329 58.0283H36.9448C37.1002 58.0283 37.2492 57.9665 37.3591 57.8566C37.469 57.7468 37.5307 57.5977 37.5307 57.4423C37.5307 57.2869 37.469 57.1379 37.3591 57.028C37.2492 56.9181 37.1002 56.8564 36.9448 56.8564H34.0874L32.8823 48.0516H52.7583C53.7378 48.0504 54.6768 47.6607 55.3693 46.968C56.0618 46.2753 56.4512 45.3362 56.4521 44.3567V39.5286C56.4521 39.5268 56.4526 39.5251 56.4526 39.5233ZM23.7731 56.8563L24.9782 48.0517H31.6996L32.9047 56.8563H23.7731ZM52.7583 11.6027C53.4271 11.6036 54.0682 11.8697 54.541 12.3428C55.0138 12.8158 55.2797 13.457 55.2802 14.1258V15.5215H50.3447C50.4231 15.3168 50.4634 15.0996 50.4638 14.8805L50.4603 11.6027H52.7583ZM28.9494 8.4C29.025 8.34584 29.0867 8.27444 29.1293 8.1917C29.1719 8.10896 29.1942 8.01727 29.1943 7.92422V1.81172C29.1945 1.64209 29.262 1.47947 29.3819 1.35952C29.5019 1.23957 29.6645 1.17209 29.8341 1.17187H48.6369C48.8068 1.17211 48.9697 1.23972 49.0899 1.35988C49.21 1.48004 49.2776 1.64295 49.2779 1.81289L49.2919 14.8816C49.2917 15.0515 49.224 15.2142 49.1038 15.3342C48.9836 15.4541 48.8207 15.5215 48.6509 15.5215H41.022C40.9564 15.1953 40.7977 14.895 40.5652 14.657C40.3326 14.419 40.0361 14.2534 39.7115 14.1803C39.3869 14.1072 39.048 14.1296 38.7359 14.2449C38.4237 14.3603 38.1517 14.5635 37.9525 14.8301L37.4347 15.5215H29.8494C29.7651 15.5214 29.6817 15.5048 29.6038 15.4725C29.526 15.4402 29.4553 15.3928 29.3958 15.3332C29.3363 15.2736 29.2891 15.2028 29.2569 15.1249C29.2247 15.047 29.2082 14.9636 29.2083 14.8793L29.1943 11.0145C29.1938 10.8593 29.1318 10.7107 29.022 10.6011C28.9122 10.4915 28.7635 10.4299 28.6083 10.4297H26.1216L28.9494 8.4ZM38.4083 18.9998L40.7652 20.7648C40.9097 20.873 41.0316 21.0087 41.1237 21.164C41.2158 21.3194 41.2765 21.4914 41.3021 21.6701C41.3278 21.8489 41.318 22.031 41.2733 22.206C41.2286 22.381 41.1498 22.5455 41.0415 22.69L40.7409 23.0916C40.5978 23.2824 40.3922 23.4169 40.1601 23.4714L38.6409 23.8278C38.0434 23.9683 37.5143 24.3144 37.146 24.8055L36.6379 25.4841L34.2103 23.666L34.7798 22.9055C35.0999 22.4794 35.2813 21.9653 35.2996 21.4328L35.3211 20.8331C35.3338 20.4676 35.4583 20.1149 35.6778 19.8225L38.8905 15.5325C38.9784 15.4151 39.1094 15.3374 39.2546 15.3165C39.3998 15.2957 39.5474 15.3334 39.6648 15.4213C39.7823 15.5093 39.86 15.6403 39.8808 15.7855C39.9017 15.9307 39.864 16.0783 39.7761 16.1957L38.2905 18.1795C38.1974 18.3039 38.1574 18.4602 38.1795 18.614C38.2016 18.7678 38.2839 18.9066 38.4083 18.9998ZM21.3229 30.8842C21.2047 30.9221 21.1016 30.9966 21.0284 31.0969C20.9553 31.1972 20.9159 31.3181 20.9158 31.4422V38.9374H11.4313V31.5719C11.4313 31.4165 11.3695 31.2674 11.2597 31.1576C11.1498 31.0477 11.0007 30.9859 10.8453 30.9859C10.6899 30.9859 10.5409 31.0477 10.431 31.1576C10.3211 31.2674 10.2594 31.4165 10.2594 31.5719V38.9374H5.75712V28.0215C5.75821 27.0572 6.14175 26.1327 6.8236 25.4509C7.50544 24.769 8.4299 24.3855 9.39417 24.3844H12.5363L15.484 26.1301C15.7507 26.2881 16.0545 26.3727 16.3645 26.3753C16.6746 26.3779 16.9797 26.2984 17.2491 26.1449C17.5184 25.9913 17.7424 25.7693 17.8981 25.5012C18.0539 25.2331 18.1359 24.9286 18.1359 24.6186V24.3844H21.4415C22.203 24.3825 22.9501 24.5917 23.5998 24.9888C24.2495 25.3859 24.7765 25.9553 25.1221 26.6338L26.7252 29.7616C26.8277 29.9616 26.9797 30.132 27.1668 30.2566C27.3538 30.3812 27.5697 30.4559 27.7937 30.4734C28.0178 30.4909 28.2427 30.4508 28.4468 30.3567C28.651 30.2627 28.8276 30.118 28.96 29.9363L33.0203 24.3638L36.4158 27.0277L31.7123 33.402C31.2412 34.0404 30.6257 34.5581 29.9162 34.913C29.2066 35.2679 28.4232 35.4497 27.6299 35.4437C26.8365 35.4377 26.0559 35.244 25.3518 34.8784C24.6477 34.5129 24.0402 33.9858 23.5788 33.3404L21.9785 31.1015C21.9063 31.0005 21.8039 30.9251 21.6861 30.886C21.5683 30.8469 21.4411 30.8463 21.3229 30.8842ZM1.1724 38.9374V16.6933H7.70275C7.90909 17.0315 8.18936 17.3185 8.52251 17.5329C8.85566 17.7472 9.23304 17.8833 9.62631 17.9309C10.0419 19.2738 10.9228 20.4244 12.1107 21.1761V23.2125H9.39417C8.11921 23.214 6.89688 23.7211 5.99535 24.6226C5.09381 25.5242 4.58669 26.7465 4.58524 28.0215V38.9374H1.1724ZM22.9579 16.6933H36.5572L34.7398 19.12C34.3767 19.6034 34.1708 20.1868 34.15 20.7911L34.1286 21.3907C34.1184 21.6845 34.0183 21.968 33.8418 22.203L33.2177 23.0364C33.0928 22.9551 32.9414 22.925 32.7949 22.9523C32.6484 22.9796 32.5181 23.0622 32.4308 23.183L28.0128 29.2462C27.9983 29.2661 27.979 29.2819 27.9566 29.2922C27.9343 29.3025 27.9097 29.3069 27.8851 29.305C27.8606 29.3031 27.837 29.2949 27.8165 29.2813C27.796 29.2676 27.7794 29.249 27.7681 29.2271L26.165 26.0993C25.7215 25.2286 25.0452 24.4978 24.2114 23.9882C23.3776 23.4786 22.4188 23.2101 21.4416 23.2126H18.1353V21.3726C19.4188 20.673 20.4014 19.5274 20.8974 18.1524L20.8969 18.152C21.3379 18.1098 21.7601 17.953 22.1216 17.6971C22.4832 17.4412 22.7715 17.0952 22.9579 16.6933ZM13.2826 21.7465C13.9299 21.9773 14.6121 22.0951 15.2994 22.0945C15.8625 22.0948 16.4228 22.0147 16.9634 21.8569V24.5016C16.9634 24.4997 16.964 24.4979 16.964 24.496V24.6185C16.964 24.7218 16.9367 24.8231 16.8848 24.9124C16.833 25.0016 16.7584 25.0755 16.6688 25.1266C16.5791 25.1778 16.4775 25.2042 16.3743 25.2034C16.2711 25.2026 16.1699 25.1744 16.0811 25.1219L13.2826 23.4644V21.7465ZM20.6593 16.9916C20.39 16.9916 20.1267 16.9117 19.9028 16.7621C19.6789 16.6125 19.5044 16.3999 19.4014 16.1511C19.2983 15.9023 19.2713 15.6285 19.3239 15.3644C19.3764 15.1003 19.5061 14.8577 19.6965 14.6673C19.8869 14.4768 20.1295 14.3472 20.3936 14.2946C20.6577 14.2421 20.9315 14.269 21.1803 14.3721C21.4291 14.4751 21.6417 14.6496 21.7913 14.8735C21.941 15.0974 22.0208 15.3607 22.0208 15.63C22.0205 15.991 21.8769 16.3371 21.6216 16.5924C21.3664 16.8476 21.0203 16.9912 20.6593 16.9916ZM12.9448 7.70986H17.6531C18.1227 7.70971 18.5821 7.84708 18.9746 8.10503C19.2088 8.25899 19.4147 8.4522 19.5833 8.67614C19.901 9.09424 20.0731 9.60484 20.0733 10.1299V11.3859L13.1058 11.3478H13.0962C12.681 11.3499 12.28 11.4995 11.9649 11.7698C11.6497 12.0401 11.4408 12.4136 11.3755 12.8237L11.3149 13.2166C11.3037 13.2891 11.2705 13.3563 11.2198 13.4093C11.1691 13.4622 11.1033 13.4983 11.0314 13.5126C10.9595 13.5269 10.885 13.5188 10.8178 13.4893C10.7507 13.4598 10.6943 13.4103 10.6562 13.3477L10.5251 13.1318V10.1297C10.5255 9.48803 10.7805 8.87276 11.2342 8.41904C11.6879 7.96533 12.3032 7.71022 12.9448 7.70986ZM9.62959 13.9149L9.65456 13.9561C9.78887 14.1807 9.97919 14.3667 10.2069 14.4958C10.4346 14.6248 10.692 14.6926 10.9537 14.6924C11.0566 14.6923 11.1592 14.6822 11.2601 14.6621C11.5687 14.6028 11.8513 14.449 12.0686 14.2221C12.2859 13.9951 12.4272 13.7061 12.473 13.3952L12.5337 13.0022C12.555 12.8682 12.6233 12.7461 12.7263 12.6577C12.8293 12.5693 12.9604 12.5204 13.0962 12.5197H13.0993L20.0735 12.5578V13.1657C19.6176 13.275 19.2008 13.5084 18.8693 13.8399C18.5378 14.1714 18.3044 14.5882 18.1951 15.0441H17.631C17.5935 15.0443 17.5561 15.048 17.5193 15.0553C17.3782 14.4497 17.0193 13.9171 16.511 13.5589C16.0027 13.2008 15.3804 13.0421 14.7626 13.1131C14.1448 13.1841 13.5747 13.4798 13.1609 13.9439C12.747 14.408 12.5183 15.0082 12.5183 15.63C12.5183 16.2518 12.747 16.852 13.1609 17.3161C13.5747 17.7802 14.1448 18.0759 14.7626 18.1469C15.3804 18.2179 16.0027 18.0592 16.511 17.7011C17.0193 17.3429 17.3782 16.8103 17.5193 16.2047C17.5561 16.212 17.5935 16.2158 17.631 16.216H18.195C18.2893 16.6086 18.4756 16.9732 18.7387 17.2795C19.0019 17.5858 19.3341 17.8251 19.7081 17.9775L19.708 17.9777C19.3206 18.9118 18.6466 19.6988 17.7832 20.2251C16.9197 20.7515 15.9114 20.99 14.9037 20.9063C13.8959 20.8226 12.9408 20.421 12.1759 19.7595C11.4111 19.0979 10.8762 18.2106 10.6482 17.2254C10.6183 17.0963 10.5457 16.9812 10.4421 16.8986C10.3385 16.8161 10.21 16.771 10.0775 16.7707C10.0635 16.7707 10.0506 16.7719 10.0365 16.773L10.0177 16.7742C9.9908 16.7754 9.96502 16.7777 9.93923 16.7777C9.58207 16.7778 9.23748 16.6459 8.97167 16.4073C8.70586 16.1688 8.53759 15.8404 8.49919 15.4853C8.4608 15.1302 8.55498 14.7734 8.76365 14.4836C8.97233 14.1937 9.28066 13.9912 9.62959 13.9149ZM16.4138 15.63C16.4138 15.8993 16.334 16.1626 16.1844 16.3865C16.0348 16.6104 15.8221 16.7849 15.5733 16.888C15.3245 16.9911 15.0508 17.018 14.7866 16.9655C14.5225 16.913 14.2799 16.7833 14.0895 16.5929C13.8991 16.4025 13.7694 16.1598 13.7168 15.8957C13.6643 15.6316 13.6913 15.3578 13.7943 15.109C13.8974 14.8602 14.0719 14.6476 14.2958 14.498C14.5197 14.3484 14.783 14.2685 15.0523 14.2685C15.4132 14.2689 15.7593 14.4125 16.0146 14.6677C16.2698 14.923 16.4134 15.269 16.4138 15.63ZM28.0247 11.6027L28.0365 14.8816C28.0369 15.1004 28.0771 15.3172 28.1553 15.5215H23.19C23.1656 14.971 22.9626 14.4433 22.6118 14.0183C22.261 13.5934 21.7814 13.2941 21.2455 13.1658V11.6027H28.0247ZM1.1724 14.1258C1.17296 13.457 1.4388 12.8158 1.91159 12.3428C2.38438 11.8697 3.0255 11.6036 3.69428 11.6027H9.35279V12.7747C8.77506 12.9082 8.25953 13.2333 7.8902 13.6972C7.52087 14.1611 7.3195 14.7364 7.31889 15.3293C7.31889 15.3941 7.32326 15.4578 7.3279 15.5215H1.1724V14.1258ZM52.7583 46.8797H3.69428C3.0255 46.8788 2.38437 46.6127 1.91158 46.1397C1.43879 45.6667 1.17296 45.0254 1.1724 44.3566V40.1093H46.8581C47.0135 40.1093 47.1626 40.0475 47.2724 39.9377C47.3823 39.8278 47.4441 39.6787 47.4441 39.5233C47.4441 39.3679 47.3823 39.2189 47.2724 39.109C47.1626 38.9991 47.0135 38.9374 46.8581 38.9374H22.0877V33.2696L22.6254 34.0218C23.1943 34.8177 23.9435 35.4676 24.8118 35.9185C25.68 36.3693 26.6427 36.6081 27.6209 36.6156C28.5992 36.623 29.5654 36.3987 30.4404 35.9611C31.3153 35.5235 32.0743 34.885 32.6552 34.0978L37.6966 27.2657C37.7871 27.1431 37.8262 26.99 37.8057 26.839C37.7852 26.688 37.7067 26.5509 37.5868 26.4568L37.4524 26.3514L38.0841 25.5078C38.2872 25.237 38.579 25.0462 38.9085 24.9687L40.4276 24.6123C40.9277 24.4947 41.3706 24.2051 41.6788 23.7941L41.9795 23.3924C42.1801 23.1247 42.3259 22.8201 42.4087 22.496C42.4915 22.1719 42.5096 21.8346 42.4621 21.5035C42.4145 21.1724 42.3022 20.8539 42.1316 20.5662C41.961 20.2785 41.7353 20.0273 41.4676 19.8268L39.5797 18.413L40.7141 16.8981C40.7621 16.8329 40.8055 16.7645 40.844 16.6933H55.2802V38.9374H49.4814C49.326 38.9374 49.177 38.9991 49.0671 39.109C48.9572 39.2189 48.8955 39.3679 48.8955 39.5233C48.8955 39.6787 48.9572 39.8278 49.0671 39.9377C49.177 40.0475 49.326 40.1093 49.4814 40.1093H55.2802V44.3566C55.2797 45.0254 55.0138 45.6667 54.541 46.1397C54.0682 46.6127 53.4271 46.8788 52.7583 46.8797Z"
                  fill="black"
                />
                <path
                  d="M35.2847 9.9561C35.9687 9.9561 36.6374 9.75326 37.2061 9.37324C37.7749 8.99321 38.2182 8.45306 38.4799 7.8211C38.7417 7.18914 38.8102 6.49375 38.6768 5.82286C38.5433 5.15197 38.2139 4.53572 37.7302 4.05204C37.2466 3.56836 36.6303 3.23897 35.9594 3.10552C35.2885 2.97207 34.5931 3.04056 33.9612 3.30233C33.3292 3.5641 32.7891 4.00738 32.409 4.57613C32.029 5.14488 31.8262 5.81355 31.8262 6.49758C31.8272 7.41452 32.1919 8.29361 32.8403 8.94198C33.4887 9.59036 34.3678 9.95507 35.2847 9.9561ZM35.2847 4.21094C35.7369 4.21094 36.179 4.34505 36.5551 4.59631C36.9311 4.84757 37.2242 5.20469 37.3973 5.62252C37.5703 6.04035 37.6156 6.50012 37.5274 6.94369C37.4392 7.38725 37.2214 7.79469 36.9016 8.11449C36.5818 8.43428 36.1744 8.65206 35.7308 8.74029C35.2872 8.82852 34.8275 8.78324 34.4096 8.61017C33.9918 8.4371 33.6347 8.14401 33.3834 7.76797C33.1322 7.39194 32.998 6.94984 32.998 6.49758C32.9987 5.89135 33.2399 5.31014 33.6686 4.88147C34.0972 4.4528 34.6785 4.21162 35.2847 4.21094Z"
                  fill="black"
                />
                <path
                  d="M40.1074 12.3402H46.5223C46.6264 12.3402 46.7286 12.3124 46.8184 12.2599C46.9082 12.2073 46.9824 12.1317 47.0333 12.041C47.0843 11.9502 47.1101 11.8475 47.1082 11.7434C47.1063 11.6394 47.0767 11.5377 47.0224 11.4489L43.8149 6.19468C43.7626 6.10897 43.6891 6.03815 43.6016 5.98901C43.514 5.93987 43.4153 5.91406 43.3148 5.91406C43.2144 5.91406 43.1157 5.93987 43.0281 5.98901C42.9405 6.03815 42.8671 6.10897 42.8147 6.19468L39.6073 11.4489C39.5531 11.5377 39.5235 11.6394 39.5216 11.7434C39.5197 11.8475 39.5455 11.9502 39.5964 12.041C39.6474 12.1317 39.7215 12.2073 39.8114 12.2599C39.9012 12.3124 40.0033 12.3402 40.1074 12.3402ZM43.3148 7.62453L45.4782 11.1683H41.1516L43.3148 7.62453Z"
                  fill="black"
                />
                <path
                  d="M44.0801 4.47884H44.8167V5.21547C44.8167 5.33979 44.8661 5.45902 44.954 5.54693C45.0419 5.63483 45.1611 5.68422 45.2854 5.68422C45.4098 5.68422 45.529 5.63483 45.6169 5.54693C45.7048 5.45902 45.7542 5.33979 45.7542 5.21547V4.47884H46.4908C46.6151 4.47884 46.7343 4.42945 46.8222 4.34155C46.9101 4.25364 46.9595 4.13441 46.9595 4.01009C46.9595 3.88577 46.9101 3.76654 46.8222 3.67863C46.7343 3.59073 46.6151 3.54134 46.4908 3.54134H45.7542V2.80469C45.7542 2.68037 45.7048 2.56114 45.6169 2.47323C45.529 2.38532 45.4098 2.33594 45.2854 2.33594C45.1611 2.33594 45.0419 2.38532 44.954 2.47323C44.8661 2.56114 44.8167 2.68037 44.8167 2.80469V3.54134H44.0801C43.9558 3.54134 43.8365 3.59073 43.7486 3.67863C43.6607 3.76654 43.6113 3.88577 43.6113 4.01009C43.6113 4.13441 43.6607 4.25364 43.7486 4.34155C43.8365 4.42945 43.9558 4.47884 44.0801 4.47884Z"
                  fill="black"
                />
                <path
                  d="M35.2466 12.4414H32.8359C32.7116 12.4414 32.5924 12.4908 32.5045 12.5787C32.4166 12.6666 32.3672 12.7858 32.3672 12.9102C32.3672 13.0345 32.4166 13.1537 32.5045 13.2416C32.5924 13.3295 32.7116 13.3789 32.8359 13.3789H35.2466C35.371 13.3789 35.4902 13.3295 35.5781 13.2416C35.666 13.1537 35.7154 13.0345 35.7154 12.9102C35.7154 12.7858 35.666 12.6666 35.5781 12.5787C35.4902 12.4908 35.371 12.4414 35.2466 12.4414Z"
                  fill="black"
                />
                <path
                  d="M28.2264 41.5391C27.8388 41.5391 27.4599 41.654 27.1376 41.8693C26.8153 42.0847 26.5641 42.3908 26.4158 42.7489C26.2675 43.107 26.2286 43.501 26.3043 43.8812C26.3799 44.2614 26.5665 44.6106 26.8406 44.8847C27.1147 45.1587 27.4639 45.3454 27.8441 45.421C28.2242 45.4966 28.6183 45.4578 28.9764 45.3095C29.3345 45.1612 29.6406 44.91 29.8559 44.5877C30.0713 44.2654 30.1862 43.8865 30.1862 43.4989C30.1856 42.9793 29.979 42.4811 29.6116 42.1137C29.2442 41.7463 28.746 41.5396 28.2264 41.5391ZM28.2264 44.2868C28.0706 44.2868 27.9182 44.2406 27.7887 44.154C27.6591 44.0674 27.5581 43.9444 27.4985 43.8004C27.4388 43.6564 27.4232 43.498 27.4536 43.3451C27.484 43.1923 27.5591 43.0519 27.6693 42.9417C27.7795 42.8315 27.9199 42.7565 28.0727 42.7261C28.2255 42.6957 28.384 42.7113 28.5279 42.7709C28.6719 42.8305 28.795 42.9315 28.8816 43.0611C28.9681 43.1907 29.0143 43.343 29.0143 43.4989C29.0141 43.7078 28.931 43.908 28.7833 44.0558C28.6356 44.2035 28.4353 44.2866 28.2264 44.2868Z"
                  fill="black"
                />
              </svg>
              <h2 className="text-2xl flex my-auto font-bold">
                Instructor{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none">
                    <svg>
                      <path
                        d="M21.5724 13.1871C21.2171 12.6965 21.0257 12.1062 21.0257 11.5005C21.0257 10.8947 21.2171 10.3044 21.5724 9.81379L22.3008 8.80754C22.3898 8.68466 22.4484 8.5424 22.4718 8.39245C22.4951 8.2425 22.4825 8.08916 22.4349 7.94504C22.3869 7.80243 22.3066 7.67286 22.2002 7.56646C22.0938 7.46006 21.9642 7.37971 21.8216 7.3317L20.6429 6.94837C20.0654 6.76211 19.5621 6.39718 19.2056 5.90627C18.849 5.41536 18.6576 4.82385 18.6591 4.21712V2.97129C18.659 2.82003 18.6231 2.67094 18.5543 2.53623C18.4855 2.40151 18.3858 2.28499 18.2634 2.19619C18.1409 2.10739 17.9992 2.04883 17.8498 2.02531C17.7004 2.0018 17.5475 2.01398 17.4037 2.06087L16.2154 2.4442C15.6385 2.63089 15.0173 2.63039 14.4407 2.44277C13.8641 2.25516 13.3615 1.89004 13.0049 1.39962L12.2766 0.39337C12.1836 0.276749 12.0655 0.182581 11.9312 0.11786C11.7968 0.0531398 11.6495 0.0195313 11.5004 0.0195312C11.3512 0.0195312 11.204 0.0531398 11.0696 0.11786C10.9352 0.182581 10.8171 0.276749 10.7241 0.39337L9.99578 1.39962C9.63918 1.89004 9.13666 2.25516 8.56005 2.44277C7.98344 2.63039 7.36228 2.63089 6.78537 2.4442L5.59703 2.06087C5.45322 2.01398 5.30036 2.0018 5.15094 2.02531C5.00152 2.04883 4.85979 2.10739 4.73734 2.19619C4.61489 2.28499 4.5152 2.40151 4.44642 2.53623C4.37764 2.67094 4.34173 2.82003 4.34161 2.97129V4.21712C4.34309 4.82385 4.15173 5.41536 3.79518 5.90627C3.43862 6.39718 2.9353 6.76211 2.35786 6.94837L1.17911 7.3317C1.03651 7.37971 0.906936 7.46006 0.800536 7.56646C0.694136 7.67286 0.61379 7.80243 0.565781 7.94504C0.518259 8.08916 0.505641 8.2425 0.528967 8.39245C0.552292 8.5424 0.610894 8.68466 0.699948 8.80754L1.42828 9.81379C1.78367 10.3044 1.97502 10.8947 1.97502 11.5005C1.97502 12.1062 1.78367 12.6965 1.42828 13.1871L0.699948 14.1934C0.610894 14.3162 0.552292 14.4585 0.528967 14.6085C0.505641 14.7584 0.518259 14.9118 0.565781 15.0559C0.61379 15.1985 0.694136 15.328 0.800536 15.4344C0.906936 15.5408 1.03651 15.6212 1.17911 15.6692L2.35786 16.0525C2.9353 16.2388 3.43862 16.6037 3.79518 17.0946C4.15173 17.5855 4.34309 18.1771 4.34161 18.7838V20.0296C4.34173 20.1809 4.37764 20.33 4.44642 20.4647C4.5152 20.5994 4.61489 20.7159 4.73734 20.8047C4.85979 20.8935 5.00152 20.9521 5.15094 20.9756C5.30036 20.9991 5.45322 20.9869 5.59703 20.94L6.77578 20.5567C7.35392 20.3669 7.97744 20.3658 8.55624 20.5535C9.13505 20.7413 9.63918 21.1082 9.99578 21.6013L10.7241 22.6075C10.8136 22.7294 10.9305 22.8284 11.0653 22.8967C11.2002 22.965 11.3492 23.0005 11.5004 23.0005C11.6515 23.0005 11.8005 22.965 11.9354 22.8967C12.0702 22.8284 12.1871 22.7294 12.2766 22.6075L13.0049 21.6013C13.3621 21.1089 13.8663 20.7425 14.4449 20.5548C15.0235 20.3671 15.6467 20.3678 16.2249 20.5567L17.4037 20.94C17.5475 20.9869 17.7004 20.9991 17.8498 20.9756C17.9992 20.9521 18.1409 20.8935 18.2634 20.8047C18.3858 20.7159 18.4855 20.5994 18.5543 20.4647C18.6231 20.33 18.659 20.1809 18.6591 20.0296V18.7838C18.6576 18.1771 18.849 17.5855 19.2056 17.0946C19.5621 16.6037 20.0654 16.2388 20.6429 16.0525L21.8216 15.6692C21.9642 15.6212 22.0938 15.5408 22.2002 15.4344C22.3066 15.328 22.3869 15.1985 22.4349 15.0559C22.4825 14.9118 22.4951 14.7584 22.4718 14.6085C22.4484 14.4585 22.3898 14.3162 22.3008 14.1934L21.5724 13.1871ZM16.0141 10.2613L11.2224 15.053C11.0427 15.2327 10.799 15.3336 10.5449 15.3336C10.2908 15.3336 10.0471 15.2327 9.86736 15.053L6.99236 12.178C6.90083 12.0896 6.82783 11.9838 6.7776 11.8669C6.72738 11.75 6.70094 11.6243 6.69983 11.497C6.69873 11.3698 6.72298 11.2436 6.77116 11.1258C6.81935 11.008 6.89051 10.901 6.98049 10.811C7.07047 10.7211 7.17747 10.6499 7.29524 10.6017C7.41302 10.5535 7.53921 10.5293 7.66646 10.5304C7.7937 10.5315 7.91946 10.5579 8.03638 10.6081C8.1533 10.6584 8.25904 10.7314 8.34745 10.8229L10.542 13.0204L14.6562 8.90625C14.8369 8.73168 15.079 8.63508 15.3302 8.63727C15.5815 8.63945 15.8219 8.74024 15.9996 8.91792C16.1772 9.0956 16.278 9.33596 16.2802 9.58724C16.2824 9.83851 16.1858 10.0806 16.0112 10.2613H16.0141Z"
                        fill="#0023FF"
                      />
                    </svg>
                    <defs>
                      <clipPath id="clip0_404_4290">
                        <rect width="23" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>

            <div className="px-8 py-2 font-inter relative">
              <p className="py-2 text-base font-semibold">
                Select the Course that you would like to teach at the Course
                Compass:
              </p>
              <div className="flex gap-x-10 overflow-hidden">
                {courses.slice(currentIndex, currentIndex + 2).map((course) => (
                  <div
                    key={course.id}
                    className="shadow-2xl  border-2 rounded-3xl  ">
                    <div className="  flex flex-col rounded-t-3xl relative items-center text-black">
                      <p className="rounded-full text-white text-xs top-6 text-left absolute bg-custom-gradient ml-2 p-2 px-4">
                        {course.option}
                      </p>
                      <div className="flex p-2 mt-16 mr-auto">
                        <img
                          className="w-10 my-auto h-10"
                          src={course.image}
                          alt={course.name}
                        />
                        <h2 className="text-xl xl:text-4xl flex font-semibold font-inter p-2 text-left">
                          {course.name}
                        </h2>
                      </div>
                    </div>
                    <div className="text-black rounded-b-3xl px-5 py-4">
                      <p className="font-inter flex flex-wrap text-secondary text-sm">
                        {course.description}
                      </p>
                      <div className="py-5 space-y-4">
                        <p className="flex font-light items-center font-inter">
                          <MdAccessTime size={25} className="mr-2" />{" "}
                          {course.duration}
                        </p>
                      </div>
                      <div className="flex text-sm justify-between gap-6 py-5">
                        <button className="font-inter font-bold text-black w-full border-black border-[1px] p-3 rounded-lg">
                          View syllabus
                        </button>

                        <button
                          onClick={handleClosePopup}
                          className="font-inter font-bold text-white w-full  bg-black border-[1px] p-3 rounded-lg w">
                          Confirm as host
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            <div className=" flex justify-between">
              <button
                onClick={handlePrevCourse}
                disabled={currentIndex === 0}
                className={`left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}>
                <BsChevronDoubleLeft size={24} />
              </button>

              <button
                onClick={handleNextCourse}
                disabled={currentIndex === courses.length - 2}
                className={` right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
                  currentIndex === courses.length - 2
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}>
                <BsChevronDoubleRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      <div className="mt-10 px-4 lg:px-10 relative">
        <div className="text-center">
          <h2 className="py-2 font-inter text-4xl lg:text-5xl font-extrabold">
            Welcome <span className="text-green-400">Priya Chawla</span>
          </h2>
          <h3 className="font-inter text-2xl lg:text-3xl font-extrabold">
            at Course Compass as an instructor!
          </h3>
        </div>

        {/* Courses Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 justify-items-center">
          <div className="border-2 font-inter px-10 space-y-6 py-5 rounded-2xl ml-60">
            <div>
              <img className="w-20" src={live} alt="Go Live!" />
            </div>
            <h2 className="text-2xl font-bold">Go Live!</h2>
            <p className="w-60">Host live lectures at Course Compass LMS.</p>
            <button
              onClick={handelshowLive}
              className="w-60 p-2 bg-black text-white  rounded-lg font-semibold ">
              Host a Lecture
            </button>
          </div>

          <div className="border-2 font-inter px-6 space-y-4 py-5 rounded-2xl">
            <div>
              <img className="w-20" src={syllbus} alt="Course Syllabus" />
            </div>
            <h2 className="text-2xl font-bold">Course Syllabus!</h2>
            <p className="w-60">Host live lectures at Course Compass LMS.</p>
            <button className="w-60 p-2 bg-black text-white rounded-lg font-semibold">
              Go to Course Syllabus
            </button>
          </div>

          <div className="border-2 font-inter px-10 space-y-4 py-5 rounded-2xl mr-60">
            <div>
              <img className="w-20" src={calender} alt="My Calendar" />
            </div>
            <h2 className="text-2xl font-bold">My Calendar!</h2>
            <p className="w-64">
              Share the schedule for your upcoming live classes.
            </p>
            <Link to={"/calanderpage"}>
              <button className="w-60 p-2 mt-4 bg-black rounded-lg font-semibold text-white">
                Go to My Calendar
              </button>
            </Link>
          </div>

          {/* Updated Third Div */}
          <div className="border-2 font-inter px-6 space-y-4 py-5 rounded-2xl">
            {confirmedCourse ? (
              <>
                <div>
                  <img
                    className="w-14"
                    src={confirmedCourse.image}
                    alt="Course Syllabus"
                  />
                </div>
                <h2 className="text-2xl font-bold">{confirmedCourse.name}</h2>
                <p className="w-60">
                  Share the schedule for your upcoming live classes on the{" "}
                  {confirmedCourse.name} course.
                </p>
              </>
            ) : (
              <>
                <div>
                  <img className="w-20" src={syllbus} alt="Course Syllabus" />
                </div>
                <h2 className="text-2xl font-bold">Course Syllabus</h2>
                <p className="w-60">
                  Share the schedule for your upcoming live classes.
                </p>
              </>
            )}
            <button
              onClick={() => navigate(`/classroam/${confirmedCourse.id}`)}
              className="w-60 p-2 bg-black text-white rounded-lg font-semibold">
              Go to My Classroom
            </button>
          </div>
        </div>
      </div>
      {showLive && (
        <div className="fixed top-0 left-0 w-full font-inter h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="rounded-3xl shadow-2xl w-2/6 bg-white">
            <div className="py-5">
              <h3 className="text-xl text-[#0832FF] font-medium text-center">
                Select Class To Go Live
              </h3>

              {/* Class 1 */}
              <div className="px-10 py-5 relative mt-3">
                <span className="p-1 px-2 text-sm text-white bg-[#FF0000] rounded-3xl">
                  19 Sept, 11.00 am
                </span>
                <div className="px-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 39 49"
                    fill="none"
                    className="w-10 h-12 md:w-14 md:h-13 lg:w-15 lg:h-16 xl:w-16 xl:h-20"
                  >
                    <line
                      x1="1.35447"
                      y1="0.015625"
                      x2="1.35447"
                      y2="37.1892"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <line
                      x1="0.791016"
                      y1="36.0537"
                      x2="21.0582"
                      y2="36.0537"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <path
                      d="M22.1271 28.1213L35.9186 36.5261L22.1271 44.931L22.1271 28.1213Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2.60747"
                    />
                  </svg>
                </div>
                <div className="absolute top-20 space-y-1 left-32">
                  <div className="flex justify-between">
                    <h3 className="text-base xl:text-lg font-medium">
                      {liveCourse.name}
                    </h3>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={
                        selectedClass?.name === liveCourse.name &&
                        selectedClass?.time === "19 Sept, 11.00 am"
                      }
                      className="size-6 ml-24"
                      onChange={() =>
                        handleClassSelect(liveCourse.name, "19 Sept, 11.00 am")
                      }
                    />
                  </div>
                  <p className="text-sm xl:text-base">Week 1: Day 3</p>
                  <li className="text-sm xl:text-base">Fundamentals of AI</li>
                </div>
              </div>

              {/* Class 2 */}
              <div className="px-10 py-5 relative mt-3">
                <span className="p-1 px-2 text-sm text-white bg-[#FF0000] rounded-3xl">
                  20 Sept, 11.00 am
                </span>
                <div className="px-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 39 49"
                    fill="none"
                    className="w-10 h-12 md:w-14 md:h-13 lg:w-15 lg:h-16 xl:w-16 xl:h-20"
                  >
                    <line
                      x1="1.35447"
                      y1="0.015625"
                      x2="1.35447"
                      y2="37.1892"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <line
                      x1="0.791016"
                      y1="36.0537"
                      x2="21.0582"
                      y2="36.0537"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <path
                      d="M22.1271 28.1213L35.9186 36.5261L22.1271 44.931L22.1271 28.1213Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2.60747"
                    />
                  </svg>
                </div>
                <div className="absolute top-20 space-y-1 left-32">
                  <div className="flex justify-between">
                    <h3 className="text-base xl:text-lg font-medium">
                      {liveCourse.name}
                    </h3>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={
                        selectedClass?.name === liveCourse.name &&
                        selectedClass?.time === "20 Sept, 11.00 am"
                      }
                      className="size-6 ml-24"
                      onChange={() =>
                        handleClassSelect(liveCourse.name, "20 Sept, 11.00 am")
                      }
                    />
                  </div>
                  <p className="text-sm xl:text-base">Week 1: Day 3</p>
                  <li className="text-sm xl:text-base">Fundamentals of AI</li>
                </div>
              </div>

              {/* Repeat for other classes */}
              <div className="px-10 py-5 relative mt-3">
                <span className="p-1 px-2 text-sm text-white bg-[#FF0000] rounded-3xl">
                  21 Sept, 11.00 am
                </span>
                <div className="px-5 mt-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 39 49"
                    fill="none"
                    className="w-10 h-12 md:w-14 md:h-13 lg:w-15 lg:h-16 xl:w-16 xl:h-20"
                  >
                    <line
                      x1="1.35447"
                      y1="0.015625"
                      x2="1.35447"
                      y2="37.1892"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <line
                      x1="0.791016"
                      y1="36.0537"
                      x2="21.0582"
                      y2="36.0537"
                      stroke="black"
                      strokeWidth="2.25191"
                    />
                    <path
                      d="M22.1271 28.1213L35.9186 36.5261L22.1271 44.931L22.1271 28.1213Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2.60747"
                    />
                  </svg>
                </div>
                <div className="absolute top-20 space-y-1 left-32">
                  <div className="flex justify-between">
                    <h3 className="text-base xl:text-lg font-medium">
                      {liveCourse.name}
                    </h3>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={
                        selectedClass?.name === liveCourse.name &&
                        selectedClass?.time === "21 Sept, 02.00 pm"
                      }
                      className="size-6 ml-24"
                      onChange={() =>
                        handleClassSelect(liveCourse.name, "21 Sept, 02.00 pm")
                      }
                    />
                  </div>
                  <p className="text-sm xl:text-base">Week 1: Day 3</p>
                  <li className="text-sm xl:text-base">Fundamentals of AI</li>
                </div>
              </div>

              <div className="px-14 py-3">
                <li className="text-sm text-secondary">Select any one</li>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleGoLive}
                  className={`p-2 px-6 text-white rounded-lg font-semibold ${
                    selectedClass
                      ? "bg-[#01C064]"
                      : "bg-opacity-50 bg-[#01C064] cursor-not-allowed"
                  }`}
                  disabled={!selectedClass}
                >
                  GO LIVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default LuctherDashboard;
