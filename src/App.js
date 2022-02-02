import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import UserProfile from "./Pages/UserProfile";
import Transactions from "./Pages/UserTransactions";
import { useState } from "react";
import { hasAuthenticated } from "./Services/AuthApi";
import Auth from "./Contexts/Auth";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import Error from "./Components/Error/Error";
import ErrorPage from "./Pages/Error";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signIn" element={<SignIn />} />
          <Route
            path="/user/:id"
            element={
              <AuthenticatedRoute>
                <UserProfile />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/user/:id/transactions"
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
