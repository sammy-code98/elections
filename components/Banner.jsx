/* eslint-disable @next/next/no-img-element */
import Snowfall from "react-snowfall";

export default function Banner() {
  return (
    <div
      className="relative flex flex-row items-center w-full"
      style={{
        maxHeight: "1000px",
      }}
    >
      <Snowfall snowflakeCount={200} />

      <img
        loading="lazy"
        src="/men.jpg"
        alt="banner"
        className="w-full h-full mt-20 xl:mt-0 md:mt-0"
      />

      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 "></div>

      <div className="mt-4 absolute top-0 h-full w-full">
        <div className="text-5xl sm:text-5xl md:text-7xl mt-24 text-left md:mt-72 xl:mt-72 p-3 text-white ">
          <div>Mbam</div>
          <div>Support</div>
          <div>Group</div>
        </div>
      </div>
    </div>
  );
}
