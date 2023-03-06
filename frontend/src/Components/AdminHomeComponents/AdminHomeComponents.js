import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./AdminHomeComponents.css";
function AdminHomeComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({
      type: "RemoveToken",
    });
    navigate("/");
  };
  return (
    <div className="home">
      <div className="home_div">
        <h1>Admin Home</h1>
        <div className="options">
          <div>Users</div>
          <div onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeComponent;
