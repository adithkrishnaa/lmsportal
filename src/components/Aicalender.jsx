import React, { useState } from "react";
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
import { auth } from "../firebase";
import svg1 from "../assets/Image/AiTutor/svg1.svg";
import svg2 from "../assets/Image/AiTutor/svg2.svg";
import svg3 from "../assets/Image/AiTutor/svg3.svg";
import svg4 from "../assets/Image/AiTutor/svg4.svg";
import svg5 from "../assets/Image/AiTutor//svg5.svg";

const Aicalender = () => {
  const [showChat, setShowChat] = useState(false); // State to control chat visibility
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [isChatMinimized, setIsChatMinimized] = useState(false); // State to minimize the chat
  const [chatHistory, setChatHistory] = useState([]); // Chat history
  const [inputs, setInputs] = useState([]); //Inputs
  const [responses, setResponses] = useState([]); //AI Responses
  const [inputMessage, setInputMessage] = useState(""); // To handle input message
  const [selectedDate, setSelectedDate] = useState(null);
  const [sessions, setSessions] = useState([{}]);
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
  const handleSendMessage = async () => {
    setInputs((prevInputs) => [...prevInputs, inputMessage]);
    const token = await auth.currentUser.getIdToken();
    if (inputMessage.trim()) {
      const response = await fetch(
        "https://course-compass-backend-zh7c.onrender.com/api/chatbot/invoke-rag",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: inputMessage,
            coursename: "Embedded Systems", //Hard-coded for development purposes
          }),
        }
      );
      if (!response.ok) {
        console.log(response.message);
      }
      const data = await response.json();
      console.log(data);
      setResponses((prevResponses) => [...prevResponses, data.answer]);
      setChatHistory([...chatHistory, `User: ${inputMessage}`]);
      setInputMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="overflow-y-auto">
      <div className="fixed z-50 bottom-9 right-1 p-3 rounded-full drop-shadow-xl">
        {/* AI Chat Button */}
        <div
          className="rounded-full bg-secondary p-2 cursor-pointer"
          onClick={handleAiClick}
        >
          <img className="size-6" src={Ai} alt="AI Chat" />
        </div>

        {/* Calendar Button */}
        <div
          className="rounded-full mt-5 bg-secondary p-2 cursor-pointer"
          onClick={handleCalendarClick}
        >
          <img className="size-6" src={cal} alt="Calendar" />
        </div>
      </div>

      {/* AI Chat Page with History */}
      {showChat && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-4/6 h-5/6  rounded-xl shadow-xl flex">
            {/* Chat History Section */}
            {/* {!isChatMinimized && (
              <div className="w-2/12 text-white bg-[#4A3263] p-4 rounded-l-xl overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <button
                    className="text-xs  p-2 rounded"
                    onClick={toggleChatMinimize}
                  >
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
            )} */}

            {/* Chat Box Section */}
            <div
              className={`p-5 pl-10 flex-1 ${
                isChatMinimized ? "w-12/12" : "w-10/12"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-secondary">
                  Tutor AI
                </h2>
                <button
                  className="-ml-10 absolute p-2 rounded"
                  onClick={toggleChatMinimize}
                >
                  {isChatMinimized ? <BsChevronDoubleRight size={20} /> : null}
                </button>

                <button onClick={() => setShowChat(false)}>
                  <RxCross2 size={25} />
                </button>
              </div>

              <div className="h-80 bg-gray-100 place-content-center p-4 overflow-y-auto">
                {/* Chat content and incoming messages */}
                <div className="space-y-2  font-inter">
                  <img src={svg1} />
                  <h2 className="text-2xl font-bold">Welcome!</h2>
                  <p className="text-xs">
                    Tell me whats on your mind, or pick a suggestion.
                  </p>
                  <div className="grid pt-6 gap-x-4 grid-cols-4 ">
                    <div className=" text-sm">
                      <img src={svg2} />
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className=" text-sm">
                      <img src={svg3} />
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="text-sm">
                      <img src={svg4} />
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className=" text-sm">
                      <AiOutlineGithub size={25} />
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
                {inputs.map((input, i) => (
                  <li key={i}>
                    <ul>
                      <li style={{ backgroundColor: "", marginBottom : "15px", borderRadius:"35px", paddingRight:"10px",fontWeight:"bold", textAlign:"right"}}>
                        Student: {input}
                      </li>
                      <li style={{ backgroundColor: "", marginBottom : "15px", borderRadius:"35px", paddingLeft:"10px", fontWeight:"bold"}}>
                        AI Tutor: {responses[i] ?? "..."}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>

              {/* Input and Send Message */}
              <div className=" mt-20 f">
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
                  onClick={handleSendMessage}
                >
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
                  <img src={svg5} />
                  <h2 className="text-xl text-white font-semibold">Calendar</h2>
                </div>
                <button
                  className="text-sm text-white p-1 rounded"
                  onClick={() => setShowCalendar(false)}
                >
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
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "1" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("1")}
                  style={{
                    width: "35.789px",
                    height: "74.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "1" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "1" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
                  }}
                >
                  <p className="text-base font-medium">Mon</p>
                  <p className="date-container font-medium">{1}</p>
                </div>
              </div>

              {/* Date 2 - Tuesday */}
              <div className="relative">
                <div
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "2" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("2")}
                  style={{
                    width: "35.789px",
                    height: "64.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "2" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "2" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
                  }}
                >
                  <p className="text-base font-medium">Tue</p>
                  <p className="date-container font-medium">{2}</p>
                </div>
                {(selectedDate === "2" || "2" === "2") && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      flexShrink: "0",
                    }}
                  ></div>
                )}
              </div>

              {/* Date 3 - Wednesday */}
              <div className="relative">
                <div
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "3" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("3")}
                  style={{
                    width: "35.789px",
                    height: "64.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "3" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "3" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
                  }}
                >
                  <p className="text-base font-medium">Wed</p>
                  <p className="date-container font-medium">{3}</p>
                </div>
              </div>

              {/* Date 4 - Thursday */}
              <div className="relative">
                <div
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "4" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("4")}
                  style={{
                    width: "35.789px",
                    height: "64.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "4" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "4" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
                  }}
                >
                  <p className="text-base font-medium">Thu</p>
                  <p className="date-container font-medium">{4}</p>
                </div>
                {(selectedDate === "4" || "4" === "4") && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      flexShrink: "0",
                    }}
                  ></div>
                )}
              </div>

              {/* Date 5 - Friday */}
              <div className="relative">
                <div
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "5" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("5")}
                  style={{
                    width: "35.789px",
                    height: "64.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "5" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "5" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
                  }}
                >
                  <p className="text-base font-medium">Fri</p>
                  <p className="date-container font-medium">{5}</p>
                </div>
                {(selectedDate === "5" || "5" === "5") && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      flexShrink: "0",
                    }}
                  ></div>
                )}
              </div>

              {/* Date 6 - Saturday */}
              <div className="relative">
                <div
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "6" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("6")}
                  style={{
                    width: "35.789px",
                    height: "64.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "6" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "6" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
                  }}
                >
                  <p className="text-base font-medium">Sat</p>
                  <p className="date-container font-medium">{6}</p>
                </div>
                {(selectedDate === "6" || "6" === "6") && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      flexShrink: "0",
                    }}
                  ></div>
                )}
              </div>

              {/* Date 7 - Sunday */}
              <div className="relative">
                <div
                  className={`mx-auto cursor-pointer ${
                    selectedDate === "7" ? "bg-[#00AF46] text-white" : ""
                  }`}
                  onClick={() => setSelectedDate("7")}
                  style={{
                    width: "35.789px",
                    height: "64.862px",
                    borderRadius: "10.116px",
                    background:
                      selectedDate === "7" ? "#00AF46" : "transparent",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedDate === "7" ? "#FFF" : "#000",
                    fontFamily: "Inter",
                    fontSize: "40.466px",
                    fontWeight: "500",
                    lineHeight: "40.466px",
                    textAlign: "center",
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
