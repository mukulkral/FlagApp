import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Link to="/">
        <button className="px-10 py-4 rounded-sm absolute top-10 left-10 bg-slate-600">HOME</button>
      </Link>
      <div className="h-screen flex flex-col justify-center items-center text-[50px] ">
        <h1>{error && error.status}</h1>
        <h1>Page not found</h1>
      </div>
    </>
  );
};

export default ErrorPage;
