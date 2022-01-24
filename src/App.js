import "./App.css";

import Layout from "./Containers/Layout/Layout";

import CoverImg from "./Components/CoverImg/CoverImg";
import CardsContainer from "./Containers/CardsContainer(home)/CardsContainer";
import SignInCard from "./Components/SignInCard/SignInCard";
import Greeting from "./Components/Greeting/Greeting";
import BalanceCardsContainer from "./Containers/BalanceCardsContainer/BalanceCardsContainer";
import { Routes, Route, Link } from "react-router-dom";
import EditName from "./Components/EditName/EditName";
import TransactionBalance from "./Components/TransactionBalance/TransactionBalance";
import TransactionAccordion from "./Components/TransactionAccordion/TransactionAccordion";

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
      <Layout>
        {/* <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/edit/:id" element={<NameModification />} />
          <Route path="/user/:id/transactions" element={<UserProfile />} /> */}

        <div className="MainBgContainer">
          <TransactionBalance
            accountTitle="Argent Bank Credit Card (x8349)"
            accountAmount="184.30"
            accountAmountDescription="Current Balance"
          />
          <TransactionAccordion
            Balance="Balance"
            Amount="Amount"
            Description="Description"
            Date="Date"
            KeyId={"Equipment"}
            itemId={"collapseTwo"}
            itemDataId={"#collapseTwo"}
                     />
          {/* <CoverImg />
            <CardsContainer /> */}
          {/* <SignInCard /> */}
          {/* <Greeting name="Tony Jarvis"/>*/}
          {/* <EditName name="Tony" buttonText="save"/> */}

          {/* <BalanceCardsContainer /> */}
        </div>
      </Layout>
      {/* </Routes> */}
    </div>
  );
}

export default App;
