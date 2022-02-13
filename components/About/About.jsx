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
        <div className="text-3xl text-gray-800 text-center mt-4  font-medium">
          About
        </div>
        <div className="py-2">
          {readMore ? (
            <div
              className="leading-relaxed text-base text-bold mb-2 text-gray-800"
              id="about"
            >
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                We, The Ebonyians have found a man of quality who has brought
                his zeal for selfless service to bear on national life and who
                is a public servant with excellent idea on how to achieve a set
                goal. A distinguished patriotic Nigerian, who in his public and
                private life will remain consistent in the pursuit of excellence
                and the achievement of a national goal of genuine greatness,
                economic prosperity and tranquility devoid of pecuniary gains.
                That man is Engineer Elias Nwalem Mbam, the chairman of the
                Nigeria&apos;s Revenue Mobilization Allocation and Fiscal
                Commission (RMFAC). Engr. Elias N Mbam born on 2nd September,
                1958 in Nwofe-Agbaje in izzi local govt. area of Ebonyi State.He
                Attended Hartford State Technical College in the U.S. from 1977
                – 1979 for Associate Degree before moving to University of
                Nigeria, Nsukka where he bagged a bachelor’s degree in
                electrical engineering in 1984. He started accumulating his rich
                profiles with high records of political, working, and leadership
                experience among other people we are expecting to succeed
                Governor David Umahi in 2023.
              </p>
              <p className="leading-relaxed text-base font-bold text-light mb-2 text-gray-900">
                POSITIONS OCCUPIED IN THE OLD ANAMBRA STATE GOVERNMENT.
              </p>
              <ol className="list-decimal leading-relaxed text-base text-light mb-2 text-gray-800">
                <li>
                  Executive Engineer, Anambra State Ministry of Works and
                  Transport 1987 - 1989.
                </li>
                <li>
                  Project Engineer, Anambra State Rural Electrification Board
                  1989 - 1991.
                </li>
              </ol>
              <p className="leading-relaxed text-base font-bold text-light mb-2 text-gray-900">
                POSITIONS OCCUPIED IN THE OLD ENUGU STATE GOVERNMENT.
              </p>
              <ol className="list-decimal leading-relaxed text-base text-light mb-2 text-gray-800">
                <li>
                  Project Engineer, Enugu State Rural Electrification Board 1991
                  - 1995.
                </li>
                <li>
                  General Manager, Enugu State Housing Development Corporation
                  1995 – 1996.
                </li>
              </ol>
              <span>
                Highlight: Where he developed the Phase 6 of Trans Ekulu Housing
                Estate, Enugu.
              </span>

              <p className="leading-relaxed text-base font-bold text-light mb-2 text-gray-900">
                POSITIONS OCCUPIED IN EBONYI STATE GOVERNMENT.{" "}
              </p>
              <ol className="list-decimal leading-relaxed text-base text-light mb-2 text-gray-800">
                <li>
                  Pioneer General Manager, Ebonyi State Housing Development
                  Corporation from 1996 – 1998
                </li>
                Highlight: This position came at the creation of Ebonyi State in
                1996. Elias Mbam midwifed the development of both official,
                residential houses and offices for the smooth take-off of the
                new Government.
                <li>
                  General Manager, Ebonyi State Rural Electrification Board,
                  from 1998 - 1999.
                </li>
              </ol>
              <span>
                {" "}
                Highlight: There, he executed the electrification project of
                over 20 towns and communities in the State.
              </span>

              <p className="leading-relaxed text-base font-bold text-light mb-2 text-gray-900">
                POLITICAL POSITIONS SO FAR.{" "}
              </p>
              <ol className="list-decimal leading-relaxed text-base text-light mb-2 text-gray-800">
                <li>
                  Hon. Commissioner, Ministry of Works, Lands, Housing and
                  Transport, from 1999 - 2001.
                </li>
                <li>
                  Hon. Commissioner, Ministry of Works and Housing, from 2001 -
                  2005.
                </li>
                <span>
                  {" "}
                  Highlight: While serving in this capacity, the State Ministry
                  of Works, emerged the best in the Federation in Rural Road
                  Development. This visionary leadership and excellence
                  attracted development partners and donor agencies to the State
                  to contribute to its development.
                </span>
                <li>
                  Hon. Minister of State, FEDERAL MINISTRY OF FINANCE, BUDGET &
                  NATIONAL PLANNING NIGERIA, from 2006 - 2007.
                </li>
                Highlight: He instituted radical reforms in the Nigeria Customs
                Services (NCS) and Federal Inland Revenue Services (FIRS)
                respectively. Enthroned transparency and accountability via full
                disclosure of the activities of Federation Allocation Account
                Committee (FAAC) including allocation of Revenue to the 3-Tiers
                of Government.
                <li>
                  Executive Chairman, Revenue Mobilization Allocation and Fiscal
                  Commission from 2010 – 2015.
                </li>
                <span>
                  {" "}
                  Highlight: As the board chairman, he single handedly gave
                  strength to the bill that local governments should be granted
                  financial autonomy through the payment of statutory
                  allocations from the Federation Account directly to their
                  coffers. He also recently advocated the amendment of the
                  Revenue allocation Act of 2004 to check the indiscriminate and
                  illegal deductions from the Special Fund Account Comprising
                  the Development of Natural Resources, Ecology and the
                  stabilization accounts which are being held in trust by the
                  Federal government.
                </span>
                <li>
                  Executive Chairman, Revenue Mobilization Allocation and Fiscal
                  Commission from 2019 – present
                </li>
                <span>
                  {" "}
                  Highlight: He Championed the development and drafting of the
                  new revenue allocation formula captured the yearnings and
                  developmental aspirations of Nigerians, which was submitted to
                  federal Government on December,2021
                </span>
              </ol>
              <p className="leading-relaxed text-base font-bold text-light mb-2 text-gray-800">
                Indeed, Engr. Elias N. Mbam, FNSE, is in the best position to
                put the round peg in a round hole for Ebonyians considering his
                wealth of experience in leadership, civil service and politics.
                He is specifically reserved; to restore peace among Ebonyians,
                to focus on the well-being of Ebonyians , to pay quality
                attention to educational sector, to understand the welfare of
                the civil servants, engineer the maintenance and development of
                the industrial sector of Ebonyi State.
              </p>
            </div>
          ) : (
            <div className="text-gray-800"> {aboutText.substring(0, 400) + " " + " ..."}</div>
          )}

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
