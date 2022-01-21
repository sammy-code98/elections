import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlusG,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="md:grid md:grid-cols-2 md:px-24 md:h-12 bg-white pb-3 h-full w-full ">
      <div className="text-gray-400 text-center mt-4">@ 2022 All Rights Reserved</div>
      <div className="flex justify-between mx-36   mt-4">
        <FaFacebook
          className="cursor-pointer text-gray-500 "
          style={{ fontSize: "1.5em" }}
        />

        <FaTwitter
          className="cursor-pointer text-gray-500 "
          style={{ fontSize: "1.5em" }}
        />
        <FaGooglePlusG
          className="cursor-pointer text-gray-500 "
          style={{ fontSize: "1.5em" }}
        />
        <FaLinkedin
          className="cursor-pointer text-gray-500 "
          style={{ fontSize: "1.5em" }}
        />
      </div>
    </footer>
  );
}

export default Footer;
