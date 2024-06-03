import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { token, setToken,backend_url } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    profilePicture: null,
  });

  const url = `${backend_url}/api/user/signup`;
  const [errors, setErrors] = useState({
    passwordMatch: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, passwordMatch: false });
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 ">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full mt-5 mb-5 max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
       

        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
          {!errors.passwordMatch && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name (Optional)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Profile Picture (Optional)
          </label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg "
            id="fileInput"
          />
           

        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 rounded-lg hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition duration-300 "
        >
          Sign Up
        </button>

        <div className="flex">
          <input type="checkbox" required />
          <p className="mt-5 ml-3 text-gray-700">
            By Continuing, i agree to the terms of use and privacy policy.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <p className=" text-gray-700">Already have an account?</p>
          <p onClick={handleSignIn} className="cursor-pointer">
            Click here
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
