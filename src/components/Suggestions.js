import React, { useState } from "react";
import { Card, Button, Avatar } from "antd";
import "antd/dist/antd.css";
import "./Suggestion.css";

const { Meta } = Card;

export default function Suggestions() {
  const [isShowed, setShowed] = useState(true);

  const onShow = () => {
    setShowed(!isShowed);
  };
  return (
    isShowed && (
      <Card className="sug" size="small">
        <span onClick={onShow} className="display-topright">
          &times;
        </span>
        <Avatar
          className="avatar"
          size={50}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <Meta className="name" title="Kota" description="Theo dõi bạn" />
        <Button className="btn" type="primary" block>
          Theo dõi
        </Button>
      </Card>
    )
  );
}
