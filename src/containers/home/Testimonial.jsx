import React from "react";
import { motion } from "framer-motion"; 
import { testimonial } from "../../data";

function Testimonial() {
  return (
    <div className="mx-auto mt-10 w-full pb-20 lg:mt-20">
      <div className="text-center">
        <p className="text-[16px] font-bold text-[#295943]">Testimonial</p>
        <h2 className="text-[27px] font-bold">What they say about us</h2>
      </div>

      <div className="text-center grid grid-cols-1 justify-items-center gap-y-6 gap-x-6 mt-10 lg:grid-cols-2 lg:mt-10 xl:grid-cols-3 xl:w-[90%] mx-auto lg:text-start">
        {testimonial.map((item, index) => (
          <motion.div
            key={index}
            className="w-[1/3] p-2 hover:bg-[#43B97F] hover:text-[white]"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} 
          >
            <div className="flex items-center w-[264px] justify-start gap-5">
              <div>
                <motion.img
                  src={item.img}
                  alt="img"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              </div>
              <p className="mx-auto text-[23px] font-bold">{item.name}</p>
            </div>
            <p className="mt-10 text-[16px] w-[300px] xl:w-[90%]">
              {item.words}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
