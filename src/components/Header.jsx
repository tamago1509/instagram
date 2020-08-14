import React, { Component } from "react";
import { Input,Modal } from "antd";
import {
  SearchOutlined,
  HomeFilled,
  SendOutlined,
  CompassOutlined,
  HeartOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Header.css";
import { Avatar } from "antd";
import { Link} from "react-router-dom";
import axios from 'axios';
import {UserContext} from './context/UserProvider';


const uploadImage = async(files) => {
  const data = new FormData()
  data.append('file', files[0]);
  data.append('upload_preset','post-images')
  
  const res = await fetch("	https://api.cloudinary.com/v1_1/ngocduongflyinthesky1509/image/upload",{
    method: 'POST',
    body: data
  })

  const file = await res.json();
 
  return file.url
  

}



export class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      visible: false
       
    }

    this.showModal=this.showModal.bind(this);
    this.handleOk= this.handleOk.bind(this);
    this.handleOk = this.handleOk.bind(this);
    
  }

  componentDidMount(){

  }

  async handleOk(e, data){
    e.preventDefault()
    // console.log(e.target.file.files)
    const {file, memo} = e.target
    const files = file.files;
    console.log(data.user)
    this.setState({
      visible: false,
    });
    const loginedUser = data.user
    const url = await uploadImage(files)
    //upload to cloudinary
    let res = await axios.post("https://cors-anywhere.herokuapp.com/https://rbb2q.sse.codesandbox.io/users",{
      nickname: loginedUser.username,
      img: url,
      status: memo.value,
      avatar: "https://picsums.photos/200/300"
    })

   

    // if(data.user !="{}"||data.user != {}){
    //   localStorage.setItem('user',JSON.stringify(data.user)) 
    //   let loginedUser = localStorage.getItem('user')
    //   console.log(loginedUser.username + "1")
    //     this.setState({
    //       visible: false,
    //     });
    //   //upload to cloudinary
    //   const url = await uploadImage(files)
    //   let res = await axios.post(
    //     "https://cors-anywhere.herokuapp.com/https://rbb2q.sse.codesandbox.io/users",{
    //       nickname: loginedUser.username,
    //        img: url,
    //       status: memo.value,
    //       avatar: "https://picsums.photos/200/300"
  
    //     })

    // }else{
    //   let logined = localStorage.getItem('user')
    //   console.log(logined.username+ "longined")
    //     this.setState({
    //       visible: false,
    //     });
    //   //upload to cloudinary
    //   const url = await uploadImage(files)
    //   let res = await axios.post(
    //     "https://cors-anywhere.herokuapp.com/https://rbb2q.sse.codesandbox.io/users",{
    //       nickname: logined.username,
    //         img: url,
    //       status: memo.value,
    //       avatar: "https://picsums.photos/200/300"
  
    //     })

    // }

      

  }

  

  showModal(){
    this.setState({
      visible:true
    })
  }
  

  handleCancel = e => {
    
    this.setState({
      visible: false,
    });
  };

  
  
  render() {
    return (
      <UserContext.Consumer>
        {value => (

       
      <div className="head">
        <Link to ="/post">
          <img src="https://www.freepngimg.com/thumb/logo/76861-web-instagram-script-typeface-typography-font.png" />
        </Link>
        
        <Input
          className="search"
          size="small"
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined />}
        />
        <div className="gr-icon">
          <HomeFilled className="icon" />
          <SendOutlined className="icon" />
          <CompassOutlined className="icon" />
          <HeartOutlined onClick={this.showModal} className="icon" />
        </div>

        <Avatar src="https://picsum.photos/50" />

        <Modal
          title="Upload Image"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          <form onSubmit={ (e) => this.handleOk(e, value) }>
            <h4>Post những tấm hình tuyệt nhất nào...</h4>
            <input type="file" onChange={e => console.log(e.target.files)}
              name="file" />
            <br />
            <textarea name="memo" className="memo" placeholder="Viết chú thích..." /> 
            <button>Post</button>
            
          </form>
          

            

            
        </Modal>
      </div>
      )}
      </UserContext.Consumer>

    );
  }
}

export default Header;
