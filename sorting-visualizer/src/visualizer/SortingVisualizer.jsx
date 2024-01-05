// SortingVisualizer.js
import React, { useState, useEffect } from "react";
import ArrayVisualization from "./ArrayVisualization";
import SortingButtons from "../utilis/SortingButtons";
import SpeedAndSizeControls from "../utilis/SpeedAndSizeControl";
import { generateRandomArray } from "../utilis/utilis";

function SortingVisualizer() {
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
  async function handleSelectionSort() {
    setComparing([]);
    setSortedBars([]);

    const arrayCopy = [...bars];
    const n = arrayCopy.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        setComparing([minIndex, j]);
        if (arrayCopy[j] < arrayCopy[minIndex]) {
          minIndex = j;
        }
        await new Promise((resolve) => setTimeout(resolve, speed * 60));
        setBars([...arrayCopy]);
      }

      [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
      setSortedBars([...sortedBars, i]);
    }

    setComparing([]);
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
        handleSelectionSort={handleSelectionSort}
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

export default SortingVisualizer;
