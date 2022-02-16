import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import UserProfile from "./Pages/UserProfile";
import Transactions from "./Pages/UserTransactions";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import ErrorPage from "./Pages/Error";


function App() {

  return (
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
  );
}

export default App;
