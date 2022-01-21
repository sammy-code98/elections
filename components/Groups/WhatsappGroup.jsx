import { location } from "./state-data";
export default function WhatsappGroup() {
  return (
    <div className="container mx-8 mt-24 md:mx-auto">
      <div className="text-center text-3xl">Join our Whatsapp Group</div>
      <div className="text-center  text-gray-400 mt-2 text-base">
        Click on your state to join the whatsapp group to keep in touch with
        fellow Ambassadors in your state
      </div>
      <div className="mt-6 grid grid-cols-3  mx-4 px-12 md:grid md:grid-cols-6 gap-4 md:mx-8 md:px-32">
        {location.map((locate) => (
          <button
            className="hover:bg-sky-500  hover:text-white text-green-500 p-2 rounded-md shadow-md  cursor-pointer focus:outline-none"
            key={locate.id}
          >
            {locate.name}
          </button>
        ))}
      </div>
    </div>
  );
}
