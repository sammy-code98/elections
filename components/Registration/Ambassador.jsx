import React from "react";
import Image from "next/image";
import Ambassador from "./RegistationForms/AmbassadorForm";

export default function StudentRegister() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 mt-4 md:mx-auto items-center md:px-24">
      <div>
        <Image
          loading="lazy"
          src="/student.svg"
          alt="Student Ambassador Image"
          width={500}
          height={400}
        />
      </div>
      <div className="mt-12">
        <p className="text-center text-lg text-gray-400 md:text-left xl:text-left">
          Register to
        </p>
        <p className="text-center text-3xl text-gray-800 md:text-left xl:text-left">
          Become an Ambassador?
        </p>
        <div className="flex justify-center xl:justify-start mt-4">
          <button className="bg-green-600 text-white p-2 hover:bg-white hover:text-green-600 rounded-md shadow-md  cursor-pointer focus:outline-none">
            <a href="#student-form"> Register Now</a>
          </button>
          <div id="student-form" className="modal">
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
              <Ambassador />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
