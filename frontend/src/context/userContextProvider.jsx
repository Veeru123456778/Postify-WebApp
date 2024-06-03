import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const logo_url =
    "https://res.cloudinary.com/dbghqv6ep/image/upload/v1717357720/logo_hpfbyj.jpg";

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser, logo_url }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
