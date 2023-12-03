import React from "react";

function Header() {
  return (
    <div className="flex flex-col content-center">
      <h1>Sorting Visualizer</h1>
      <div className="flex gap-2">
        <button>Bubble Sort</button>
        <button>Insertion Sort</button>
        <button>Selection Sort</button>
        <button>Merge Sort</button>
        <button>Quick Sort</button>
      </div>
    </div>
  );
}

export default Header;
