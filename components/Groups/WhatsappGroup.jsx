import React, { useEffect } from "react";
import { location } from "./state-data";
export default function WhatsappGroup() {
  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div className="container mx-auto mt-24">
      <div className="text-center text-3xl">Join our Whatsapp Group</div>
      <div className="text-center  mt-2 text-base">
        Click on your state to join the whatsapp group to keep in touch with
        fellow Ambassadors in your state
      </div>
      <div className="mt-6 grid grid-cols-6 gap-2 mx-8">
        {location.map((locate) => (
          <button
            className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer"
            key={locate.id}
          >
            {locate.name}
          </button>
        ))}
      </div>
    </div>
  );
}
