// SpeedAndSizeControls.js
import React from "react";
function SpeedAndSizeControls() {
  return (
    <div className="flex items-center mb-20">
      <label className="mr-2">Speed:</label>
      <input
        type="range"
        min="1"
        max="5"
        defaultValue="3"
        className="mr-4 appearance-none w-24 h-3 bg-gray-800 rounded-md focus:outline-none focus:bg-blue-300 active:bg-red-700"
      />
      <label>Size:</label>
      <input
        type="range"
        min="10"
        max="100"
        defaultValue="50"
        className="appearance-none w-24 h-3 bg-gray-800  rounded-md focus:outline-none focus:bg-blue-300 active:bg-red-700"
      />
    </div>
  );
}
export default SpeedAndSizeControls;
