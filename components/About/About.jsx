import React, { useState } from "react";
import Image from "next/image";
import { aboutText } from "./data";


export default function About() {
  const [readMore, setReadMore] = useState(false);
 
  return (
    <section
      className="md:grid md:grid-cols-2  md:mx-auto justify-items-center px-10 mt-32 container mx-8"
      id="about"
    >
      <div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={200} />
      </div>
      <div>
        <div className="text-3xl font-medium">About</div>
        <div className="p-2">
        <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
        {readMore ? aboutText : `${aboutText.substring(0, 400) + ' ' + ' ...'}`}
          </p>
          <div className="flex justify-center m-4">
          <button
          onClick={()=> setReadMore(!readMore)}
            className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer focus:outline-none"
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>
        </div>

        
        
      </div>
    </section>
  );
}
