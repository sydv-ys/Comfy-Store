import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h4 className="font-bold text-4xl">there was an error...</h4>
      <p>{error.status && `Status: ${error.status}`}</p>
      <p>{error.statusText && `Status Text: ${error.statusText}`}</p>
      <p>{error.message && `Message: ${error.message}`}</p>
      <pre>{error.stack || JSON.stringify(error, null, 2)}</pre>
    </>
  );
}

export default ErrorElement;
