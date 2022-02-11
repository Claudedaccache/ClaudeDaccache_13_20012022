import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Auth from "../../Contexts/Auth";
import { addAuthToken, removeAuthToken } from "../../Redux/AuthToken/AuthActions";
import { userIsLoggedIn } from "../../Redux/isLoggedIn/isAuthActions";
import { SignIn } from "../../Services/AuthApi";
import styles from "../SignInCard/SignInCard.module.css";

const SignInCard = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const AuthToken = useSelector((state) => state.authentificationToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };


  const hasAuthenticated = () => {
    const token = AuthToken;
    const validToken = token ? true : false;

    if (validToken === false) {
      dispatch(removeAuthToken());
    }
    return validToken;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await SignIn(user);
      dispatch(addAuthToken(token));
      setIsAuthenticated(true);
      const isLogged = dispatch(userIsLoggedIn(hasAuthenticated()))
      console.log(isLogged);
    } catch ({ response }) {
      console.log(response);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user/Profile", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="email"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className={styles.signInButton} type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInCard;
