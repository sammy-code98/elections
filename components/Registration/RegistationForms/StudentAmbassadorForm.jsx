import React from "react";

function StudentAmbassador() {
  return (
    <div>
      <form>
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
              <label className="text-gray-500 m-2">Age</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="age"
              />
              <label className="text-gray-500 m-2">Occupation</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="occupation"
              />
              <label className="text-gray-500 m-2">Institution</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="institution"
              />
              <label className="text-gray-500 m-2">Local Goverment Area</label>

              <select
                name="lga"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
              >
                <option value="Abakaliki">Abakaliki</option>
                <option value="Afikpo North">Afikpo North</option>
                <option value="Afikpo South">Afikpo South</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Ezza North">Ezza North</option>
                <option value="Ezza South">Ezza South</option>
                <option value="Ikwo">Ikwo</option>
                <option value="Ishielu">Ishielu</option>
                <option value="Ivo">Ivo</option>
                <option value="Izzi">Izzi</option>
                <option value="Ohaozara">Ohaozara</option>
                <option value="Ohaukwu">Ohaukwu</option>
                <option value="Onicha">Ohaozara</option>


              </select>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 focus:outline-none my-1"
              >
                Register
              </button>
              <span className="text-center text-gray-400 text-base mt-4 ">
                By clicking Register, I agree to our terms
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentAmbassador;
