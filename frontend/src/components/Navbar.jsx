import  { useContext } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import Logo from "./Logo";
import UserDetails from "./UserDetails";

const Navbar = () => {
  const { token, setToken, user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const loading = useFetchUser(token, setUser);

  const handleLogOut = () => {
    const confirmation = window.confirm("Are you sure you want to log out!!")
    if(confirmation){
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    navigate('/signin');
  }
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 text-white text-center flex justify-between items-center">
        <Logo />
        <UserDetails
          user={user}
          handleLogOut={handleLogOut}
          handleProfile={handleProfile}
        />
      </nav>
    </div>
  );
};

export default Navbar;
