import React from "react";
import styles from "../TransactionAccordion/TransactionAccordion.module.css";
import PropTypes from "prop-types";

const TransactionAccordion = (props) => {
  return (
    <>
      <div className={styles.accordion}  key={props.KeyId}>
       
        <div className={styles.accordionItem}>
          <h2
            className={`accordion-header ${styles.accordionHeader}`}
          >
            <button
              className={`accordion-button collapsed ${styles.accordionBtn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={props.itemDataId}
              aria-expanded="false"
            >
              <span>{props.Balance}</span>
              <span>{props.Amount}</span>
              <span>{props.Description}</span>
              <span>{props.Date}</span>
            </button>
          </h2>
          <div
        id={props.itemId}
        className="accordion-collapse collapse"
        data-bs-parent={props.itemDataId}
          >
            <div className={`accordion-body ${styles.accordionBody}`}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              that we use to style each element. These control the overall
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

TransactionAccordion.propTypes = {};

export default TransactionAccordion;
