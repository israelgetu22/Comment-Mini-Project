import React from "react";

const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avator">
        <img
          style={{ width: "50px" }}
          alt="avator"
          src="https://www.at-languagesolutions.com/en/wp-content/uploads/2016/06/http-1.jpg"
        />
        {/* <img alt="avator" src={props.avator} /> */}
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data"> {props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
