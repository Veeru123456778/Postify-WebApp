import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Logo = () => {
  const { logo_url } = useContext(UserContext);
  return (
    <div className="flex items-center gap-2">
      <img src={logo_url} alt="logo" className="w-10 h-10 rounded-full" />
      <h1 className="text-4xl font-bold text-white">Postify</h1>
    </div>
  );
};

export default Logo;
