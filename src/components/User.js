import React from "react";
import "./User.css";

 function User() {
  return (
    <div className="user-cover">
      <img src="https://picsum.photos/200/300" />
      <div className="username">
        <span>
          <strong>Dory_256_15</strong>
        </span>
        <p>Duong Thi Ngoc</p>
      </div>
    </div>
  );
}
export default User;