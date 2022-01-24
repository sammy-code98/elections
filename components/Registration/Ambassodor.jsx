import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import AmbassadorForm from "./RegistationForms/AmbassadorForm";
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

export default function AmbassadorRegister() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 mt-4 md:mx-auto items-center md:px-24">
        <div>
          <p className="text-center  text-lg font-light">Register to</p>
          <p className="md:text-right text-center text-3xl">Become an Ambassador</p>
          <div className="flex justify-center m-4">
            <button
              onClick={openModal}
              className="bg-green-600 text-white p-2 hover:bg-white hover:text-green-600 rounded-md shadow-md  cursor-pointer focus:outline-none"
            >
              Register Now
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Ambassador form"
            >
              <span ref={(_subtitle) => (subtitle = _subtitle)}></span>
              <AmbassadorForm />
            </Modal>
          </div>
        </div>
        <div className="order-first xl:order-last">
        <Image src="/ambassador.svg" alt="Student Ambassador Image" width={500} height={400} />
      </div>
    </div>
  );
}
