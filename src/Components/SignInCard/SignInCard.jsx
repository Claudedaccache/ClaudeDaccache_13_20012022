import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../SignInCard/SignInCard.module.css";

const SignInCard = () => {
  // const users = useSelector((state) => state);
  // console.log(users);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    console.log(`${name} : ${value}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form block");
  };

  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
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
        <Link to="/user/:id" className={styles.signInButton}>
          Sign In
        </Link>
      </form>
    </section>
  );
};

export default SignInCard;
