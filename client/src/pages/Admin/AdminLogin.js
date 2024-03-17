import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";

function AdminLogin() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const login = async () => {
    try {
      dispatch(ShowLoading);
      const response = await axios.post("/api/portfolio/admin-login", user);
      
      dispatch(HideLoading);
      response.data.password = "Password Protected"


      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading);
    }
  };
  return (
    <div className="bg-primary flex items-center justify-center h-[100vh]">
      <div className="flex gap-5 p-5 shadow border border-grap-500 flex-col">
        <h1 className="text-2xl text-secondary">Login</h1>

        {/* <form action="" className="flex flex-col"> */}
        {/* <fieldset className=""> */}
        {/* <label className="text-white" htmlFor="username">Username</label> */}
        <input
          name="username"
          value={user.username}
          type="text"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
          className="px-2 py1"
        ></input>
        {/* </fieldset> */}
        {/* <fieldset> */}
        {/* <label className="text-white" htmlFor="password">Password</label> */}

        <input
          name="password"
          value={user.password}
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          className="px-2 py1"
        ></input>
        {/* </fieldset> */}
        <button
          className="bg-secondary text white p-2 rounded-lg"
          onClick={login}
        >
          Login
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default AdminLogin;
