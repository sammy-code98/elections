import React, { useState } from "react";
import Image from "next/image";
import { aboutText } from "./data";

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section
      className="grid grid-cols-1  md:grid-cols-2  md:gap-4 md:px-12 mt-24 md:mt-32 md:mx-auto justify-items-center"
      id="about"
    >
      <div>
        <Image
          loading="lazy"
          src="/msg.jpeg"
          alt="About Image"
          width={500}
          height={500}
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
                Engr. Elias Nwalem Mbam was born on the 2nd of September, 1958
                at Ndioga-Agbaja, Izzi Local Government Area of Ebonyi State.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                He had his primary education at Agbaja Central School (1963 –
                1971) and his secondary education at Abakiliki High School (1972
                – 1976). He obtained an Associate Science degree in Electrical
                Engineering Technology from Hartford State Technical College,
                Connecticut, USA in 1979 and a Bachelor of Engineering
                (Electrical/Electronics) from the University of Nigeria, Nsukka
                in 1984. He served in 1984/1985 in the present Ekiti state for
                his NYSC where he worked at the Department of Technical
                Education, College of Education, Ikere -Ekiti.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Mbam is a Fellow of the Nigerian Society of Engineers
                (FNSE) and a registered Member of the Council for the Regulation
                of Engineering in Nigeria (COREN). He is also a recipient of the
                Nigeria Society of Engineers’ Presidential Distinguished Service
                Award (2007) and a Fellow of the Institute of Credit
                Administration (FICA).
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Elias Nwalem Mbam has risen through the ranks of civil
                service and has held various positions of responsibility. After
                his NYSC, he was employed as an executive engineer at the
                Ministry of Works and Transport in old Anambra State. He was the
                project engineer at the Anambra State Rural Electrification
                Board (REB) (1989 – 1991), which provided electricity supply to
                over 110 towns /communities; Project Engineer at Enugu State
                Rural Electrification Board (1991 – 1995); and General Manager,
                Enugu State Housing Development Corporation (1995-1996) where he
                developed Phase 6 of Trans Ekulu Housing Estate, Enugu. In 1996,
                after the creation of Ebonyi State, he was appointed the pioneer
                General Manager, Ebonyi State Housing Development Corporation,
                Abakiliki, where he superintended over the development of
                official residential houses and offices for the take-off of the
                new state government. Engr. Mbam served as the General Manager
                for the Ebonyi State Rural Electrification Board, Abakiliki
                (1998 – 1999) and executed the electrification project of over
                twenty (20) towns and communities in the state.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Mbam was the Commissioner of Works, Lands, Housing and
                Transport in Ebonyi state (1999 – 2001). He also served as
                Commissioner of Works and Housing (2001 – 2005). In his time as
                Commissioner, Ebonyi State through the State Ministry of Works
                and Transport emerged the winner as the best state in the
                federation in rural roads development; this achievement
                attracted development partners and donor agencies to contribute
                to the state’s development. Also, under his leadership at the
                Ministry of Works and Transport, he facilitated and the state
                benefited from the Community-Based World Bank-Assisted Urban
                Development Project.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Mbam served under Chief Olusegun Obasanjo as the
                Honourable Minister of State for Finance in the Federal
                Executive Council in 2006. Here, he contributed immensely to the
                institution of radical reforms in the Nigeria Customs Service
                (NCS) and Federal Inland Revenue Service (FIRS). He instituted
                transparency and accountability through full disclosure of the
                activities of Federation Allocation Account Committee (FAAC),
                including allocation of revenue to the three tiers of
                government, while chairing the Committee.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Mbam was appointed Chairman of Revenue Mobilisation
                Allocation and Fiscal Commission (2010 – 2015). As chairman of
                RMAFC, he successfully supervised the conduct of the review of
                Revenue Allocation Formular and Remuneration Package for
                Political, Public and Judicial Office Holders.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                In recognition of his immense contribution to the development of
                Izzi Land and Ebonyi State in general, Engr. Mbam was given the
                traditional title of Nwadiohare of Izzi Land. Engr. Mbam paid
                school fees and other incidentals to indigent students, provided
                interest-free loans to the under-privileged and Agric inputs to
                rural farmers, especially women and the youths.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                In recognition of his philanthropy, the Rotary Club of Abakiliki
                conferred on him the Distinguished Community Service Award. The
                Ebonyi State Government also honoured him at a grand reception
                in Abakiliki in 2011.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Mbam has served as Chairman or member in various
                committees including: the Technical Committee for the Evaluation
                of the Technical Proposal for Consultancy Services for the
                Anambra State African Development Bank (ADB) Assisted Rural
                Water Supply Project (member), Ebonyi State Committee on
                Ecological Problems (chairman), Ebonyi State Finance and General
                Purposes Committee (chairman), and Program Steering Committee,
                Community Based World Bank Assisted Urban Development Project
                (chairman).
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr. Mbam was a director at Zion Engineering Ltd.; director at
                Ndiagu Community Bank Abakaliki; and Chairman, Elymay Ltd.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                After his first tenure of five years which ended in 2015, Engr.
                Mbam was reappointed by President Muhammadu Buhari for a second
                tenure as the Chairman, Revenue, Mobilization, Allocation and
                Fiscal Commission (2019 – date).
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr Mbam is happily married with worthy children.
              </p>
              <p className="leading-relaxed text-base text-light mb-2 text-gray-800">
                Engr Mbam enjoys travelling, listening to music, particularly
                traditional / local music, and community service.
              </p>
            </div>
          ) : (
            <div className="text-gray-800">
              {" "}
              {aboutText.substring(0, 1050) + " " + " ..."}
            </div>
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
