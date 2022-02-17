import React from "react";
import Layout from "../Containers/Layout/Layout";
import SignInCard from "../Components/SignInCard/SignInCard";

function SignIn(props) {
  return (
    <div>
      <Layout>
        <div className="MainBgContainer">
          <SignInCard />
        </div>
      </Layout>
    </div>
  );
}


export default SignIn;
