import React from "react";
import styles from "../Footer/Footer.module.css"

const Footer = (props) => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footerText}>{props.Text}</p>
      </footer>
    </>
  );
};

export default Footer;
