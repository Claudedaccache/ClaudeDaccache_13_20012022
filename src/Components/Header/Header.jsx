import React from 'react';
import styles from "../Header/Header.module.css"
import BankLogo from "../../img/argentBankLogo.png"


const Header = (props) => {
  return <div>
     <nav className={styles.mainNav}>
      <a className={styles.mainNavLogo} href="./index.html">
        <img
          className={styles.mainNavLogImage}
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </a>
      <div>
        <a className={styles.mainNavItem} href="./sign-in.html">
          <i className={`fa fa-user-circle ${styles.userLogo}`}></i>
          {props.navText}
        </a>
      </div>
    </nav>
  </div>;
};

export default Header;
