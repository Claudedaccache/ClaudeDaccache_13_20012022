import React, { useContext, useEffect } from "react";
import styles from "../Header/Header.module.css";
import BankLogo from "../../img/argentBankLogo.png";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../Contexts/Auth";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthToken } from "../../Redux/AuthToken/AuthActions";
import { editFirstName } from "../../Redux/UserNameModification/Actions";
import { userProfile } from "../../Services/AuthApi";
import { userIsLoggedOut } from "../../Redux/isLoggedIn/isAuthActions";

const Header = (props) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const dispatch = useDispatch();
  const AuthToken = useSelector((state) => state.authentificationToken);
  const user = useSelector((state) => state.userNameModification);

  useEffect(() => {
    const getUserName = async () => {
      if (isAuthenticated) {
        try {
          const userInfo = await userProfile(AuthToken.token);
          dispatch(editFirstName(userInfo.firstName));
        } catch ({ response }) {
          console.log(response);
        }
      }
    };
    getUserName();
  }, [isAuthenticated]);

  const handleSignOut = () => {
    dispatch(removeAuthToken());
    setIsAuthenticated(false);
    const signOut = dispatch(userIsLoggedOut());
    console.log(signOut);
  };

  return (
    <div>
      <nav className={styles.mainNav}>
        <div className={styles.mainNavLogo}>
          <img
            className={styles.mainNavLogImage}
            src={BankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.srOnly}>Argent Bank</h1>
        </div>
        <div>
          {!isAuthenticated ? (
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
