import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="bg-gray-lighter shadow-lg h-full rounded-md w-full">
          <div className="px-4 md:px-6">
            <div className="bg-white py-8  mt-4 text-black w-full">
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
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="message"
                placeholder="Message/Comment"
                cols="10"
                rows="4"
                type="textarea"
              ></textarea>
                <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 focus:outline-none my-1"
            >
              Submit
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
