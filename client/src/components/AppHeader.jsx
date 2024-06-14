import React from "react";
import { useUser } from "../components/UseContext"

function AppHeader() {
  const { username, avatar } = useUser();



  return (
    <header>
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ, {username}!</h2>
      <img src={avatar} alt="User Avatar" />
    </div>
    </header>
  );
}

export default AppHeader;
