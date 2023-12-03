import React, { useState } from "react";

function Header() {
  const [array, setArray] = useState(generateRandomArray(50)); // Initial array with 50 elements

  // Function to generate a random array of given size
  function generateRandomArray(size) {
    return Array.from(
      { length: size },
      () => Math.floor(Math.random() * 100) + 1
    );
  }

  // Function to handle the "Generate Random Array" button click
  function handleGenerateRandomArray() {
    const newArray = generateRandomArray(array.length);
    setArray(newArray);
  }
  return (
    <div className="flex flex-col items-center py-4 bg-blue-500 text-white px-4">
      <h1 className="text-2xl font-bold mb-4">Sorting Visualizer</h1>
      <div className="flex gap-2 mb-4">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Bubble Sort
        </button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Insertion Sort
        </button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Selection Sort
        </button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Merge Sort
        </button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Quick Sort
        </button>
        <button
          onClick={handleGenerateRandomArray}
          className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          Generate Random Array
        </button>
      </div>
      <div className="flex items-center">
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
      {/* Display the visual representation of the array */}
      <div className="flex mt-4">
        {array.map((value, index) => (
          <div
            key={index}
            className="bg-blue-300 h-8 w-4 mx-1"
            style={{ height: `${value * 3}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Header;
