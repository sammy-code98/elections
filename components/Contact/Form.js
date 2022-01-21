import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="bg-gray-lighter shadow-lg h-full rounded-md w-full flex flex-col-1">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8  mt-4 text-black w-full">
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
              className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
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
