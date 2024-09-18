import { BiSupport } from "react-icons/bi";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";


const Help = () => {


  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const toggleFAQ = (index) => {
    // If the current question is open, close it; otherwise, open it
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I change or reset my Course Compass account password?",
      answer:
        "Lorem ipsum dolor sit amet consectetur  A aliquam quibusdam, ullam obcaecati nesciunt ipsum molestias quam iusto.",
    },
    {
      question: "How do I change or reset my Course Compass account password?",
      answer:
        "Lorem ipsum dolor sit amet consectetur  A aliquam quibusdam, ullam obcaecati nesciunt ipsum molestias quam iusto.",
    },
    {
      question: "How do I change or reset my Course Compass account password?",
      answer:
        "Lorem ipsum dolor sit amet consectetur  A aliquam quibusdam, ullam obcaecati nesciunt ipsum molestias quam iusto.",
    },
    {
      question: "How do I change or reset my Course Compass account password?",
      answer:
        "Lorem ipsum dolor sit amet consectetur  A aliquam quibusdam, ullam obcaecati nesciunt ipsum molestias quam iusto.",
    },
    // Add more FAQ items here
  ];
  return (
    <>
      <div className="bg-black py-5  flex font-inter  px-2 rounded-t-3xl text-white">
        <BiSupport size={30} />
        <h2 className="text-2xl font-bold  ml-5"> Help </h2>
      </div>
      <div className="bg-hlight rounded-b-3xl py-5">
        <div
          className=" p-5 px-8 grid grid-cols-2 gap-x-5
         ">
          <div className="flex p-3  rounded-2xl bg-white my-auto">
            <div className="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none">
                <path
                  d="M5.80122 1.81979C5.31255 1.87378 4.76177 2.0493 4.27854 2.30038C3.14189 2.89971 2.2969 4.06603 2.0728 5.35114C2.02417 5.6238 2.02148 5.99097 2.02148 14.4764V23.3183L2.08361 23.5936C2.47238 25.3512 3.71426 26.5931 5.47185 26.9819L5.74722 27.0439H14.6295H23.5119L23.7873 26.9819C25.5448 26.5931 26.7867 25.3512 27.1755 23.5936L27.2376 23.3183V14.4764C27.2376 5.99096 27.2349 5.6238 27.1863 5.35114C27.1188 4.95695 26.9838 4.56007 26.7786 4.14974C26.1388 2.86189 24.8537 1.97098 23.412 1.81439C23.0826 1.77928 6.11979 1.78203 5.80122 1.81979ZM15.4476 6.30958C16.3763 6.42566 17.1268 6.64972 17.9503 7.052C18.7602 7.44889 19.2785 7.82414 19.9643 8.50718C20.6069 9.15245 20.9632 9.64109 21.3412 10.3997C21.8677 11.4581 22.1674 12.7162 22.2186 14.1012C22.2376 14.5736 22.2241 14.6789 22.116 14.8139C21.9109 15.0758 21.46 15.0325 21.3061 14.7383C21.2575 14.6411 21.244 14.5574 21.2278 14.1794C21.2008 13.599 21.1603 13.2237 21.0793 12.7756C20.7608 11.018 19.9184 9.61412 18.5739 8.60707C17.4535 7.76475 16.2953 7.35434 14.778 7.26528C14.2651 7.23556 14.176 7.21668 14.0599 7.12757C13.8439 6.9575 13.8331 6.55797 14.041 6.37167C14.1679 6.25554 14.2569 6.23935 14.697 6.25284C14.9265 6.26094 15.264 6.28796 15.4476 6.30958ZM9.27584 6.60113C9.37036 6.63354 9.51614 6.70911 9.59984 6.76311C10.1128 7.1033 11.541 8.93103 12.0081 9.84358C12.2753 10.3646 12.3644 10.7507 12.2807 11.0369C12.1943 11.3447 12.0513 11.5067 11.4114 12.0223C11.1549 12.2302 10.9146 12.4434 10.8768 12.5002C10.7796 12.6406 10.7013 12.916 10.7013 13.1104C10.7041 13.5612 10.9956 14.3792 11.379 15.0083C11.6759 15.4969 12.2078 16.1233 12.7343 16.6038C13.3525 17.1708 13.8979 17.5569 14.5134 17.862C15.3045 18.2561 15.7878 18.356 16.1414 18.1914C16.2305 18.1509 16.325 18.0968 16.3547 18.0726C16.3817 18.0483 16.5896 17.7945 16.8164 17.5137C17.2537 16.9629 17.3536 16.8739 17.6533 16.7713C18.034 16.6417 18.4228 16.6768 18.8142 16.8766C19.1112 17.0304 19.7591 17.4327 20.1776 17.7243C20.7283 18.1104 21.9054 19.0715 22.0648 19.2632C22.3455 19.6087 22.3942 20.0515 22.2051 20.5402C22.0053 21.0558 21.2278 22.0224 20.6851 22.4354C20.1938 22.808 19.8455 22.951 19.3866 22.9727C19.0086 22.9915 18.852 22.9592 18.3687 22.7594C14.5782 21.1962 11.5518 18.8636 9.14894 15.6589C7.89356 13.9851 6.93782 12.2491 6.28445 10.4483C5.90381 9.39814 5.88492 8.94187 6.19806 8.40458C6.33307 8.17782 6.90813 7.61626 7.32659 7.30309C8.02315 6.78473 8.34442 6.59303 8.6009 6.53904C8.77637 6.50123 9.08143 6.53095 9.27584 6.60113ZM15.6338 8.26693C17.2726 8.50718 18.5415 9.26853 19.3731 10.505C19.8401 11.2016 20.1317 12.0196 20.2316 12.897C20.2667 13.2183 20.2667 13.8042 20.2289 13.9014C20.1938 13.9932 20.0804 14.1173 19.9832 14.1686C19.8779 14.2226 19.6539 14.2172 19.5297 14.1525C19.3217 14.0472 19.2597 13.8797 19.2597 13.4262C19.2597 12.727 19.0788 11.9899 18.7656 11.4176C18.4092 10.7642 17.8909 10.2243 17.2592 9.84897C16.7165 9.52501 15.9146 9.28472 15.183 9.22532C14.9184 9.2037 14.7726 9.14975 14.6727 9.03362C14.5189 8.85816 14.5026 8.62056 14.6322 8.42352C14.7726 8.20479 14.9886 8.16968 15.6338 8.26693ZM16.2089 10.3052C16.7408 10.4186 17.1485 10.6211 17.4967 10.9478C17.9449 11.3716 18.1906 11.8846 18.2985 12.6217C18.3714 13.1022 18.3417 13.2912 18.1717 13.4478C18.0124 13.5936 17.7181 13.599 17.5399 13.4613C17.4103 13.3641 17.3698 13.2615 17.3401 12.9834C17.305 12.6136 17.2402 12.3544 17.1296 12.1141C16.892 11.6038 16.4735 11.3393 15.7662 11.2528C15.4341 11.2123 15.3342 11.1746 15.2262 11.0477C15.0291 10.8128 15.1047 10.4321 15.3774 10.2918C15.48 10.2405 15.5232 10.235 15.7499 10.2486C15.8903 10.2566 16.0982 10.2809 16.2089 10.3052Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="w-52 ml-2 font-inter text-sm font-medium">
              <p>
                Our 24x7 Customer Service <span>0227873784</span>
              </p>
            </div>
          </div>
          <div className="flex p-3  rounded-2xl bg-white my-auto">
            <div className="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none">
                <g clipPath="url(#clip0_104_10036)">
                  <path
                    d="M3.6329 0.764503C1.8093 0.764503 0.78418 1.70734 0.78418 3.63374V23.4921C0.78418 25.294 1.70584 26.2374 3.52794 26.2374H23.4702C25.2924 26.2374 26.2154 25.3409 26.2154 23.4921V3.63374C26.2154 1.75433 25.2924 0.764503 23.413 0.764503C23.413 0.764503 3.62659 0.758238 3.6329 0.764503Z"
                    fill="black"
                  />
                  <path
                    d="M22.5403 19.6696V6.39844H4.50879V19.6696H22.5403Z"
                    stroke="white"
                    strokeWidth="1.35243" // Fixed here
                  />
                  <path
                    d="M4.67676 6.56738L12.4556 14.4498C13.0322 15.0308 14.0812 15.0239 14.6456 14.4551L22.4191 6.63082"
                    stroke="white"
                    strokeWidth="1.35243" // Fixed here
                  />
                  <path
                    d="M4.94238 19.2326L10.9025 13.1396"
                    stroke="white"
                    strokeWidth="1.35243" // Fixed here
                  />
                  <path
                    d="M22.0357 19.1628L16.2363 13.2246"
                    stroke="white"
                    strokeWidth="1.35243" // Fixed here
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_10036">
                    <rect
                      width="27"
                      height="27"
                      fill="white"
                      transform="translate(0.00195312)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-52 ml-2 font-inter text-sm font-medium">
              <p>
                Write us at <span>support@coursecompass.com</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-2">
            <h2 className="font-inter text-lg font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="bg-dhelp px-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <li
                  className="list-decimal font-inter list-outside flex px-2 py-2 items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  {openIndex === index ? (
                    <GoChevronUp className="ml-auto" size={25} />
                  ) : (
                    <GoChevronDown className="ml-auto" size={25} />
                  )}
                </li>
                {openIndex === index && (
                  <p className="px-4 py-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="py-2 flex  relative ">
          <input
            type="text"
            placeholder="Search more query"
            className="placeholder-secondary mx-auto  font-inter  pl-20 focus:outline-none rounded-xl px-2 py-2    text-black"
          />
          <div className=" absolute text-black top-4 left-52">
            <IoIosSearch size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
