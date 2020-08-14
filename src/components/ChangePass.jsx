import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import React, { useState,useEffect } from "react";
import "./Login.css";
import axios from "axios";

function ChangePass (){
  const [users, setUser] = useState([])


  const history = useHistory();

  function handleClick() {
    history.push("/post");
  }


  function onFinishFailed( errorInfo) {
    console.log("Failed:", errorInfo);
  };

  useEffect(()=> {
    axios.get("https://rbb2q.sse.codesandbox.io/users").then(res => {
      setUser(res.data)
    });
  })

  function onSubmit(value) {
    let count = 0;
    if (value.password1 !== value.password2) {
      alert("Passwords are different!!");
    } else {
      let userList = users;
      for (let i = 0; i < userList.length; i++) {
        if (value.usermail === userList[i].usermail) {
          axios
            .put(
              `https://cors-anywhere.herokuapp.com/https://rbb2q.sse.codesandbox.io/users/${
                userList[i].id
              }`,
              {
                fullname: userList[i].fullname,
                password: value.password1,
                usermail: userList[i].usermail,
                username: userList[i].username
              }
            )
            .then(res => {
              console.log(res);
            })
            .catch(e => {
              console.log(e);
            });
          count = 1;
          break;
        } else {
          count += 1;
        }
      }
      
    }
  };

  
    return (
      <div className="form-style">
        <Form
          className="form-cover"
          name="basic"
          initialValues={{
            remember: true
          }}
          // onFinish={this.onFinish}
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
        >
          <h2>Thay đổi mật khẩu</h2>
          <Form.Item
            name="usermail"
            rules={[
              {
                required: true,
                message: "Please input your email!"
              }
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password1"
            rules={[
              {
                required: true,
                message: "Please input your new password!"
              }
            ]}
          >
            <Input.Password placeholder="New password" />
          </Form.Item>
          <Form.Item
            name="password2"
            rules={[
              {
                required: true,
                message: "Please confirm your new password!"
              }
            ]}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>

          <Button onClick={handleClick} type="primary" htmlType="submit">
            Thay đổi
          </Button>
        </Form>
      </div>
    );
  
}

export default ChangePass;
