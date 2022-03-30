import React, { useRef } from "react";
import naijaXbyState from "naija-xbystate";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  fullName: yup.string().required("FullName is required*"),
  email: yup.string().email().required("Email Address is required*"),
  number: yup.string().required("Number is required*"),
  gender: yup.string().required("Gender is required*"),
  lga: yup.string().required("LGA is required*"),
  secfullName: yup.string().required("Sectary fullName is required*"),
  secemail: yup.string().required("Sectary Email Address is required*"),
  secnumber: yup.string().required("Sectary Number is required*"),
  groupName: yup.string().required("Group name is required*"),
  location: yup.string().required("Location is required*"),
  members: yup.string().required("Members is required*"),
});
export default function CampaignForm() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // submisiion
  const onSubmit = (data) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vk16ywj",
        "template_3utxs2l",
        form.current,
        "user_sGMmbwEi4RHCf1RNCLeP9"
      )
      .then(
        (result) => {
          // console.log(result.text);
          if (result.status === 200) {
            toast.success(
              "Thank you for reaching out, we will get back to you soon",
              {
                position: "top-center",
                autoClose: 9000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        },
        (error) => {
          // console.log(error.text);
          toast.error("Please try to fill the form and submit again", {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    reset();
  };
  const lgas = naijaXbyState.lgas("ebonyi");
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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
                {...register("fullName")}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.fullName?.message}
              </p>
              <label className="text-gray-500 m-2">Email Address</label>

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.email?.message}
              </p>
              <label className="text-gray-500 m-2">Phone Number</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="number"
                {...register("number")}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.number?.message}
              </p>
              <label className="text-gray-500 m-2">Gender</label>

              <select
                name="gender"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                {...register("gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="text-sm mb-2 text-red-500">
                {errors.gender?.message}
              </p>

              <label className="text-gray-500 m-2">Sectary FullName</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="secfullName"
                {...register("secfullName")}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.secfullName?.message}
              </p>
              <label className="text-gray-500 m-2">
                {" "}
                Sectary Email Address
              </label>

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="secemail"
                {...register("secemail", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.secemail?.message}
              </p>
              <label className="text-gray-500 m-2">Sectary Phone Number</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="secnumber"
                {...register("secnumber")}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.secnumber?.message}
              </p>
              <label className="text-gray-500 m-2">Group Name</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="groupName"
                {...register("groupName")}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.groupName?.message}
              </p>

              <label className="text-gray-500 m-2">Location</label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="location"
                {...register("location")}
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.location?.message}
              </p>

              <label className="text-gray-500 m-2">Local Goverment Area</label>

              <select
                name="lga"
                type="select"
                className="block border bg-white text-gray-400 border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                {...register("lga")}
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
                {...register("members")}
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
              <p className="text-sm mb-2 text-red-500">
                {errors.members?.message}
              </p>
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
