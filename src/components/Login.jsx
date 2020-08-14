import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import React, { useState,useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";
import {UserContext} from './context/UserProvider';


function Login () {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  // const [user,setUser] = useState({});
    
  useEffect(()=> {
    axios.get("https://rbb2q.sse.codesandbox.io/login").then(res => {
      setUsers(res.data)
    })
    
  })
  
   function onSubmit (context, value) {
    let loginUser= {};
    let userList = users;
    
    let result = 0;

    for (let i = 0; i < userList.length; i++) {
      if (
        value.usermail === userList[i].usermail &&
        value.password === userList[i].password
      ) {
        result = 1;
        loginUser= userList[i];
        break;
        
      } else result +=1;
    }
    console.log(loginUser);
    if (result === 1) {
      // setUser(loginUser)
      
      alert("Login successfully!!!");
      //luu vao localStorage
      localStorage.setItem('user', JSON.stringify(loginUser))
      context.setUser(loginUser)
      //
      history.push('/post');
    } else {
      alert("Login failed!!");
    }
  };

  function onFinishFailed (errorInfo) {
    console.log("Failed:", errorInfo);
  }


    return (
      
        <UserContext.Consumer>
          {
            context =>(
                <div className="form-style">
            <Form
              className="form-cover"
              name="basic"
              initialValues={{
                remember: true
              }}
              // onFinish={this.onFinish}
              onFinish={(value)=> onSubmit(context,value)}
              onFinishFailed={onFinishFailed}
            >
              <h2>Đăng nhập</h2>
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
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Link to="/forgetpass">Quên mật khẩu?</Link>
              <br />
                  <Button className="btn" type="primary" htmlType="submit"
>
                    Đăng nhập
                  </Button>
                    
  
        </Form>
      </div>
            )
          }
          
        </UserContext.Consumer>
          
                 
      
    );
  
}

export default Login;
