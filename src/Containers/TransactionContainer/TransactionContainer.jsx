import React from "react";
import styles from "../TransactionContainer/TransactionContainer.module.css";
import TransactionAccordion from "../../Components/TransactionAccordion/TransactionAccordion";

function TransactionContainer(props) {
  return (
    <div>
      <div className={styles.accordion} key={props.KeyId}>
        <div className={styles.accordionHead}>
          <h2>
            <div className={`${styles.accordionHeadContent}`}>
              <span className={styles.accordionHeadText}>
                <span>Balance</span>
                <span>Amount</span>
                <span>Description</span>
                <span>Date</span>
              </span>
              <span className={styles.arrow}>Arrow</span>
            </div>
          </h2>
        </div>
        <TransactionAccordion
          Balance="yyy"
          Amount="ttt"
          Description="gfd"
          Date="uiij"
          KeyId={"fdss"}
          itemId={"collapseTwo"}
          itemDataId={"#collapseTwo"}
        />
        <TransactionAccordion
          Balance="xxff"
          Amount="ff"
          Description="tty"
          Date="ujun"
          KeyId={"rr"}
          itemId={"collapseOne"}
          itemDataId={"#collapseOne"}
        />
          
      </div>
    </div>
  );
}

export default TransactionContainer;
