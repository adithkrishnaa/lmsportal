import React,{ useState } from "react";
import Ai from "../assets/Image/ailogo.png";
import cal from "../assets/Image/clalogo.png";
import per from "../assets/Image/person.png";
import { LuSendHorizonal } from "react-icons/lu";
import { IoMdAttach } from "react-icons/io";
import { BsChevronDoubleRight } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Aicalender = () => {
  const [showChat, setShowChat] = useState(false); // State to control chat visibility
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [isChatMinimized, setIsChatMinimized] = useState(false); // State to minimize the chat
  const [chatHistory, setChatHistory] = useState([]); // Chat history
  const [inputMessage, setInputMessage] = useState(""); // To handle input message
  const [selectedDate, setSelectedDate] = useState(null);
  const lectureDays = [2, 4, 5, 6, 7];
  const currentDay = new Date().getDate();
  // Handle AI click to show the chat
  const handleAiClick = () => {
    setShowChat(true);
    setShowCalendar(false); // Close calendar when AI chat is shown
  };

  // Handle Calendar click to show the calendar
  const handleCalendarClick = () => {
    setShowCalendar(true);
    setShowChat(false); // Close chat when calendar is shown
  };

  // Handle minimizing the chat
  const toggleChatMinimize = () => {
    setIsChatMinimized(!isChatMinimized);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatHistory([...chatHistory, `User: ${inputMessage}`]);
      setInputMessage(""); // Clear input after sending
    }
  };

  return (
    <div>
      <div className="fixed z-50 bottom-9 right-1 p-3 rounded-full drop-shadow-xl">
        {/* AI Chat Button */}
        <div
          className="rounded-full bg-secondary p-2 cursor-pointer"
          onClick={handleAiClick}>
          <img className="size-6" src={Ai} alt="AI Chat" />
        </div>

        {/* Calendar Button */}
        <div
          className="rounded-full mt-5 bg-secondary p-2 cursor-pointer"
          onClick={handleCalendarClick}>
          <img className="size-6" src={cal} alt="Calendar" />
        </div>
      </div>

      {/* AI Chat Page with History */}
      {showChat && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-4/6 h-5/6  rounded-xl shadow-xl flex">
            {/* Chat History Section */}
            {!isChatMinimized && (
              <div className="w-2/12 text-white bg-[#4A3263] p-4 rounded-l-xl overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <button
                    className="text-xs  p-2 rounded"
                    onClick={toggleChatMinimize}>
                    <BsChevronDoubleRight size={20} />
                  </button>

                  <button>
                    <BsBoxArrowUpRight size={20} />
                  </button>
                </div>
                <ul className="space-y-2 mt-4">
                  {chatHistory.map((message, index) => (
                    <li key={index} className="bg-white p-2 rounded shadow">
                      {message}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Chat Box Section */}
            <div
              className={`p-5 pl-10 flex-1 ${
                isChatMinimized ? "w-12/12" : "w-10/12"
              }`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-secondary">
                  Tutor AI
                </h2>
                <button
                  className="-ml-10 absolute p-2 rounded"
                  onClick={toggleChatMinimize}>
                  {isChatMinimized ? <BsChevronDoubleRight size={20} /> : null}
                </button>

                <button onClick={() => setShowChat(false)}>
                  <RxCross2 size={25} />
                </button>
              </div>

              <div className="h-80 bg-gray-100 place-content-center p-4 overflow-y-auto">
                {/* Chat content and incoming messages */}
                <div className="space-y-2  font-inter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 35 35"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.20078 0.582587C5.14035 0.412172 5.02861 0.26466 4.88092 0.160337C4.73323 0.0560129 4.55685 0 4.37603 0C4.19521 0 4.01883 0.0560129 3.87114 0.160337C3.72345 0.26466 3.61171 0.412172 3.55128 0.582587L2.91467 2.38296C2.87113 2.50549 2.80082 2.61679 2.70887 2.70874C2.61691 2.80069 2.50561 2.871 2.38307 2.91453L0.582615 3.55112C0.412191 3.61154 0.264673 3.72328 0.160344 3.87096C0.0560155 4.01864 0 4.19502 0 4.37583C0 4.55664 0.0560155 4.73301 0.160344 4.88069C0.264673 5.02838 0.412191 5.14011 0.582615 5.20054L2.38307 5.83712C2.50561 5.88066 2.61691 5.95096 2.70887 6.04292C2.80082 6.13487 2.87113 6.24616 2.91467 6.3687L3.55128 8.16907C3.61171 8.33949 3.72345 8.487 3.87114 8.59132C4.01883 8.69564 4.19521 8.75166 4.37603 8.75166C4.55685 8.75166 4.73323 8.69564 4.88092 8.59132C5.02861 8.487 5.14035 8.33949 5.20078 8.16907L5.8374 6.3687C5.88093 6.24616 5.95124 6.13487 6.0432 6.04292C6.13516 5.95096 6.24645 5.88066 6.369 5.83712L8.16945 5.20054C8.33987 5.14011 8.48739 5.02838 8.59172 4.88069C8.69605 4.73301 8.75206 4.55664 8.75206 4.37583C8.75206 4.19502 8.69605 4.01864 8.59172 3.87096C8.48739 3.72328 8.33987 3.61154 8.16945 3.55112L6.369 2.91453C6.24645 2.871 6.13516 2.80069 6.0432 2.70874C5.95124 2.61679 5.88093 2.50549 5.8374 2.38296L5.20078 0.582587ZM31.4922 15.0249L31.4616 14.9418L30.2583 11.7917L29.8821 12.9511L29.1448 15.2152H14.6099L13.8749 12.9511L13.4986 11.7961L12.2932 14.9571L12.2845 14.979L12.2757 15.0008L12.2495 15.0665C11.9957 15.75 11.9675 16.4969 12.169 17.1976C12.3706 17.8983 12.7913 18.5161 13.3695 18.9603L13.3717 18.9625L13.3783 18.9691L13.4002 18.9866L13.422 19.0041L13.4308 19.0085L18.8431 23.0817L18.854 23.0905L21.5492 25.1358L21.873 25.3808L22.1924 25.1358L24.8898 23.0905L24.9029 23.0817L30.3502 18.9844L30.3633 18.9757L30.383 18.9625C30.9651 18.5164 31.3879 17.8946 31.5889 17.1893C31.7898 16.484 31.7582 15.7327 31.4987 15.0468L31.4922 15.0249ZM32.3476 21.5876L26.874 25.7002L24.1766 27.7478L22.5402 28.9925C22.3482 29.138 22.1139 29.2168 21.873 29.2168C21.6321 29.2168 21.3978 29.138 21.2058 28.9925L19.565 27.7478L16.8698 25.7024L11.4335 21.6117L11.405 21.5876L11.3897 21.5767C10.2418 20.7019 9.4073 19.4796 9.0107 18.092C8.6141 16.7043 8.67661 15.2257 9.1889 13.8764L9.22609 13.7846L11.8819 6.8259L12.0307 6.43652L12.1248 6.18713L12.5032 5.19617L12.5404 5.09773L12.7986 4.42396C12.8618 4.2636 12.9679 4.1237 13.1052 4.01954C13.2426 3.91538 13.4059 3.85096 13.5774 3.83331C13.7993 3.80981 14.0224 3.86599 14.2068 3.99183C14.3911 4.11766 14.5247 4.30494 14.5837 4.52021L14.8003 5.18742L14.809 5.21585L15.2312 6.51527L15.3625 6.91122L16.9945 11.9339H26.7603L28.3944 6.91122L28.5257 6.51746L28.9479 5.21585L28.9567 5.18742L29.1733 4.52021C29.2134 4.37842 29.2861 4.24795 29.3856 4.13918C29.485 4.03042 29.6084 3.94635 29.7461 3.89368C29.8837 3.841 30.0318 3.82117 30.1784 3.83576C30.3251 3.85034 30.4663 3.89894 30.5909 3.97769C30.7572 4.08418 30.8858 4.24031 30.9584 4.42396L31.2122 5.09116L31.2537 5.19617L31.6278 6.18057L31.7263 6.43652L31.875 6.82372L34.5309 13.7824L34.5659 13.8786C35.0769 15.2275 35.1385 16.7054 34.7415 18.0921C34.3446 19.4788 33.5103 20.7003 32.3629 21.5745L32.3476 21.5876ZM6.62933 24.7924C6.70509 24.5797 6.8448 24.3958 7.02928 24.2656C7.21376 24.1355 7.43398 24.0657 7.65972 24.0657C7.88547 24.0657 8.10569 24.1355 8.29017 24.2656C8.47465 24.3958 8.61435 24.5797 8.69011 24.7924L9.48643 27.0412C9.54084 27.1945 9.62877 27.3338 9.74382 27.4488C9.85887 27.5639 9.99814 27.6518 10.1515 27.7062L12.4004 28.5025C12.6131 28.5783 12.7971 28.718 12.9272 28.9024C13.0573 29.0869 13.1271 29.3071 13.1271 29.5328C13.1271 29.7586 13.0573 29.9788 12.9272 30.1633C12.7971 30.3477 12.6131 30.4874 12.4004 30.5632L10.1515 31.3595C9.99814 31.4139 9.85887 31.5018 9.74382 31.6169C9.62877 31.7319 9.54084 31.8712 9.48643 32.0245L8.69011 34.2733C8.61435 34.486 8.47465 34.6699 8.29017 34.8001C8.10569 34.9302 7.88547 35 7.65972 35C7.43398 35 7.21376 34.9302 7.02928 34.8001C6.8448 34.6699 6.70509 34.486 6.62933 34.2733L5.83302 32.0245C5.77861 31.8712 5.69067 31.7319 5.57562 31.6169C5.46057 31.5018 5.32131 31.4139 5.16797 31.3595L2.91904 30.5632C2.70639 30.4874 2.52239 30.3477 2.39227 30.1633C2.26216 29.9788 2.19232 29.7586 2.19232 29.5328C2.19232 29.3071 2.26216 29.0869 2.39227 28.9024C2.52239 28.718 2.70639 28.5783 2.91904 28.5025L5.16797 27.7062C5.32131 27.6518 5.46057 27.5639 5.57562 27.4488C5.69067 27.3338 5.77861 27.1945 5.83302 27.0412L6.62933 24.7924Z"
                      fill="url(#paint0_linear_254_13945)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_254_13945"
                        x1="0"
                        y1="0.700001"
                        x2="35"
                        y2="35.7"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#49FFA7" />
                        <stop offset="1" stopColor="#1976D2" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-2xl font-bold">Welcome!</h2>
                  <p className="text-xs">
                    Tell me whats on your mind, or pick a suggestion.
                  </p>
                  <div className="grid pt-6 gap-x-4 grid-cols-4 ">
                    <div className=" text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 25 25"
                        fill="none">
                        <path
                          d="M16.3614 6.10675C17.227 5.95698 18.0927 5.80716 18.9871 5.65234C18.818 6.53549 18.6513 7.40566 18.4792 8.30438C18.3196 8.14503 18.1636 8.00555 18.0281 7.84823C17.9331 7.73814 17.8741 7.76074 17.7848 7.84889C17.2212 8.40508 16.6541 8.95777 16.0875 9.51104C15.0765 10.4985 14.0636 11.4843 13.0558 12.4752C12.9717 12.5579 12.9298 12.5446 12.8548 12.4726C12.4319 12.0668 12.0024 11.6678 11.5808 11.2606C11.4986 11.1814 11.4552 11.1753 11.3706 11.2607C10.4448 12.193 9.51335 13.1196 8.58754 14.0516C8.50313 14.137 8.45858 14.1513 8.36761 14.0575C8.09911 13.7804 7.82024 13.5133 7.54132 13.2465C7.47969 13.1875 7.47988 13.155 7.54089 13.0945C8.83966 11.8053 10.1375 10.5151 11.4309 9.22037C11.5227 9.12854 11.5632 9.18512 11.6202 9.23896C12.0389 9.63467 12.4591 10.029 12.8735 10.4292C12.9417 10.4953 12.9722 10.4901 13.0374 10.4271C14.191 9.31356 15.3478 8.20307 16.5038 7.09201C16.6049 6.9949 16.7019 6.89241 16.8107 6.80446C16.908 6.7257 16.8901 6.67332 16.8065 6.59896C16.6434 6.45357 16.4883 6.29927 16.33 6.1487C16.3404 6.13483 16.3511 6.12086 16.3614 6.10675Z"
                          fill="black"
                        />
                        <path
                          d="M10.5505 14.9219H7.31641V18.0682H10.5505V14.9219Z"
                          fill="black"
                        />
                        <path
                          d="M14.7372 13.4375H11.5029V18.067H14.7372V13.4375Z"
                          fill="black"
                        />
                        <path
                          d="M18.91 11.4219H15.6758V18.0716H18.91V11.4219Z"
                          fill="black"
                        />
                      </svg>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className=" text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 25 25"
                        fill="none">
                        <svg>
                          <path
                            d="M8.63325 0.0703125C8.63325 0.0703125 5.48411 2.53661 1.84773 2.5896H1.63867V8.46163C1.63867 8.71093 1.70507 9.13313 1.70541 9.13402C1.89676 9.97131 2.78236 12.0983 6.84264 14.1892V7.21487H4.71495L8.62916 2.55378L12.5434 7.21487H10.416V14.0927C14.2625 12.0625 15.1508 10.0172 15.3558 9.17073C15.3977 8.99901 15.4191 8.60938 15.4191 8.60938V2.5896C11.7827 2.53631 8.63325 0.0703125 8.63325 0.0703125Z"
                            fill="black"
                          />
                        </svg>
                        <defs>
                          <clipPath id="clip0_324_18226">
                            <rect
                              width="16.3433"
                              height="14.2115"
                              fill="white"
                              transform="translate(0.355469 0.0234375)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 25 25"
                        fill="none">
                        <svg>
                          <path
                            d="M9.47336 1.70704C7.96063 1.70517 6.48144 2.13408 5.22354 2.93932L4.0076 1.77404C3.97388 1.74218 3.93109 1.72057 3.8846 1.71191C3.83811 1.70326 3.78999 1.70796 3.74628 1.72542C3.70257 1.74287 3.6652 1.77231 3.63888 1.81003C3.61255 1.84776 3.59844 1.89209 3.59831 1.93748V3.43125H2.03958C1.99223 3.43138 1.94596 3.44491 1.9066 3.47013C1.86723 3.49536 1.83652 3.53117 1.8183 3.57306C1.80009 3.61495 1.79519 3.66107 1.80421 3.70562C1.81324 3.75017 1.83579 3.79118 1.86905 3.82349L3.08498 4.98877C2.1379 6.35348 1.69363 7.98227 1.8227 9.61656C1.95178 11.2509 2.6468 12.797 3.79743 14.0096C4.94807 15.2221 6.48838 16.0316 8.17385 16.3095C9.85932 16.5874 11.5934 16.3178 13.1007 15.5435C14.608 14.7691 15.8023 13.5345 16.4938 12.0355C17.1854 10.5365 17.3347 8.85907 16.918 7.2695C16.5013 5.67993 15.5424 4.2693 14.1937 3.26155C12.8449 2.2538 11.1836 1.70668 9.47336 1.70704ZM5.51686 3.87089V4.94464L4.07752 3.56527V2.49151L5.51686 3.87089ZM7.78844 7.77202C7.44402 8.18561 7.2779 8.70986 7.32416 9.23715C7.37043 9.76443 7.62557 10.2547 8.03722 10.6074C8.44886 10.9601 8.98576 11.1483 9.5377 11.1335C10.0896 11.1187 10.6147 10.902 11.0051 10.5278C11.3956 10.1537 11.6217 9.65048 11.6372 9.12154C11.6526 8.5926 11.4562 8.07807 11.0882 7.68358C10.7202 7.28908 10.2085 7.04457 9.65834 7.00023C9.10813 6.95589 8.56108 7.1151 8.12951 7.44516L6.67482 6.05108C7.49376 5.35133 8.56511 4.98512 9.66128 5.03025C10.7575 5.07538 11.7921 5.52828 12.5454 6.29275C13.2987 7.05723 13.7113 8.07303 13.6956 9.12439C13.6799 10.1758 13.2371 11.1798 12.4613 11.9233C11.6855 12.6668 10.6378 13.0912 9.54068 13.1062C8.44361 13.1213 7.38364 12.7258 6.58592 12.0039C5.78821 11.282 5.31562 10.2905 5.26853 9.23997C5.22144 8.18947 5.60357 7.16276 6.33374 6.37794L7.78844 7.77202ZM9.0129 8.94547C8.98438 9.04493 8.991 9.15064 9.03171 9.24613C9.07243 9.34161 9.14496 9.42151 9.238 9.47337C9.33104 9.52523 9.43937 9.54613 9.5461 9.53283C9.65284 9.51953 9.75199 9.47277 9.82809 9.39983C9.9042 9.32689 9.953 9.23188 9.96688 9.12959C9.98076 9.0273 9.95894 8.92349 9.90483 8.83432C9.85071 8.74516 9.76734 8.67565 9.66771 8.63663C9.56807 8.59761 9.45777 8.59128 9.35398 8.61861L8.474 7.77529C8.8152 7.53094 9.2403 7.4195 9.66377 7.46339C10.0872 7.50728 10.4777 7.70324 10.7564 8.01184C11.0352 8.32044 11.1817 8.71878 11.1664 9.12671C11.1512 9.53464 10.9752 9.92188 10.674 10.2105C10.3728 10.4992 9.96877 10.6678 9.5431 10.6824C9.11743 10.6971 8.70177 10.5567 8.37975 10.2895C8.05773 10.0223 7.85325 9.64818 7.80746 9.24235C7.76166 8.83653 7.87795 8.42914 8.13292 8.10216L9.0129 8.94547ZM3.73815 3.8905L5.17749 5.26987H4.05705L2.61771 3.8905H3.73815ZM9.47336 15.9567C8.1796 15.9581 6.90944 15.6248 5.79687 14.992C4.68429 14.3593 3.77054 13.4505 3.152 12.3615C2.53346 11.2725 2.23307 10.0438 2.2825 8.80482C2.33194 7.56588 2.72937 6.36269 3.43288 5.32217L3.7876 5.66211C3.81003 5.68348 3.83664 5.70039 3.86591 5.71189C3.89517 5.72339 3.92651 5.72924 3.95814 5.72912H5.66353L6.0046 6.05598C5.18548 6.92621 4.75345 8.06865 4.80063 9.23974C4.84781 10.4108 5.37045 11.518 6.25715 12.3251C7.14384 13.1322 8.32444 13.5755 9.54727 13.5604C10.7701 13.5453 11.9384 13.0731 12.8031 12.2444C13.6679 11.4157 14.1606 10.296 14.1764 9.12417C14.1921 7.9523 13.7296 6.82089 12.8873 5.97114C12.0451 5.12139 10.8899 4.62052 9.66787 4.57531C8.44585 4.5301 7.25374 4.94412 6.34568 5.72912L6.0046 5.40225V3.76792C6.00474 3.73761 5.99863 3.70758 5.98663 3.67953C5.97463 3.65149 5.95698 3.62599 5.93468 3.60449L5.57996 3.26455C6.52015 2.68527 7.58827 2.32394 8.69958 2.20921C9.81089 2.09448 10.9348 2.22951 11.9822 2.6036C13.0295 2.97768 13.9715 3.58052 14.7334 4.36429C15.4953 5.14807 16.0561 6.0912 16.3713 7.11888C16.6866 8.14656 16.7476 9.2305 16.5495 10.2847C16.3514 11.3389 15.8998 12.3344 15.2303 13.1922C14.5608 14.0499 13.6919 14.7464 12.6926 15.2263C11.6933 15.7061 10.5911 15.9562 9.47336 15.9567Z"
                            fill="black"
                          />
                        </svg>
                        <defs>
                          <clipPath id="clip0_324_18240">
                            <rect
                              width="17.0538"
                              height="16.3433"
                              fill="white"
                              transform="translate(0.945312 0.890625)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className=" text-sm">
                      <AiOutlineGithub size={25} />
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input and Send Message */}
              <div className=" mt-20 relative">
                <button className="absolute text-secondary mt-1 p-2 rounded">
                  <IoMdAttach className="my-auto" size={25} />
                </button>
                <input
                  type="text"
                  placeholder="Message Tutor AI"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="w-full p-2 pl-12 border font-inter text-base focus:outline-none border-gray-300 rounded-xl"
                />
                <button
                  className="absolute text-secondary -ml-10 mt-1 p-2 rounded"
                  onClick={handleSendMessage}>
                  <LuSendHorizonal className="my-auto" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendar View */}
      {showCalendar && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-2/6 font-inter bg-white-rgba backdrop-blur-30 border-[1px] h-3/4 rounded-2xl shadow-xl ">
            <div className="bg-black text-white px-4 py-2 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    fill="">
                    <path
                      d="M31.5215 6.71484V14.3982M15.9785 6.71484V14.3982M8.20703 22.0815H39.2929M21.8071 29.7648H23.75V35.5273M8.20703 14.3982C8.20703 13.3793 8.61642 12.4022 9.34514 11.6817C10.0739 10.9613 11.0622 10.5565 12.0928 10.5565H35.4072C36.4378 10.5565 37.4261 10.9613 38.1548 11.6817C38.8836 12.4022 39.2929 13.3793 39.2929 14.3982V37.4482C39.2929 38.4671 38.8836 39.4442 38.1548 40.1646C37.4261 40.8851 36.4378 41.2898 35.4072 41.2898H12.0928C11.0622 41.2898 10.0739 40.8851 9.34514 40.1646C8.61642 39.4442 8.20703 38.4671 8.20703 37.4482V14.3982Z"
                      stroke="white"
                      strokeWidth="4.23675"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h2 className="text-xl text-white font-semibold">Calendar</h2>
                </div>
                <button
                  className="text-sm text-white p-1 rounded"
                  onClick={() => setShowCalendar(false)}>
                  <RxCross2 size={25} />
                </button>
              </div>
              <div className="flex justify-between">
                <h2 className=" text-2xl p-1">August</h2>
                <div className="my-auto">
                  <button>
                    <IoIosArrowBack size={23} />
                  </button>
                  <button>
                    <IoIosArrowForward size={23} />
                  </button>
                </div>
              </div>
            </div>
           <div className="grid grid-cols-7 bg-white p-1 font-inter py-2">
  {/* Date 1 - Monday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '1' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('1')}
      style={{
        width: '35.789px',
        height: '74.862px',
        borderRadius: '10.116px',
        background: selectedDate === '1' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '1' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Mon</p>
      <p className="date-container font-medium">{1}</p>
    </div>
  </div>

  {/* Date 2 - Tuesday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '2' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('2')}
      style={{
        width: '35.789px',
        height: '64.862px',
        borderRadius: '10.116px',
        background: selectedDate === '2' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '2' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Tue</p>
      <p className="date-container font-medium">{2}</p>
    </div>
    {(selectedDate === '2' || '2' === '2') && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
           style={{
             width: '8px',
             height: '8px',
             backgroundColor: 'red',
             borderRadius: '50%',
             flexShrink: '0',
           }}
      ></div>
    )}
  </div>

  {/* Date 3 - Wednesday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '3' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('3')}
      style={{
        width: '35.789px',
        height: '64.862px',
        borderRadius: '10.116px',
        background: selectedDate === '3' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '3' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Wed</p>
      <p className="date-container font-medium">{3}</p>
    </div>
  </div>

  {/* Date 4 - Thursday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '4' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('4')}
      style={{
        width: '35.789px',
        height: '64.862px',
        borderRadius: '10.116px',
        background: selectedDate === '4' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '4' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Thu</p>
      <p className="date-container font-medium">{4}</p>
    </div>
    {(selectedDate === '4' || '4' === '4') && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
           style={{
             width: '8px',
             height: '8px',
             backgroundColor: 'red',
             borderRadius: '50%',
             flexShrink: '0',
           }}
      ></div>
    )}
  </div>

  {/* Date 5 - Friday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '5' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('5')}
      style={{
        width: '35.789px',
        height: '64.862px',
        borderRadius: '10.116px',
        background: selectedDate === '5' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '5' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Fri</p>
      <p className="date-container font-medium">{5}</p>
    </div>
    {(selectedDate === '5' || '5' === '5') && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
           style={{
             width: '8px',
             height: '8px',
             backgroundColor: 'red',
             borderRadius: '50%',
             flexShrink: '0',
           }}
      ></div>
    )}
  </div>

  {/* Date 6 - Saturday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '6' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('6')}
      style={{
        width: '35.789px',
        height: '64.862px',
        borderRadius: '10.116px',
        background: selectedDate === '6' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '6' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Sat</p>
      <p className="date-container font-medium">{6}</p>
    </div>
    {(selectedDate === '6' || '6' === '6') && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
           style={{
             width: '8px',
             height: '8px',
             backgroundColor: 'red',
             borderRadius: '50%',
             flexShrink: '0',
           }}
      ></div>
    )}
  </div>

  {/* Date 7 - Sunday */}
  <div className="relative">
    <div
      className={`mx-auto cursor-pointer ${selectedDate === '7' ? 'bg-[#00AF46] text-white' : ''}`}
      onClick={() => setSelectedDate('7')}
      style={{
        width: '35.789px',
        height: '64.862px',
        borderRadius: '10.116px',
        background: selectedDate === '7' ? '#00AF46' : 'transparent',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedDate === '7' ? '#FFF' : '#000',
        fontFamily: 'Inter',
        fontSize: '40.466px',
        fontWeight: '500',
        lineHeight: '40.466px',
        textAlign: 'center',
      }}
    >
      <p className="text-base font-medium">Sun</p>
      <p className="date-container font-medium">{7}</p>
    </div>
  </div>
  </div>
  <div className="  ">
              <h2 className="font-inter font-semibold text-center py-2 text-xl text-white">
                Upcoming Lectures!
              </h2>

              <div className=" grid  gap-y-3">
                <div className=" flex  place-content-center  justify-items-center ">
                  <div className=" flex w-4/6 rounded-2xl  bg-white justify-between p-2">
                    <div className="p-1">
                      <h3 className=" font-semibold text-lg">
                        Generative AI Lecture
                      </h3>
                      <p className=" font-normal ">Starts at 2:00pm</p>
                    </div>
                    <img className="w-10 my-auto" src={per} alt="logo" />
                  </div>
                </div>
                <div className=" flex  place-content-center  justify-items-center ">
                  <div className=" flex w-4/6 rounded-2xl  bg-white justify-between p-2">
                    <div className="p-1">
                      <h3 className=" font-semibold text-lg">
                        Generative AI Lecture
                      </h3>
                      <p className=" font-normal ">Starts at 2:00pm</p>
                    </div>
                    <img className="w-10 my-auto" src={per} alt="logo" />
                  </div>
                </div>
                <div className=" flex  place-content-center  justify-items-center ">
                  <div className=" flex w-4/6 rounded-2xl  bg-white justify-between p-2">
                    <div className="p-1">
                      <h3 className=" font-semibold text-lg">
                        Generative AI Lecture
                      </h3>
                      <p className=" font-normal ">Starts at 2:00pm</p>
                    </div>
                    <img className="w-10 my-auto" src={per} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aicalender;

