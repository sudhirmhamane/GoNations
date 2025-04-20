import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>oops! An error occured.</h1>
      {error && <p> {error.data} </p>}
      <NavLink>
      <button className="bg-blue-600 hover:bg-blue-700 transition-all py-3 text-lg text-white font-semibold rounded-lg shadow-md p-5 m-5" to = {'/'}>Go To Home</button>
      </NavLink>
    </>
  );
};

export default ErrorPage;
