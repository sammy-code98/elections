export default function Register() {
  return (
    <div className="container mx-auto mt-24">
      <div className="flex flex-row justify-around">
        <div>
          <p className="text-center text-lg font-light">Register to</p>
          <p className="text-center text-3xl">Become a student Ambassador</p>
          <div className="flex justify-center m-4">
            <button className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer">
              Register Now
            </button>
          </div>
        </div>
        <div>
          <p className="text-center text-lg font-light">Want to</p>
          <p className="text-center text-3xl">Become a student Ambassador?</p>
          <div className="flex justify-center m-4">
            <button className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer">
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
