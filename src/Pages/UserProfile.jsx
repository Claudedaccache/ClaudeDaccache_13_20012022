import React, { useContext, useEffect, useState } from "react";
import Layout from "../Containers/Layout/Layout";
import Greeting from "../Components/Greeting/Greeting";
import BalanceCardsContainer from "../Containers/BalanceCardsContainer/BalanceCardsContainer";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../Contexts/Auth";
import { userProfile } from "../Services/AuthApi";
import { editFamilyName, editFirstName } from "../Redux/UserNameModification/Actions";


function UserProfile(props) {

  const { isAuthenticated } = useContext(Auth);
  const AuthToken = useSelector((state) => state.authentificationToken);
  const user = useSelector((state) => state.userNameModification);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      if (isAuthenticated) {
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
  }, [isAuthenticated]);






  if (!isLoading) {
  return (
    <div>
      <Layout >
        <div className="MainBgContainer">
          <div className="header">
            <h1>Welcome back</h1>
                   <Greeting
                    // firstName={user.firstName} lastName={user.lastName}
              />
          </div>

          <BalanceCardsContainer />
        </div>
      </Layout>
    </div>
  )}else{
    return(
      <div className="loadingMessage">Loading...</div>
    )
  }
}

export default UserProfile;
