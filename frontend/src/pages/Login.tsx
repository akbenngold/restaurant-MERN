import React from "react";
import github from "../assets/github.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
function Login() {
  return (
    <div>
      <div className="section-container py-24 flex flex-col items-center justify-center text-center gap-6">
        <h2 className="font-bold text-xl">Login</h2>
        <form action="" className="flex flex-col gap-8 ">
          {/* Email  */}
          <label className="input  inputBorder flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          {/* password */}
          <label className="input  inputBorder flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" placeholder="Password" />
          </label>
          <div>
            {" "}
            <a className="btn bg-green text-white px-6 py-4 w-[100%]">Login</a>
          </div>
        </form>{" "}
        <p>
          New here?{" "}
          <a href="" className="font-semibold">
            Create a New Account
          </a>
        </p>
        <p>Or sign in with</p>
        <div className="flex justify-center gap-6">
          <img src={github} alt="" className="h-12 " />
          <img src={facebook} alt="" className="h-12 " />
          <img src={google} alt="" className="h-12 " />
        </div>
      </div>
    </div>
  );
}

export default Login;
