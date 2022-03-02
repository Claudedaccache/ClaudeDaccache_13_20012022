import React, { useState } from "react";
import styles from "../EditName/EditName.module.css";
import Greeting from "../Greeting/Greeting";
import {
  editFamilyName,
  editFirstName,
} from "../../Redux/UserNameModification/Actions";
import { useDispatch, useSelector } from "react-redux";
import { EditUserInfo } from "../../Services/AuthApi";

function EditName(props) {
  const [isEdited, setIsEdited] = useState(true);
  const AuthToken = useSelector((state) => state.authentificationToken.token);

  const dispatch = useDispatch();

  const [UserName, setUserName] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  });
  const handleSave = (e) => {
    e.preventDefault();
    EditUserInfo(AuthToken, UserName).then((user) => {
      dispatch(editFirstName(user.firstName));
      dispatch(editFamilyName(user.lastName));
    });

    setIsEdited(false);
  };

  if (isEdited === true) {
    return (
      <>
        <div className="d-flex flex-row justify-content-center">
          <div className="mx-2">
            <form onSubmit={handleSave}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  name="firstName"
                  className={`${styles.inputText}`}
                  value={UserName.firstName}
                  onChange={(e) =>
                    setUserName({ ...UserName, firstName: e.target.value })
                  }
                />
                <div className={styles.left}>
                  <button
                    type="submit"
                    className={`formButton ${styles.saveFormButton}`}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mx-2">
            <form onSubmit={handleSave}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  name="lastName"
                  className={`${styles.inputText}`}
                  value={UserName.lastName}
                  onChange={(e) =>
                    setUserName({ ...UserName, lastName: e.target.value })
                  }
                />
                <div className={styles.right}>
                  <button
                    type="button"
                    className={`formButton ${styles.cancelFormButton} `}
                    onClick={() => {
                      setIsEdited(false);
                    }}
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
  } else {
    return <Greeting />;
  }
}

EditName.propTypes = {};

export default EditName;
