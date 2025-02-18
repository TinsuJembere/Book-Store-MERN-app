import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center">
      <div className="flex flex-col shadow-xl rounded-lg px-3 py-6">
        <h3 className="text-2xl font-medium">Please Register</h3>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="font-medium mb-2 mt-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email", { required: true })}
            placeholder="Email Address"
            className="shadow focus:outline-none px-6 py-1 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Email is required</p>
          )}

          <label htmlFor="password" className="font-medium mb-2 mt-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="shadow focus:outline-none px-6 py-1 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">Password is required</p>
          )}

          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

          <button className="text-white rounded-md bg-blue-700 w-fit px-6 py-1 mt-3 mb-3">
            Register
          </button>
        </form>

        <p className="mb-3">
          Do you have an account?{" "}
          <Link to={"/login"} className="text-blue-700">
            Login
          </Link>
        </p>
        <button className="flex items-center justify-center gap-2 py-1 bg-black rounded-md text-white">
          <FaGoogle className="size-4" /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
