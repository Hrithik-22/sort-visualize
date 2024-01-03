// SortingVisualizer.js
import React, { useState } from "react";
import { generateRandomArray, bubbleSort } from "./sortingAlgorithms";
import SortableBar from "./sortableBar";
function SortingVisualizer({ speed }) {
  const [bars, setBars] = useState(generateRandomArray(25));
  const [comparing, setComparing] = useState([]);
  const [sortedBars, setSortedBars] = useState([]);

  const handleGenerateRandomArray = () => {
    const newArray = generateRandomArray(bars.length);
    setBars(newArray);
    setComparing([]);
    setSortedBars([]);
  };

  const handleBubbleSort = async () => {
    // Your existing bubble sort logic here
    setComparing([]);
    setSortedBars([]);

    const arrayCopy = [...bars];
    const n = arrayCopy.length;
    //no.of iterations
    for (let i = 0; i < n; i++) {
      // second for loop is for comparing consecutive elements
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
  };

  return (
    <div>
      {/* ... UI components for sorting controls ... */}
      <div className="flex mt-4  pt-5">
        {bars.map((value, index) => (
          <SortableBar
            key={index}
            value={value}
            index={index}
            comparing={comparing}
            sortedBars={sortedBars}
          />
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
