import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed bottom-16 right-4">
      <button
        className="text-white px-4 py-2 rounded-full focus:outline-none mr-8 mb-16 bg-opacity-75 relative"
        onClick={toggleVisibility}
      >
        <FontAwesomeIcon
          className={`absolute top-1/2 left-30 transform -translate-x-1/2 -translate-y-1/2 ${
            isVisible ? "hidden" : "block"
          }`}
          color="white"
          icon={faComment}
        />
        <div
          className={`bg-white p-4 mt-10 rounded-lg shadow-md ${
            isVisible ? "block" : "hidden"
          }`}
        >
          {isVisible && (
            <iframe
              title="Chatbot"
              src="https://www.chatbase.co/chatbot-iframe/r1NdtnlcJAch2M7R5kE6S"
              width="300"
              height="400"
            ></iframe>
          )}
        </div>
      </button>
    </div>
  );
}
