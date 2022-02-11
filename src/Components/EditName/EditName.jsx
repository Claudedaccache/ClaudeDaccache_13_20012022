import React, { useState } from "react";
import styles from "../EditName/EditName.module.css";
import Greeting from "../Greeting/Greeting";
import {
  editFamilyName,
  editFirstName,
} from "../../Redux/UserNameModification/Actions";
import { useDispatch, useSelector } from "react-redux";

function EditName(props) {
  const [isEdited, setIsEdited] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userNameModification);

  const [UserName, setUserName] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  });
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editFirstName(UserName.firstName));
    dispatch(editFamilyName(UserName.lastName));
    console.log(user);
    setIsEdited(false);
  };

  // const handleChange = ({ currentTarget }) => {
  //   const { name, value } = currentTarget;
  // setUserName({ ...UserName,
  //    [name]: value
  //   });

  // };

  if (isEdited === true) {
    return (
      <>
        <div className="d-flex flex-row justify-content-center">
          <div className="mx-2">
            <form>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  name="firstName"
                  className={`${styles.inputText}`}
                  placeholder={UserName.firstName}
                  onChange={(e) =>
                    setUserName({ ...user, firstName: e.target.value })
                  }
                />
                <div className={styles.left}>
                  {" "}
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
            <form>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  name="lastName"
                  className={`${styles.inputText}`}
                  placeholder={UserName.lastName}
                  onChange={(e) =>
                    setUserName({ ...user, lastName: e.target.value })
                  }
                />
                <div className={styles.right}>
                  {" "}
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
