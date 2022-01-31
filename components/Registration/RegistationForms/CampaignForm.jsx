import React from "react";
import naijaXbyState from "naija-xbystate";

export default function CampaignForm() {
  const lgas = naijaXbyState.lgas("ebonyi");
  return (
    <div>
      <form>
        <div className="text-center text-xl text-gray-500 font-bold">
          Register your Campain Group
        </div>

        <div className="bg-gray-lighter shadow-lg h-full rounded-md w-full flex flex-col-1">
          <div className="px-2">
            <div className="bg-white px-6 py-8  mt-2 text-black w-full">
              <label className="text-gray-500 m-2">Full Name</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="fullName"
              />
              <label className="text-gray-500 m-2">Email Address</label>

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="email"
              />
              <label className="text-gray-500 m-2">Phone Number</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="number"
              />
              <label className="text-gray-500 m-2">Gender</label>

              <select
                name="gender"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <label className="text-gray-500 m-2">Sectary FullName</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="secfullName"
              />
              <label className="text-gray-500 m-2">
                {" "}
                Sectary Email Address
              </label>

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="secemail"
              />
              <label className="text-gray-500 m-2">Sectary Phone Number</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="secnumber"
              />
              <label className="text-gray-500 m-2">Group Name</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="groupName"
              />

              <label className="text-gray-500 m-2">Location</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="location"
              />

              <label className="text-gray-500 m-2">Local Goverment Area</label>

              <select
                name="lga"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
              >
                {lgas.map((lga, index) => (
                  <option key={index} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
              <label className="text-gray-500 m-2">
                Estimated Number of Members
              </label>

              <select
                name="members"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
              >
                <option value=""></option>
                <option value="first range">1 - 20</option>
                <option value="second range">21 - 50</option>
                <option value="third range">51 - 60</option>
                <option value="fourth range">61 - 70</option>
                <option value="fifth range">71 - 80</option>
                <option value="sixth range">81 - 90</option>
                <option value="seventh range">91 - 100</option>
                <option value="last range">100 - above</option>
              </select>
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 focus:outline-none my-1"
              >
                Register
              </button>
              <span className="text-center text-gray-400 text-base mt-12">
                By clicking Register, I agree to our terms
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
