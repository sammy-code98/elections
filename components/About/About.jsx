import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "-150px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width:"500px"
  },
};

export default function About() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section
      className="grid grid-cols-2 justify-items-center px-10 mt-32"
      id="about"
    >
      <div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={200} />
      </div>
      <div>
        <div className="text-3xl font-medium">About</div>
        <div className="p-2">
          <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
            Yahaya Adoza Bello is a Nigerian politician and businessman, The
            fourth democratically elected Governor of Kogi State in 2016 and
            re-elected in Nov 2019.
          </p>
          <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
            Yahaya Adoza Bello was born on June 18, 1975 in Okene LGA, Kogi
            State as the youngest of six children. He was born to Late Alhaji
            Bello Ipemida Ochi and Hajiya Hawawu Oziohu.
          </p>

          <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
            In 1984, he attended the LGEA primary school, Agasa and in 1989 he
            proceeded to Agassa Community Secondary School, Anyava, Agassa-Okene
            and obtained his Junior Secondary School Certificate Examination
            (JSSCE) and Senior Secondary Certificate Examination (SSCE)
            certificates from Government Secondary School, Suleja-Niger State in
            1994.
          </p>
        </div>

        <div className="flex justify-center m-4">
          <button
            onClick={openModal}
            className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer focus:outline-none"
          >
            Read more
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="About Modal"
        >
          <div className="flex space-x-24  items-center justify-between p-6">
            <div
              className="text-center text-3xl"
              ref={(_subtitle) => (subtitle = _subtitle)}
            >
              About
            </div>
            <button
              className="bg-sky-500 text-white p-2 rounded-md "
              onClick={closeModal}
            >
              close
            </button>
          </div>
          <hr />
          <div className="p-6 mx-auto">
            <p>
              Yahaya Adoza Bello is a Nigerian politician and businessman, The
              fourth democratically elected Governor of Kogi State in 2016 and
              re-elected in Nov 2019.
            </p>
            <p>
              Yahaya Adoza Bello was born on June 18, 1975 in Okene LGA, Kogi
              State as the youngest of six children. He was born to Late Alhaji
              Bello Ipemida Ochi and Hajiya Hawawu Oziohu.
            </p>
            <p>
              Yahaya Adoza Bello started as a Revenue Officer II at the Revenue
              Mobilization Allocation and Fiscal Commission (RMAFC) in 2001. He
              began at the commission as a Youth Corp member and got retained
              due to his diligence. Shortly after, he became a Senior Accountant
              and got transferred to the Makurdi Zonal Office to head the
              Account Department. Later on, he became the Assistant Chief
              Accountant until he resigned. Yahaya Adoza Bello knew he cant be
              a humanitarian by earning salary, after resignation from public
              service, he went into private business. As a business man, Yahaya
              Adoza Bello with a single 18-seater bus he procured through a bank
              loan, built one of Nigerias most successful transport businesses,
              Fair Plus. Discovering that Bello was a faithful and prudent
              resourceful entrepreneur gave more bank facilities. With more
              facilities and with the introduction of modern business management
              into the business, Fair Plus rose to become a giant in the
              industry. Applying his entrepreneurial skills, Governor Yahaya
              Bello mastered the art of informed stock trading and had a
              financial breakthrough right before the crash of the stock market.
              His stock portfolio investments cut across the oil and gas,
              finance, transportation, and agro related sectors. He then grew
              and expanded his real estate investments expanding into a number
              of states in the country. He currently funds three orphanage homes
              and sponsors hundreds of Kogi State undergraduates in various
              higher institutions both within and outside the country. His
              strong drive for community development inspired him to invest in
              various community projects.
            </p>
          </div>
        </Modal>
      </div>
    </section>
  );
}
