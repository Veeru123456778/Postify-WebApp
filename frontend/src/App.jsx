import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import UserContextProvider from "./context/userContextProvider";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ProfilePage from "./pages/Profile";


const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
