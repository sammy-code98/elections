import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="md:grid md:grid-cols-2 md:gap-6 md:px-32  justify-center ml-14	 h-full  mt-48"
    >
      <div>
        <div className="text-center text-3xl">Get in Touch </div>
        <div className="text-justify tracking-wide m-4 text-gray-500">
          Fill up the form and our Team will get back to you within 24 hours{" "}
        </div>
        <div className="mt-12">
          <div className="flex m-4 text-gray-400">
            <FaPhoneAlt className="mx-2 mt-1" /> +234 344 2222 333
          </div>
          <div className="flex m-4 text-gray-400">
            <FaEnvelope className="mx-2 mt-1" /> elections@gmail.com
          </div>
          <div className="flex m-4 text-gray-400">
            <FaMapMarkerAlt className="mx-2 mt-1" /> No 30 wuse complex Abuja
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
}
