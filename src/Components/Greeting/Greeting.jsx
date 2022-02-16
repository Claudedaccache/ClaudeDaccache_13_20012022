import React, { useState } from "react";
import styles from "../Greeting/Greeting.module.css";
import EditName from "../EditName/EditName";
import { useSelector } from "react-redux";

function Greeting(props) {
  const user = useSelector((state) => state.userNameModification);
  const [isEdited, setIsEdited] = useState(false);
  if (isEdited === false) {
    return (
      <>
        <div className="GreetingHeader">
          <h1 className={styles.FullName}>
            {user.firstName} {user.lastName}!
          </h1>
          <button
            className={styles.editButton}
            onClick={() => {
              setIsEdited(true);
            }}
          >
            Edit Name
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <EditName
        firstName={user.firstName} lastName={user.lastName}
        />
      </>
    );
  }
}

export default Greeting;
