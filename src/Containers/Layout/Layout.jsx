import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PropTypes from "prop-types";

function Layout(props) {
  return (
    <>
      <Header  userName="Tony"/>
      {props.children}
      <Footer Text="Copyright 2022 Argent Bank" />
    </>
  );
}

Layout.propTypes = {};

export default Layout;
