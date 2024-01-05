import React from "react";
function SortingButtons({
  handleBubbleSort,
  handleSelectionSort,
  handleGenerateRandomArray,
}) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={handleBubbleSort}
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        Bubble Sort
      </button>
      <button
        onClick={handleSelectionSort}
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        Selection Sort
      </button>
      {/* Add buttons for other sorting algorithms here */}
      <button
        onClick={handleGenerateRandomArray}
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        Generate Random Array
      </button>
    </div>
  );
}
export default SortingButtons;
