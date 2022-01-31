import React, { useContext, useState } from "react";
import styles from "../Greeting/Greeting.module.css";
import PropTypes from "prop-types";
import { EditContext } from "../../Contexts/EditContext";

function Greeting(props) {
  const {setShowProfile,UserName,
    UserFamilyName} = useContext(EditContext);

 
 

  return (
    <div className="GreetingHeader">
      <h1 className={styles.FullName}>
        {UserName} {UserFamilyName}!
      </h1>
      {/* <Link to="/edit/:id " className={styles.editButton}>Edit Name</Link> */}

      <button className={styles.editButton} onClick={()=> {setShowProfile(true)}}>Edit Name</button>

      
    </div>
  );
}

Greeting.propTypes = {};

export default Greeting;
