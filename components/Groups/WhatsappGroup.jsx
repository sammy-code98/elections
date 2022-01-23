import { location } from "./state-data";
import Link from "next/link";
export default function WhatsappGroup() {
  return (
    <div className="container">
      <div className="text-center text-3xl">Join our Whatsapp Group</div>
      <div className="text-center  text-gray-400 mt-2 text-base">
        Click on your state to join the whatsapp group to keep in touch with
        fellow Ambassadors in your state
      </div>
      <div className="mt-6 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:mx-8 md:px-32">
        {location.map((locate) => (
          <button
            key={locate.id}
            className="hover:bg-green-600  hover:text-white text-green-600 p-2 rounded-md shadow-md  cursor-pointer focus:outline-none"
          >
            <Link href={`https://chat.whatsapp.com/${locate.link}`} target="_blank">
              {locate.name}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
