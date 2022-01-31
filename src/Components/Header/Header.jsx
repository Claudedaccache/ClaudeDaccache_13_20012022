import React, { useContext } from "react";
import styles from "../Header/Header.module.css";
import BankLogo from "../../img/argentBankLogo.png";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../Contexts/Auth";

const Header = (props) => {
  const { isAuthenticated } = useContext(Auth);
  return (
    <div>
      <nav className={styles.mainNav}>
        <Link className={styles.mainNavLogo} to="/">
          <img
            className={styles.mainNavLogImage}
            src={BankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.srOnly}>Argent Bank</h1>
        </Link>
        <div>
          {(!isAuthenticated && (
            <>
              <NavLink className={styles.mainNavItem} to="/user/signIn">
                <i className={`fa fa-user-circle ${styles.userLogo}`}></i>
                Sign In
              </NavLink>
            </>
          )) || (
            <>
              <NavLink className={styles.mainNavItem} to="/user/:id">
                <i className="fa fa-user-circle m-2"></i>
                {props.userName}
              </NavLink>
              <NavLink className={styles.mainNavItem} to="/">
                <i className="fa fa-sign-out m-2"></i>
                Sign Out
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
