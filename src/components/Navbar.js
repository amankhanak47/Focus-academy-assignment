import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.setItem("logged-in", "failure");
    navigate("/");
  };
  return (
    <div className="navbar">
      <img src="https://www.focusacademy.in/images/face_logo.svg" alt="" />

      {localStorage.getItem("logged-in") === "sucess" && (
        <button onClick={handlelogout} className="logoutbtn">
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
