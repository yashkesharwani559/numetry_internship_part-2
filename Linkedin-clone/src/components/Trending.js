import React from "react";
import "./Trending.css";

const trends = [
  { title: "US sets tariff on all imports", readers: "418,138" },
  { title: "VC funds flow as market rebounds", readers: "883" },
  { title: "EV sales approach 2 million", readers: "619" }
];

function Trending() {
  return (
    <div className="trending p-3 bg-white shadow rounded">
      <h5>Trending Now</h5>
      {trends.map((trend, index) => (
        <p key={index} className="text-muted">
          {trend.title} <br />
          <small>{trend.readers} readers</small>
        </p>
      ))}
    </div>
  );
}

export default Trending;
