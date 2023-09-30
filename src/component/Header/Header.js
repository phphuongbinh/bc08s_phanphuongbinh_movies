import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";

const Header = () => {
  let { info } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    userLocalStorage.remove();
    window.location.reload();
  };
  let renderUserNav = () => {
    let classBtn = "border-2 border-black rounded-xl px-7 py-3";
    if (info) {
      return (
        <>
          <span>{info.hoTen}</span>
          <button onClick={handleLogOut} className={classBtn}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={handleLogin} className={classBtn}>
            Đăng nhập
          </button>
          <button className={classBtn}>Đăng ký</button>
        </>
      );
    }
  };
  return (
    <div className="flex items-center h-20 shadow-lg ">
      <div className="container flex items-center justify-between">
        <NavLink to={"/"}>
          <span className="text-3xl font-semibold text-red-500 animate-pulse">
            CyberFlix
          </span>
        </NavLink>
        <div className="space-x-5">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
