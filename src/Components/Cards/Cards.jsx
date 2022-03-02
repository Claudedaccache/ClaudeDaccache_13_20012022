import React from "react";
import styles from "../Cards/Cards.module.css"


function Cards(props) {
  return (
    <>
      <div className={styles.featureItem}>
        <img src={props.icon} alt="Chat Icon" className={styles.featureIcon} />
        <h3 className={styles.featureItemTitle}>{props.title}</h3>
        <p className={styles.featureItemText}>
         {props.text}
        </p>
      </div>
    </>
  );
}

export default Cards;
