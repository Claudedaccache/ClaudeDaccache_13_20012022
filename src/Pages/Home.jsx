import React from "react";
import Layout from "../Containers/Layout/Layout";
import CoverImg from "../Components/CoverImg/CoverImg";
import CardsContainer from "../Containers/CardsContainer(home)/CardsContainer";

function Home(props) {
  return (
    <div>
      <Layout>
        <CoverImg />
        <CardsContainer />
      </Layout>
    </div>
  );
}

export default Home;
