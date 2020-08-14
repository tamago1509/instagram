import React from "react";
import AFriend from "./AFriend";

 function ListFriends() {
  return (
    <div className="list-cover">
      <div className="sug-header">
        <span><strong>Gợi ý cho bạn</strong></span>
        <span className="showall"><strong>Xem tất cả</strong></span>
      </div>
      <AFriend />
      <AFriend />
      <AFriend />
      <AFriend />
      <AFriend />
    </div>
  );
}
export default ListFriends;