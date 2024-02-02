import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaShare } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-8 lg:flex lg:items-center gap-6">
          <img
            className="object-cover w-full h-72 lg:w-1/2 lg:h-[25rem] rounded-xl mb-8 lg:mb-0"
            src="/gautam.jpg"
            alt=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full lg:h-48 shadow border  rounded-lg overflow-hidden px-2">
              <div className="flex justify-between items-center ">
                <span className="text-xs font-semibold mt-2 bg-amber-100 text-amber-800 px-2 rounded font-serif">
                  Decode
                </span>
                <span className="flex items-center text-base mt-2 cursor-pointer gap-2">
                  <FaShare className="text-red-600" />
                  <PiDotsThreeOutlineVerticalFill className="text-gray-950 font-bold" />
                </span>
              </div>
              <h1 className="text-lg font-semibold font-serif  text-neutral-800 leading-6 mt-2">
                Cloned Fingerprints Scam: The Story Of Aadhaar Enabled Payment
                System
              </h1>
              <p className="text-sm font-normal font-sans mt-2">
                The AePS was launched in 2014 by the Indian government to
                empower...
              </p>
              <p className="text-sm font-medium font-sans mt-2 text-neutral-600">
                - By Umesh Kumar Kay | 2 Days ago
              </p>
            </div>

            <div className="w-full lg:h-48 shadow border  rounded-lg overflow-hidden px-2">
              <div className="flex justify-between items-center ">
                <span className="text-xs font-semibold mt-2  px-2 rounded font-serif">
                  Sports
                </span>
                <span className="flex items-center text-base mt-2 cursor-pointer gap-2">
                  <FaShare className="text-red-600" />
                  <PiDotsThreeOutlineVerticalFill className="text-gray-950 font-bold" />
                </span>
              </div>
              <h1 className="text-lg font-semibold font-serif  text-neutral-800 leading-6 mt-2">
                Asia Cup 2023: Fake Anti-BCCI Quote Falsely Attributed To
                Sunil...
              </h1>
              <p className="text-sm font-normal font-sans mt-2">
                BOOM found that the quote is fake and Sunil Gavaskar has made no
                such...
              </p>
              <p className="text-sm font-medium font-sans mt-2 text-neutral-600">
                - By Anmol Alphonso | 2 Days ago
              </p>
            </div>

            <div className="w-full lg:h-48 shadow border  rounded-lg overflow-hidden px-2">
              <div className="flex justify-between items-center ">
                <span className="text-xs font-semibold mt-2 bg-amber-100 text-amber-800 px-2 rounded font-serif">
                  Fact Check
                </span>
                <span className="flex items-center text-base mt-2 cursor-pointer gap-2">
                  <FaShare className="text-red-600" />
                  <PiDotsThreeOutlineVerticalFill className="text-gray-950 font-bold" />
                </span>
              </div>
              <h1 className="text-lg font-semibold font-serif  text-neutral-800 leading-6 mt-2">
                AI-Generated Image Of Aamir Khan Viral As Lala Amarnath Biopic
                Look
              </h1>
              <p className="text-sm font-normal font-sans mt-2">
                BOOM found that the image has been generated using Artificial...
              </p>
              <p className="text-sm font-medium font-sans mt-2 text-neutral-600">
                - By Swasti Chatterjee | 8 Days ago
              </p>
            </div>

            <div className="w-full lg:h-48 shadow border  rounded-lg overflow-hidden px-2">
              <div className="flex justify-between items-center ">
                <span className="text-xs font-semibold mt-2 bg-amber-100 text-amber-800 px-2 rounded font-serif">
                  Fact Check
                </span>
                <span className="flex items-center text-base mt-2 cursor-pointer gap-2">
                  <FaShare className="text-red-600" />
                  <PiDotsThreeOutlineVerticalFill className="text-gray-950 font-bold" />
                </span>
              </div>
              <h1 className="text-lg font-semibold font-serif  text-neutral-800 leading-6 mt-2">
                Image of Train Decorated With Flowers for Onam Is Fake
              </h1>
              <p className="text-sm font-normal font-sans mt-2">
                BOOM found that the image has been made using generative-Al and
                is not...
              </p>
              <p className="text-sm font-medium font-sans mt-2 text-neutral-600">
                - By Hazel Gandhi | 8 Days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
