import React from "react";
import styles from "../TransactionBalance/TransactionBalance.module.css"

function TransactionBalance(props) {
  return (
    <div>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>{props.accountTitle}</h3>
          <p className={styles.accountAmount}>${props.accountAmount}</p>
          <p className={styles.accountAmountDescription}>
            {props.accountAmountDescription}
          </p>
        </div>
      </section>
    </div>
  );
}

export default TransactionBalance;
