// ArrayVisualization.js
import React from "react";
function ArrayVisualization({ bars, comparing, sortedBars }) {
  return (
    <div className="flex mt-4 pt-5">
      {bars.map((value, index) => (
        <div
          key={index}
          className={`w-11 mx-1 rounded-sm rounded-t-md ${
            comparing.includes(index) ? "bg-red-500" : ""
          } ${sortedBars.includes(index) ? "bg-green-500" : "bg-blue-300"}`}
          style={{
            marginTop: `auto`,
            height: `${value * 3}px`,
          }}
        >
          <h4 className="text-center">{value}</h4>
        </div>
      ))}
    </div>
  );
}
export default ArrayVisualization;
