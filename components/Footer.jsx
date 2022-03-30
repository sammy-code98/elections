import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="grid  grid-cols-1 md:grid-cols-2 md:px-24 md:h-12 mt-12  pb-6 h-full w-full ">
      <div className="text-gray-400 text-center mt-4 p-2">
        @ {new Date().getFullYear()} All Rights Reserved
      </div>
      <div className="flex justify-center space-x-14  mt-4">
        <Link href="https://www.facebook.com/Mbamelias2023" passHref>
          <a target="_blank">
            <FaFacebook
              className="cursor-pointer  text-gray-500  hover:text-sky-500"
              style={{ fontSize: "1.5em" }}
            />
          </a>
        </Link>

        <Link href="https://twitter.com/MElias2023?s=09" passHref>
          <a target="_blank">
            {" "}
            <FaTwitter
              className="cursor-pointer text-gray-500  hover:text-cyan-400"
              style={{ fontSize: "1.5em" }}
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/mbamelias2023/" passHref>
          <a target="_blank">
            {" "}
            <FaInstagram
              className="cursor-pointer text-gray-500  hover:text-rose-700"
              style={{ fontSize: "1.5em" }}
            />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
