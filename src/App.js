import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import UserProfile from "./Pages/UserProfile";
import Transactions from "./Pages/UserTransactions";
import { useState } from "react";
import Auth from "./Contexts/Auth";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import ErrorPage from "./Pages/Error";
import { removeAuthToken } from "./Redux/AuthToken/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { userIsLoggedIn } from "./Redux/isLoggedIn/isAuthActions";

function App() {
  const dispatch = useDispatch();
  const AuthToken = useSelector((state) => state.authentificationToken);

  const hasAuthenticated = () => {
    const token = AuthToken;
    const validToken = token ? true : false;

    if (validToken === false) {
      dispatch(removeAuthToken());
    }
    return validToken;
  };

  // const isLoggedOut = useSelector(state=>state.signInAuthentication)
  // const isLogged = dispatch(userIsLoggedIn(hasAuthenticated()))
  // console.log(isLogged);

  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signIn" element={<SignIn />} />
          <Route
            path="/user/Profile"
            element={
              <AuthenticatedRoute>
                <UserProfile />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/user/Profile/transactions"
            element={
              <AuthenticatedRoute>
                <Transactions />
              </AuthenticatedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
