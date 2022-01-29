import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
  fullName: yup.string().required("FullName is required*"),
  email: yup.string().email().required("Email Address is required*"),
  subject: yup.string().required("Subject is required*"),
  message: yup.string().required("Message is required*"),
});

function Form() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    emailjs.sendForm(
      "service_0tnutqc",
      "template_vcsflf5",
      form.current,
      "user_sGMmbwEi4RHCf1RNCLeP9"
    ).then((result)=>{
      console.log(result.text);
    }, (error)=>{
      console.log(error.text);
    });
    console.log(data);
    reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-50 shadow-lg h-full rounded-md w-full">
          <div className="px-4 md:px-6">
            <div className="bg-gray-50 py-8  mt-4 text-black w-full">
              <input
                {...register("fullName", { required: true, maxlength: 30 })}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="fullName"
                placeholder="Full Name"
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.fullName?.message}
              </p>

              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="email"
                placeholder="Email Address"
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.email?.message}
              </p>

              <input
                {...register("subject", { required: true, maxLength: 50 })}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="subject"
                placeholder="Subject"
              />
              <p className="text-sm mb-2 text-red-500">
                {errors.subject?.message}
              </p>

              <textarea
                {...register("message", { required: true, maxlength: 500 })}
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-green-600"
                name="message"
                placeholder="Message/Comment"
                cols="10"
                rows="4"
                type="textarea"
              ></textarea>
              <p className="text-sm mb-2 text-red-500">
                {errors.message?.message}
              </p>

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
