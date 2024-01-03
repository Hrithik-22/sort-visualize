// SortableBar.js
import React from "react";

function SortableBar({ value, index, comparing, sortedBars }) {
  return (
    <div
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
  );
}

export default SortableBar;
