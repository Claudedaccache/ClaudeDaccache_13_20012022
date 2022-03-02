import React from "react";
import styles from "../TransactionAccordion/TransactionAccordion.module.css";

const TransactionAccordion = (props) => {
  const displayDropdown = (container) => {
    if (container === "CategoryIcon") {
      const CategoryIcon = document.querySelector(".CategoryIcon");
      const categoryValues = document.querySelector(".categoryValues");
      CategoryIcon.style.display = "none";
      console.log(categoryValues);
      categoryValues.style.display = "block";
    }
    if (container === "NoteIcon") {
      const NoteIcon = document.querySelector(".NoteIcon");
      const NoteValue = document.querySelector(".categoryValues");
      NoteIcon.style.display = "none";
      NoteValue.style.display = "block";
    }
  };

  return (
    <>
      <div className={styles.accordionItem}>
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed ${styles.accordionBtn}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={props.itemDataId}
            aria-expanded="false"
          >
            <span className={styles.btnInnerText}>
              <span>{props.Balance}</span>
              <span>{props.Amount}</span>
              <span>{props.Description}</span>
              <span>{props.Date}</span>
            </span>
          </button>
        </h2>
        <div
          id={props.itemId}
          className="accordion-collapse collapse"
          data-bs-parent={props.itemDataId}
        >
          <div className={`accordion-body ${styles.accordionBody}`}>
            <div className="d-flex flex-row justify-content-start align-items-baseline">
              <p>Transaction Type: </p>
              <p className="mx-2">Electronic</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-baseline">
              <p>Category: </p>
              <p className="mx-2">
                Food{" "}
                <i
                  className="fas fa-pen mx-2 CategoryIcon"
                  onClick={() => displayDropdown("CategoryIcon")}
                ></i>
              </p>
              <select
                defaultValue={"DEFAULT"}
                className={styles.categoryValues}
              >
                <option value="DEFAULT" disabled>
                  Choose a salutation ...
                </option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Ms</option>
                <option value="4">Miss</option>
                <option value="5">Dr</option>
              </select>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-baseline">
              <p>Notes: </p>
              <i
                className="fas fa-pen mx-2 NoteIcon"
                onClick={() => displayDropdown("NoteIcon")}
              ></i>
              <input
                type="text"
                className={styles.NoteValue}
                placeholder="write a note here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionAccordion;
