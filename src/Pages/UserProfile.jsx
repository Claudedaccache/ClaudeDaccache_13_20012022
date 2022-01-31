import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Containers/Layout/Layout";
import Greeting from "../Components/Greeting/Greeting";
import BalanceCardsContainer from "../Containers/BalanceCardsContainer/BalanceCardsContainer";
import { EditContext } from "../Contexts/EditContext";
import EditName from "../Components/EditName/EditName";

function UserProfile(props) {
  const [showProfile, setShowProfile] = useState(false);
  const [UserName, setUserName] = useState("Tony");
  const [UserFamilyName, setUserFamilyName] = useState("Jarvis");

  return (
    <div>
      <Layout>
        <div className="MainBgContainer">
          <div className="header">
            <h1>Welcome back</h1>
            <EditContext.Provider
              value={{
                UserName,
                UserFamilyName,
                setShowProfile,
                setUserName,
                setUserFamilyName,
              }}
            >
              {showProfile ? (
                <EditName/>
              ) : (
                <Greeting name={UserName} familyName={UserFamilyName} />
              )}
            </EditContext.Provider>
          </div>

          <BalanceCardsContainer />
        </div>
      </Layout>
    </div>
  );
}

UserProfile.propTypes = {};

export default UserProfile;
