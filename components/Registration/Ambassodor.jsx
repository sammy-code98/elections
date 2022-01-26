import React, { useState } from "react";
import Image from "next/image";
// import Modal from "react-modal";
import AmbassadorForm from "./RegistationForms/AmbassadorForm";


export default function AmbassadorRegister() {
  
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 mt-4 md:mx-auto items-center md:px-24">
      <div>
        <p className="text-center  text-lg font-light md:text-left xl:text-left">
          Register to
        </p>
        <p className="md:text-left text-center text-3xl xl:text-left">
          Become an Ambassador
        </p>
        <div className="flex justify-center mt-4 md:justify-start xl:justify-start">
          <button
            className="bg-green-600 text-white p-2 hover:bg-white hover:text-green-600 rounded-md shadow-md  cursor-pointer focus:outline-none"
          >
            <a href="#ambassador-form">Register Now</a>
          </button>
          <div id="ambassador-form" className="modal">
          
            <div className="modal-box">
            <div className="modal-action">
              <button className="btn btn-circle btn-sm">
                <a href="#">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </a>
              </button>
            </div>
              <AmbassadorForm />
            </div>
          </div>
          {/* </Modal> */}
        </div>
      </div>
      <div className="order-first xl:order-last">
        <Image
          src="/ambassador.svg"
          alt="Student Ambassador Image"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
}
