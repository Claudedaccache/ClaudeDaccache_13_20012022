import React from "react";
import BalanceCards from "../../Components/BalanceCards/BalanceCards";
import PropTypes from "prop-types";

function BalanceCardsContainer(props) {
  return (
    <div>
      <BalanceCards
        accountTitle="Argent Bank Checking (x8349)"
        accountAmount="2,082.79"
        accountAmountDescription="Available Balance"
      />
      <BalanceCards
        accountTitle="Argent Bank Credit Card (x8349)"
        accountAmount="10,928.42"
        accountAmountDescription="Available Balance"
      />
         <BalanceCards
        accountTitle="Argent Bank Credit Card (x8349)"
        accountAmount="184.30"
        accountAmountDescription="Current Balance"
      />
    </div>
  );
}

BalanceCardsContainer.propTypes = {};

export default BalanceCardsContainer;
