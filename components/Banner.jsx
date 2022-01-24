/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <div className="relative flex flex-row items-center w-full" style={{
      maxHeight: "900px",
    }}>

      <img src="https://ban2023.org/images/banner.jpg" alt="banner"  className="w-full h-full"/>

      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 "></div>

      <div
        className="mt-4 absolute top-0 h-full w-full"
      >
        <div className="text-4xl sm:text-5xl md:text-6xl mt-24 text-left md:mt-72 xl:mt-72 p-3 text-white ">
          <div>Bello</div>
          <div>Ambassadors</div>
          <div>Network</div>
        </div>
      </div>

    </div>
  );
}
