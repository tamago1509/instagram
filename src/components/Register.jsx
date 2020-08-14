import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import React, { useState,useEffect } from "react";
import "./Login.css";
import axios from "axios";
// import Login from "./Login";
import { Link,useHistory } from "react-router-dom";

function Register() {
  const [users,setUsers] = useState([])
  const history = useHistory();

  useEffect(()=> {
    axios.get("https://rbb2q.sse.codesandbox.io/login").then(res => {
      setUsers(res.data)
      
    });
  })

  function onFinishFailed ( errorInfo)  {
    console.log("Failed:", errorInfo);
  };

  function onSubmit (value)  {
    let newList = users;
    let result= 0;

    for (let i = 0; i < newList.length; i++) {
      if (
        value.usermail === newList[i].usermail
      ) {
        result = 1;
        break;
      } else result +=2;
    }
    if(result === 1){
      alert("Email has been existed!!")
    } else{
      axios
            .post(
              "https://cors-anywhere.herokuapp.com/https://rbb2q.sse.codesandbox.io/login",
              {
                usermail: value.usermail,
                fullname: value.fullname,
                username: value.username,
                password: value.password
              }
            )
            .then(res => {
              newList.push(res.data);
              setUsers(
                 newList
              )
              alert("Register successfully!!!");
              history.push('/post')
            })
            .catch(function(error) {
              console.log(error);
            });
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
          <h2>Đăng ký</h2>
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
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your fullname!"
              }
            ]}
          >
            <Input placeholder="Tên đầy đủ" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input placeholder="Tên người dùng" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
         
            <Link to="/login">Đăng nhập?</Link>
            <br />
        

            <Button className="btn" type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
          
}
export default Register;
