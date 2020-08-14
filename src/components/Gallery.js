import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-cover">
      <div className="pic-title">
        <p>
          <strong>Thêm các bài viết khác từ</strong>
        </p>
      </div>
      <div className="picture-gallery">
        <img className="pic" src="https://picsum.photos/300" />
        <img className="pic" src="https://picsum.photos/300" />
        <img className="pic" src="https://picsum.photos/300" />
        <img className="pic" src="https://picsum.photos/300" />
        <img className="pic" src="https://picsum.photos/300" />
        <img className="pic" src="https://picsum.photos/300" />
      </div>
    </div>
  );
}
export default Gallery;
