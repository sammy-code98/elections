import React, { useState } from "react";
import Image from "next/image";
import { aboutText } from "./data";

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 mt-44 md:mx-auto justify-items-center"
      id="about"
    >
      <div>
        <Image
          src="/men.jpg"
          alt="About Image"
          width={500}
          height={300}
          className="rounded"
        />
      </div>
      <div>
        <div className="text-3xl text-gray-800 font-medium">About</div>
        <div className="py-2">
          {readMore ? (
            <div>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                We, The Ebonyians have found a man of quality who has brought
                his zeal for selfless service to bear on national life and who
                is a public servant with excellent idea on how to achieve a set
                goal. A distinguished patriotic Nigerian, who in his public and
                private life will remain consistent in the pursuit of excellence
                and the achievement of a national goal of genuine greatness,
                economic prosperity and tranquility devoid of pecuniary gains.
                That man is Engineer Elias Nwalem Mbam, the chairman of the
                Nigeria's Revenue Mobilization Allocation and Fiscal Commission
                (RMFAC). Engr. Elias N Mbam born on 2nd September, 1958 in
                Nwofe-Agbaje in izzi local govt. area of Ebonyi State.He
                Attended Hartford State Technical College in the U.S. from 1977
                – 1979 for Associate Degree before moving to University of
                Nigeria, Nsukka where he bagged a bachelor’s degree in
                electrical engineering in 1984. He started accumulating his rich
                profiles with high records of political, working, and leadership
                experience among other people we are expecting to succeed
                Governor David Umahi in 2023.
              </p>
              <p className="leading-relaxed text-base font-bold text-light mb-2 text-gray-900">POSITIONS OCCUPIED IN THE OLD ANAMBRA STATE GOVERNMENT.</p>
              <ol className="list-decimal leading-relaxed text-base text-light mb-2 text-gray-800">
                <li>Executive Engineer, Anambra State Ministry of Works and Transport 1987 - 1989.</li>
                <li>Project Engineer, Anambra State Rural Electrification Board 1989 - 1991.</li>
              </ol>
            </div>
          ) : (
            `${aboutText.substring(0, 400) + " " + " ..."}`
          )}

          {/* <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
            {readMore
              ? aboutText
              : `${aboutText.substring(0, 400) + " " + " ..."}`}
          </p> */}
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
