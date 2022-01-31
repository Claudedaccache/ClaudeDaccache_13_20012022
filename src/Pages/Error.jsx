import React from "react";
import Error from "../Components/Error/Error";
import Header from "../Components/Header/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="MainBgContainer">
        <Error />
      </div>
    </div>
  );
};

export default ErrorPage;
