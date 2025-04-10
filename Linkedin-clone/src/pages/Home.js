import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-6">
          <Feed />
        </div>
        <div className="col-md-3">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default Home;
