import React from "react";
import "antd/dist/antd.css";
 import { Carousel } from "antd";
import Suggestions from "./Suggestions";
import "./Slide.css";

 function Slide() {
  
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  
  return (
    <div className="cover"> 
    <div className="choice">
      <span><strong>Gợi ý dành cho bạn</strong></span>
      <a href="#">Xem tất cả</a>
    </div>
      <Carousel afterChange={onChange}>
      <div className="line1">
        <Suggestions />
        <Suggestions />
        <Suggestions />
      </div>
      <div className="line1">
      <Suggestions />
        <Suggestions />
        <Suggestions />
      </div>
      <div className="line1">
      <Suggestions />
        <Suggestions />
        <Suggestions />
      </div>
      <div className="line1">
      <Suggestions />
        <Suggestions />
        <Suggestions />
      </div>
    </Carousel>
  </div>
  )
}
export default Slide;