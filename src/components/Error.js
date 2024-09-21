import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error">
      <h1>OOPS! There has been an error</h1>
      <h2>Try Again! I know You can do it</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};

export default Error;
