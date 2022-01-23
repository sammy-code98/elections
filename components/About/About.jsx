import React, { useState } from "react";
import Image from "next/image";
import { aboutText } from "./data";

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section
      className="grid  grid-cols-1 md:grid-cols-2 mt-44 md:mx-auto justify-items-center"
      id="about"
    >
      <div>
        <Image
          src="/banner2.jpeg"
          alt="About Image"
          width={500}
          height={300}
          className="rounded"
        />
      </div>
      <div>
        <div className="text-3xl text-gray-800 font-medium">About</div>
        <div className="p-2">
          <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
            {readMore
              ? aboutText
              : `${aboutText.substring(0, 400) + " " + " ..."}`}
          </p>
          <div className="flex justify-center m-4">
            <div
              onClick={() => setReadMore(!readMore)}
              className="text-green-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-green-50"
            >
              {readMore ? "Read Less" : "Read More"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
