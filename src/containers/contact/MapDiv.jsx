import React from "react";
import map from "../../assets/images/map.png";

function MapDiv() {
  return (
    <div className="flex flex-col mt-10 xl:flex-row">
      <div className="max-w-[600px] mx-auto p-6 bg-white  rounded-lg ">
        <h2 className="text-[27px] font-bold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="max-w-[100%] text-[16px] mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis.
        </p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#43B97F] text-white hover:bg-[white] hover:text-[#43B97F]  rounded-md pt-[5px] pr-[20px] pb-[5px] pl-[20px] w-[81px] transition-all"
          >
            Send
          </button>
        </form>
      </div>

      <div className="w-[100%]  xl:w-[50%]">
        <div className="w-[90%] mx-auto h-[300px] overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.29275309103!2d110.32116878565807!3d-7.795579652097311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579dc69b0e61%3A0xcbb6313f4e5f2203!2sYogyakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1647000847123!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="max-w-[90%] mt-6 flex flex-col gap-5 items-center justify-between md:flex-row mx-auto justify-evenly xl:justify-between">
          <div className="flex items-center w-[250px] justify-between">
            <div className="flex flex-col gap-4 text-[16px] font-light">
              <p>Address :</p>
              <p>City :</p>
              <p>Open :</p>
            </div>
            <div className="flex flex-col gap-4 text-[16px] font-extralight">
              <p>JL.Cindelaras No.205A</p>
              <p>Yogyakarta, Indonesia</p>
              <p>At 8AM</p>
            </div>
          </div>
          <div className="flex items-center w-[250px] justify-between">
            <div className="flex flex-col gap-4 text-[16px] font-light">
              <p>Phone :</p>
              <p>Email :</p>
              <p>Close :</p>
            </div>
            <div className="flex flex-col gap-4 text-[16px] font-extralight ">
              <p>+62 1234 432 567</p>
              <p>info@travelaja.com</p>
              <p>At 8PM</p>
            </div>
          </div>
        </div>
        <div>
          <p></p>
          <h2></h2>
        </div>
        <div className="mt-10 pb-20 text-center xl:text-start xl:pl-10">
          <p className="text-[14px] font-light">AVAILABLE AT 9AM - 10PM</p>
          <h1 className="text-[40px] mx-auto">+124 4537 9756</h1>
        </div>
      </div>
    </div>
  );
}

export default MapDiv;
