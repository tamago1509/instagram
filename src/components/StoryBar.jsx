import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import "./StoryBar.css";
function StoryBar() {
  return (
    <div className="bar">
      <div className="avatar">
        <Avatar className="image" size={50}>
          USER
        </Avatar>
        <p>gabeo.c3</p>
      </div>

      <div className="avatar">
        <Avatar className="image" size={50}>
          USER
        </Avatar>
        <p>bichloan</p>
      </div>
      <div className="avatar">
        <Avatar className="image" size={50}>
          USER
        </Avatar>
        <p>minhte.c29</p>
      </div>
      <div className="avatar">
        <Avatar className="image" size={50}>
          USER
        </Avatar>
        <p>nang.139</p>
      </div>
    </div>
  );
}

export default StoryBar;
