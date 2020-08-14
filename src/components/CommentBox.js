import React, { useState } from "react";
import "antd/dist/antd.css";
import "./CommentBox.css";
import { Card, Avatar, Input, Button, Modal,Divider } from "antd";
import { MessageOutlined, SendOutlined, BookOutlined } from "@ant-design/icons";
const { Meta } = Card;
function CommentBox() {
  const [liked, setLike] = useState(false);
  

  function onLike() {
    setLike(!liked);
  }

  function showModal() {}
  return (
    <div className="cardpost-cover-comment">
      <div className="img-cover">
        <img src="https://picsum.photos/600" />
      </div>
      <Card
        title={
          <Meta
            avatar={<Avatar src="https://picsum.photos/200/300" />}
            title="gabeo"
          />
        }
        className="card-comment"
        extra={
          <img
            onClick={showModal}
            src="https://image.flaticon.com/icons/svg/2089/2089793.svg"
            width="15px"
          />
        }
        actions={[
          <Input
            
            className="comment"
            placeholder="Thêm bình luận..."
          />,
          <Button className="button-text" type="text">
            Đăng
          </Button>
        ]}
      >
        
        <div className="comment-content">
          <Avatar
            size={20}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <p>Gabeo_Lorem ipsum dolor,
             sit amet consectetur adipisicing elit. 
             Autem ullam vitae commodi saepe, error veritatis recusandae,
              inventore ad labore iusto. Nam provident ratione velit possimus 
              odit voluptatum mollitia repellat?
              Aspernatur vitae totam velit modi deleniti consequuntur,
               saepe libero voluptate adipisci blanditiis ratione 
               </p>
         
        </div>
        <Divider />
        <div className="icon-gr">
          <img
            onClick={onLike}
            src={
              liked
                ? "https://image.flaticon.com/icons/svg/1216/1216649.svg"
                : "https://image.flaticon.com/icons/svg/1216/1216575.svg"
            }
            className="status heart"
          />
          <MessageOutlined className="status" />
          <SendOutlined className="status" />
          <BookOutlined className="status save" />
          
         
        </div>
        <div className="comment-info">
          <p>14 người đã thích</p>
          <p>4 giờ trước</p>
        </div>
        
        
      </Card>
    </div>
  );
}
export default CommentBox;
