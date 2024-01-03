import React, { useState, useEffect } from "react";

function generateRandomArray(size) {
  const arraySize = Math.min(Math.max(size, 10), 50);
  return Array.from(
    { length: arraySize },
    () => Math.floor(Math.random() * 80) + 12
  );
}

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

function SortingButtons({ handleBubbleSort, handleGenerateRandomArray }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={handleBubbleSort}
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        Bubble Sort
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

function Header() {
  const [speed, setSpeed] = useState(2);
  const [bars, setBars] = useState(generateRandomArray(25));
  const [comparing, setComparing] = useState([]);
  const [sortedBars, setSortedBars] = useState([]);

  function handleGenerateRandomArray() {
    const newArray = generateRandomArray(bars.length);
    setBars(newArray);
    setComparing([]);
    setSortedBars([]);
  }

  async function handleBubbleSort() {
    setComparing([]);
    setSortedBars([]);

    const arrayCopy = [...bars];
    const n = arrayCopy.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing([j, j + 1]);
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
          await new Promise((resolve) => setTimeout(resolve, speed * 60));
          setBars([...arrayCopy]);
        }
      }

      setSortedBars([...sortedBars, n - i - 1]);
    }

    setComparing([]);
  }

  return (
    <div className="flex flex-col items-center py-4 bg-blue-500 text-white px-4">
      <h1 className="text-2xl font-bold mb-4">Sorting Visualizer</h1>
      <SortingButtons
        handleBubbleSort={handleBubbleSort}
        handleGenerateRandomArray={handleGenerateRandomArray}
      />
      <SpeedAndSizeControls />
      <ArrayVisualization
        bars={bars}
        comparing={comparing}
        sortedBars={sortedBars}
      />
    </div>
  );
}

export default Header;
