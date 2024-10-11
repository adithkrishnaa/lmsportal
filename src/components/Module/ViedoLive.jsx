import { LuDownload } from "react-icons/lu";
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
} from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { LuSendHorizonal } from "react-icons/lu";

import { useState } from "react";
import person from "../../assets/Image/person.png";

const VideoLive = () => {
  const [isChatVisible, setIsChatVisible] = useState(false); // Controls the visibility of the chat
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [inputMessage, setInputMessage] = useState(""); // Controls input text

  // Toggle chat box visibility
  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { name: "User", message: inputMessage }]);
      setInputMessage(""); // Clear input after sending
    }
  };

  return (
    <>
      <div className="flex  px-5">
        <div className=" w-10/12  relative">
          <div className="flex space-x-1 font-inter">
            <h2 className="text-2xl font-semibold">Month 1 </h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Week1</h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Day#2</h2>
          </div>

          <div className="mt-5 font-inter">
            <h3 className="py-2 font-semibold text-2xl ">
              Deep Learning Fundamentals{" "}
            </h3>
            <div className=" space-x-10 px-5 py-2 flex  place-content-end  ">
              <button className="p-2 flex border-2  shadow-3xl rounded-full">
                {" "}
                <IoPlaySkipBackOutline className="my-auto" />
                Previous
              </button>
              <button className="p-2 flex border-2  shadow-3xl rounded-full">
                <IoPlaySkipForwardOutline className="my-auto" />
                Next
              </button>
            </div>
            <div className="w-full h-full rounded-2xl">
              <iframe
                className="w-full lg:h-96 xl:h-96 rounded-3xl"
                src="https://www.youtube.com/embed/svCCWOK2fQI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
          <div className="py-5 space-y-3 font-inter">
            <h4 className="text-lg font-medium">About the Topic</h4>
            <p className="w-full text-sm">
              Lorem ipsum dolor sit amet consectetur. Nisi feugiat id proin
              bibendum senectus aliquam nulla. Nisl sed turpis nunc enim at amet
              orci. Libero egestas in netus volutpat. Et iaculis faucibus lacus
              integer. Etiam libero eu rhoncus dis. Nulla ac nisi donec
              ridiculus ultrices rhoncus. Quis in arcu lectus cras tortor enim
              auctor venenatis in. Vel libero aenean at proin ut ornare. Morbi
              ultrices rhoncus curabitur cursus nulla consectetur.
            </p>
            <button className="p-3 flex  text-white bg-black rounded-xl">
              Download Notes as PDF{" "}
              <LuDownload size={18} className=" ml-2 my-auto" />
            </button>
          </div>
        </div>
        <div className="w-4/12 rounded-3xl space-y-5">
          {/* Chat Toggle Button */}
          {!isChatVisible && (
            <div className="mt-5 border-2 rounded-3xl p-5">
              <button
                className="font-inter text-xl font-medium"
                onClick={toggleChat}>
                Show chat
              </button>
            </div>
          )}

          {/* Chat Box */}
          {isChatVisible && (
            <div className="border-2 rounded-3xl p-5">
              <div className="flex justify-between">
                <h2 className="font-inter text-xl font-medium">
                  Live AI Bot Chat
                </h2>
                <RxCross1
                  className="my-auto cursor-pointer"
                  size={18}
                  onClick={toggleChat}
                />
              </div>

              {/* Chat messages */}
              <div className="h-96 xl:h-[500px] z-5 overflow-y-auto  flex flex-col-reverse">
                {/* Messages */}
                {messages.map((msg, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-3">
                    <img className="size-5" src={person} alt="image" />
                    <div className="flex my-auto">
                      <p className="font-medium my-auto mr-3">{msg.name}</p>
                      <p className="text-sm my-auto">{msg.message}</p>
                    </div>
                  </div>
                ))}
                {!messages.length && <p>..</p>}
              </div>

              {/* Input box and send button */}
              <div className="flex mt-3">
                <img className="size-7" src={person} alt="image" />
                <input
                  type="text"
                  placeholder="Chat..."
                  className="p-2 w-full focus:outline-none border rounded-3xl"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} // Send message on Enter key
                />
                <LuSendHorizonal
                  size={25}
                  className="ml-2 my-auto cursor-pointer"
                  onClick={handleSendMessage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoLive;
