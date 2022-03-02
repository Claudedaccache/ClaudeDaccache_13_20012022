import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Layout(props) {
  return (
    <>
      <Header/>
      {props.children}
      <Footer Text="Copyright 2022 Argent Bank" />
    </>
  );
}


export default Layout;
