import React from "react";
import PropTypes from "prop-types";
import styles from "../EditName/EditName.module.css";

function EditName(props) {
  return (
    <>
      <div className={styles.header}>
        <h1>Welcome back</h1>
        <form>
          <div className={styles.inputWrapper}>
            <div>
              <input
                type="text"
                className={styles.inputText}
                placeholder={props.name}
              />
            </div>
            <div className={styles.Button}>
              <button className={`EditFormButton ${styles.EditFormButton}`}>
                {props.buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

EditName.propTypes = {};

export default EditName;
