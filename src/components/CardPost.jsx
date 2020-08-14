import React, { Component } from 'react';
import { Card, Avatar, Input, Button } from "antd";
import { Link } from "react-router-dom";

import {
  MessageOutlined,
  SendOutlined,
  BookOutlined
} from "@ant-design/icons";
import "./Post.css";


const { Meta } = Card;







export class CardPost extends Component {
    constructor(props) {
        super(props);
         
        this.state = {
          visible: false,
          liked: false
    
        };
        this.onLike = this.onLike.bind(this)
        
      }
    
      
      onLike(){
        this.setState({
          liked: !this.state.liked
        })
    
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
          visible: false
          
        });
      };
      


    render() {
        const {user} = this.props;
        const {liked} = this.state;
        return (
            <div className="cardpost-cover"> 
                <Card
            key={user.id}
            title={
              <Meta
                avatar={<Avatar src={user.avatar} />}
                title={user.nickname}
              />
            }
            className="card"
            extra={
              <img
                onClick={this.showModal}
                src="https://image.flaticon.com/icons/svg/2089/2089793.svg"
                width="15px"
              />
            }
            cover={<img className= "photo" alt="example" src={user.img} />}
            actions={[
              <Input ref={this.textInput} className="comment" placeholder="Thêm bình luận..." />,
              <Button className="button-text" type="text">
                Đăng
              </Button>
            ]}
          >
            <div className="icon-gr">
              <img onClick={this.onLike} src= {liked ? "https://image.flaticon.com/icons/svg/1216/1216649.svg":
              "https://image.flaticon.com/icons/svg/1216/1216575.svg"
              
            } className="status heart"/>

             <Link to="/comment" ><MessageOutlined className="status" /></Link>
              <SendOutlined className="status" />
              <BookOutlined className="status save" />
            </div>
            <div>
              <Avatar
                size={20}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <span>reva và 6 người khác đã thích</span>
              <p>
                {user.nickname}_{user.status}
              </p>

              <p>4 giờ trước</p>
            </div>
          </Card>
                
            </div>
        )
    }
}

export default CardPost
