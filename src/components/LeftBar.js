import React from "react";
import User from "./User";
import ListFriends from "./ListFriends";
import Footer from "./Footer";
import './LeftBar.css';

 function LeftBar() {
  return (
    
      <div className="left-navbar">
        <User />
        <ListFriends />
        <Footer />
      </div>
    
  );
}

export default LeftBar;