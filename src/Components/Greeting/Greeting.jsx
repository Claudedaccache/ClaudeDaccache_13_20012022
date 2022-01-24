import React from "react";
import styles from "../Greeting/Greeting.module.css";
import PropTypes from "prop-types";

function Greeting(props) {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {props.name}!
        </h1>
        <button className={styles.editButton}>Edit Name</button>
      </div>
    </>
  );
}

Greeting.propTypes = {};

export default Greeting;
