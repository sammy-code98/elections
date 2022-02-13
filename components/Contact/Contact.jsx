import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid  grid-cols-1 md:grid-cols-2 md:gap-12 md:px-32  justify-center  h-full  mt-24 md:mt-32"
    >
      <div>
        <div className="text-center text-gray-800 text-3xl xl:text-5xl">
          Get in Touch{" "}
        </div>
        <div className="text-justify tracking-wide m-4 text-gray-800">
          Fill up the form and our Team will get back to you within 24 hours{" "}
        </div>
        <div className="mt-12">
          <div className="flex m-4 text-gray-500 hover:text-green-500">
            <FaPhoneAlt className="mx-2 mt-1" />{" "}
            <a href="tel:+234-810-002-6694">+234 810 002 6694</a>
          </div>
          <div className="flex m-4 text-gray-500 hover:text-green-500">
            <FaEnvelope className="mx-2 mt-1" /> <a href="mailto:mbameliasnwalem@gmail.com">mbameliasnwalem@gmail.com</a> 
          </div>
          <div className="flex m-4 text-gray-500 hover:text-green-500">
            <FaMapMarkerAlt className="mx-2 mt-1" /> <a  href="http://maps.google.com/?q=elymay centre Mile 50 Abakaliki" target="_blank" rel="noreferrer">ELYMAY Centre Mile 50</a> 
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
}
