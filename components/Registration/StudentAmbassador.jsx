import React from 'react';

function StudentAmbassador() {
  return <div>
       <form>
        <div className="bg-gray-lighter shadow-lg h-full rounded-md w-full flex flex-col-1">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8  mt-2 text-black w-full">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullName"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="number"
                placeholder="Phone Number"
              />
              <select
                name="gender"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="age"
                placeholder="Age"
              />
              <select
                name="occupation"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4"
              >
                <option value="civil servant">Civil Servant</option>
                <option value="private sector">Private Sector</option>
                <option value="umeployed">Umeployed</option>
                <option value="self employed">Self employed</option>
                <option value="business">Business</option>
                <option value="others">Others</option>

              </select>
              <select
                name="state"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4"
              >
                <option value="civil servant">Civil Servant</option>
                <option value="private sector">Private Sector</option>
                <option value="umeployed">Umeployed</option>
                <option value="self employed">Self employed</option>
                <option value="business">Business</option>
                <option value="others">Others</option>

              </select>
              <select
                name="lga"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4"
              >
                <option value="civil servant">Civil Servant</option>
                <option value="private sector">Private Sector</option>
                <option value="umeployed">Umeployed</option>
                <option value="self employed">Self employed</option>
                <option value="business">Business</option>
                <option value="others">Others</option>

              </select>
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Register
              </button>
              <span className="text-center text-gray-400 text-base mt-4 ">By clicking Register, I agree to our terms</span>

            </div>

          </div>
        </div>
      </form>
  </div>;
}

export default StudentAmbassador;
