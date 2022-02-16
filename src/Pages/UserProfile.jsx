import React, { useContext, useEffect, useState } from "react";
import Layout from "../Containers/Layout/Layout";
import Greeting from "../Components/Greeting/Greeting";
import BalanceCardsContainer from "../Containers/BalanceCardsContainer/BalanceCardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../Services/AuthApi";
import {
  editFamilyName,
  editFirstName,
} from "../Redux/UserNameModification/Actions";
import Error from "../Components/Error/Error";

function UserProfile(props) {
  const isLogged = useSelector(state=>state.signInAuthentication.isLoggedIn)

  const AuthToken = useSelector((state) => state.authentificationToken);
  const user = useSelector((state) => state.userNameModification);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      if (isLogged) {
        try {
          const userInfo = await userProfile(AuthToken.token);
          dispatch(editFirstName(userInfo.firstName));
          dispatch(editFamilyName(userInfo.lastName));
          setIsLoading(false);
        } catch ({ response }) {
          console.log(response);
        }
      }
    };
    getUserInfo();
  }, [isLogged]);

  if (user) {
    return (
      <div>
        <Layout>
          <div className="MainBgContainer">
            <div className="header">
              <h1>Welcome back</h1>
              <Greeting />
            </div>
            <BalanceCardsContainer />
          </div>
        </Layout>
      </div>
    );
  } else if (isLoading || !user) {
    return <div className="loadingMessage">Loading...</div>;
  } else {
    return <Error />;
  }
}

export default UserProfile;
