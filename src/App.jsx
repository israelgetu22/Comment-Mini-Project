import React from "react";
import "./App.css";
//import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h1>Props Children</h1>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 7:00PM"
          content="Good thought!"
          // avator={faker.image.avator()}
        />
      </ApprovalCard>
      6
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:00AM"
          content="Well Done in props"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:20AM"
          content="Nice One"
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
