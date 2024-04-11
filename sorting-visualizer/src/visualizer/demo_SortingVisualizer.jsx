// SortingVisualizer.js
import { useState } from "react";
import ArrayVisualization from "./ArrayVisualization";
import SortingButtons from "../utilis/SortingButtons";
import SpeedAndSizeControls from "../utilis/SpeedAndSizeControl";
import { generateRandomArray } from "../utilis/utilis";
import {
  handleSelectionSort,
  handleBubbleSort,
  handleGenerateRandomArray,
  handleStopSorting,
} from "./SortingFunctions";

function Demo_SortingVisualizer() {
  const [speed, setSpeed] = useState(2);
  const [bars, setBars] = useState(generateRandomArray(25));
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [sortedBars, setSortedBars] = useState([]);

  return (
    <div className="flex flex-col items-center py-4 bg-blue-500 text-white px-4">
      <h1 className="text-2xl font-bold mb-4">Sorting Visualizer</h1>
      <SortingButtons
        handleBubbleSort={() =>
          handleBubbleSort(
            bars,
            sortedBars,
            setIsSorting,
            setBars,
            speed,
            setComparing,
            setSortedBars
          )
        }
        handleSelectionSort={() =>
          handleSelectionSort(
            bars,
            sortedBars,
            setIsSorting,
            setBars,
            speed,
            setComparing,
            setSortedBars
          )
        }
        handleGenerateRandomArray={() =>
          handleGenerateRandomArray(
            bars,
            setBars,
            sortedBars,
            setComparing,
            setSortedBars,
            generateRandomArray
          )
        }
        handleStopSorting={() =>
          handleStopSorting(
            bars,
            setBars,
            sortedBars,
            setComparing,
            setSortedBars
          )
        }
        isSorting={isSorting}
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

export default Demo_SortingVisualizer;
