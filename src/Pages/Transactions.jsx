import React from "react";
import PropTypes from "prop-types";
import Layout from "../Containers/Layout/Layout";
import TransactionBalance from "../Components/TransactionBalance/TransactionBalance";
import TransactionContainer from "../Containers/TransactionContainer/TransactionContainer";

function Transactions(props) {
  return (
    <div>
      <Layout>
        <div className="MainBgContainer">
          <TransactionBalance
            accountTitle="Argent Bank Credit Card (x8349)"
            accountAmount="184.30"
            accountAmountDescription="Current Balance"
          />
          <TransactionContainer />
        </div>
      </Layout>
    </div>
  );
}

Transactions.propTypes = {};

export default Transactions;
