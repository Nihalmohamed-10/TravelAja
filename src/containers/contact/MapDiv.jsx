import React from "react";

function MapDiv() {
  return (
    <div className="flex">
      <div className="max-w-[600px] mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-[27px] font-bold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="max-w-[69%] text-[16px] mb-6 leading-relaxed">
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

      <div>
        <div>{/* here i need to show map */}</div>
        <div>
          <div>
            <div>
              <p>Address</p>
              <p>City</p>
              <p>Open</p>
            </div>
            <div>
              <p>JL.Cindelaras No.205A</p>
              <p>Yogyakarta, Indonesia</p>
              <p>At 8AM</p>
            </div>
          </div>
          <div>
            <div>
              <p>Phone</p>
              <p>Email</p>
              <p>Close</p>
            </div>
            <div>
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
      </div>
    </div>
  );
}

export default MapDiv;
