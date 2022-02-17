import React from "react";
import styles from "../Header/Header.module.css";
import BankLogo from "../../img/argentBankLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthToken } from "../../Redux/AuthToken/AuthActions";
import { userIsLoggedOut } from "../../Redux/isLoggedIn/isAuthActions";

const Header = (props) => {
  const isLogged = useSelector(
    (state) => state.signInAuthentication.isLoggedIn
  );

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userNameModification);

  const handleSignOut = () => {
    dispatch(removeAuthToken());
    dispatch(userIsLoggedOut());
  };

  return (
    <div>
      <nav className={styles.mainNav}>
        <div className={styles.mainNavLogo}>
          <Link to="/">
            <img
              className={styles.mainNavLogImage}
              src={BankLogo}
              alt="Argent Bank Logo"
            />
          </Link>

          <h1 className={styles.srOnly}>Argent Bank</h1>
        </div>
        <div>
          {!isLogged ? (
            <>
              <NavLink className={styles.mainNavItem} to="/user/signIn">
                <i className={`fa fa-user-circle ${styles.userLogo}`}></i>
                Sign In
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className={styles.mainNavItem} to="/user/Profile">
                <i className="fa fa-user-circle mx-2"></i>
                {user.firstName}
              </NavLink>
              <a className={styles.mainNavItem} onClick={handleSignOut}>
                <i className="fa fa-sign-out mx-2"></i>
                Sign Out
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
