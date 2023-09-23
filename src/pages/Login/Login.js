import React from "react";
import Banner from "./Banner";
import Form from "./Form";

const Login = () => {
  return (
    <div className="flex items-center h-screen bg-gradient-to-r from-[#2980B9] via-sky-300 to-white ">
      <div className="container flex items-center gap-5 p-10 bg-white shadow-lg rounded-xl">
        <Banner />
        <Form />
      </div>
    </div>
  );
};

export default Login;
