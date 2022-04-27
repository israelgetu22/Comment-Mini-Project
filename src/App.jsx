import React from "react";
import "./App.css";
//import faker from "faker";

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avator">
          <img
            style={{ width: "50px" }}
            alt="avator"
            src="https://www.at-languagesolutions.com/en/wp-content/uploads/2016/06/http-1.jpg"
          />
          {/* <img alt="avator" src={faker.image.avatar()} /> */}
        </a>
        <div className="content">
          <a href="" className="author">
            Israel
          </a>
          <div className="metadata">
            <span className="data"> Today at 7:00 </span>
          </div>
          <div className="text">Nice Blog POST!!!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
