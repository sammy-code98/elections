export default function Banner() {
  return (
    <div className="flex flex-row items-center w-full">
      <div
      className="brightness-50 mt-4"
        style={{
          backgroundImage: `url(https://ban2023.org/images/banner.jpg)`,
          height: "700px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-6xl mx-6  text-left mt-56 p-3 uppercase ">
          <div>Bello</div>
          <div>Ambassadors</div>
          <div>Network</div>
        </div>
      </div>
    </div>
  );
}
