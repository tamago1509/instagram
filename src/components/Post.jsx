import React, { Component } from "react";
import {  Modal, Divider } from "antd";
import axios from "axios";

import "./Post.css";
import Navbar from "./Navbar";
import CardPost from './CardPost';
import Slide from './Slide';
import LeftBar from './LeftBar';
import './Navbar.css';



export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      users: []
      

    }
    
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }


  
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      users: []
    });
  }
  componentDidMount() {
    axios.get("https://rbb2q.sse.codesandbox.io/users").then((res) => {
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="card-cover">
        <Navbar />
        <LeftBar/>
        {
          users.map((user,index)=>(
            <>
            { index !==2 && <CardPost className="card" user= {user}/>}
            {index === 2 && <Slide/>}
            </>
          ))
        }
        

        <Modal
          className="modal-cover"
          title="Lựa chọn"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p className="danger">Báo cáo là không phù hợp</p>
          <Divider />
          <p className="danger">Bỏ theo dõi</p>
          <Divider />
          <p>Đi tới bài viết</p>
          <Divider />
          <p onClick={this.handleCancel}>Hủy</p>
        </Modal>
      </div>
    );
  }
  
}

export default Post;
