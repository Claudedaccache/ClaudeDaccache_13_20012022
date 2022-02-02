import React, { useState } from "react";
import Layout from "../Containers/Layout/Layout";
import Greeting from "../Components/Greeting/Greeting";
import BalanceCardsContainer from "../Containers/BalanceCardsContainer/BalanceCardsContainer";
import { EditContext } from "../Contexts/EditContext";
import EditName from "../Components/EditName/EditName";
import { useDispatch, useSelector } from "react-redux";

function UserProfile(props) {
  const [showProfile, setShowProfile] = useState(false);
  const [UserName, setUserName] = useState("Tony");
  const [UserFamilyName, setUserFamilyName] = useState("Jarvis");

 
  // const userFirstName = useSelector(state => state.testing)
  // console.log(userFirstName);



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


export default UserProfile;
