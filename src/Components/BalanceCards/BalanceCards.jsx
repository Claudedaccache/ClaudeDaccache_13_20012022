import React from 'react';
import styles from "../BalanceCards/BalanceCards.module.css"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BalanceCards(props) {
  return <>
         <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>{props.accountTitle}</h3>
          <p className={styles.accountAmount}>${props.accountAmount}</p>
          <p className={styles.accountAmountDescription}>{props.accountAmountDescription}</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <Link to="/user/Profile/transactions" className={styles.transactionButton}>View transactions</Link>
        </div>
      </section>
  </>;
}

BalanceCards.propTypes = {};

export default BalanceCards;
