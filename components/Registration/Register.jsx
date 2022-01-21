export default function Register() {
  return (
    <div className="container mx-6 mt-24 md:mx-auto">
      <div className="md:grid md:grid-cols-2 justify-items-center px-10">
        <div>
          <p className="text-center text-lg font-light">Register to</p>
          <p className="text-center text-3xl">Become an  Ambassador</p>
          <div className="flex justify-center m-4">
            <button className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer focus:outline-none">
              Register Now
            </button>
          </div>
        </div>
        <div>
          <p className="text-center text-lg font-light">Want to</p>
          <p className="text-center text-3xl">Become a student Ambassador?</p>
          <div className="flex justify-center m-4">
            <button className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer focus:outline-none">
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
