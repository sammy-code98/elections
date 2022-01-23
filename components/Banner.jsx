/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <div className="relative flex flex-row items-center w-full" style={{
      height: "700px",
    }}>

      <img src="https://ban2023.org/images/banner.jpg" alt="banner"  className="w-full h-full"/>

      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 "></div>

      <div
        className="mt-4 absolute top-0 h-full w-full"
      >
        <div className="text-6xl   text-left mt-56 p-3 text-white ">
          <div>Bello</div>
          <div>Ambassadors</div>
          <div>Network</div>
        </div>
      </div>

    </div>
  );
}
