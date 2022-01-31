import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "../EditName/EditName.module.css";
import { EditContext } from "../../Contexts/EditContext";

function EditName(props) {
  const {
    UserName,
    UserFamilyName,
    setShowProfile,
    setUserName,
    setUserFamilyName,
  } = useContext(EditContext);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <div className="mx-2">
          <form onSubmit={handleClick}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                className={`${styles.inputText}`}
                placeholder={UserName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <div className={styles.left}>
                {" "}
                <button
                  type="button"
                  className={`formButton ${styles.saveFormButton}`}
                  onClick={() => {
                    setShowProfile(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mx-2">
          <form onSubmit={handleClick}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="familyName"
                className={`${styles.inputText}`}
                placeholder={UserFamilyName}
                onChange={(e) => {
                  setUserFamilyName(e.target.value);
                }}
              />
              <div className={styles.right}>
                {" "}
                <button
                  type="button"
                  className={`formButton ${styles.cancelFormButton} `}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

EditName.propTypes = {};

export default EditName;
