// sortingFunctions.js
export async function handleSelectionSort(
  bars,
  sortedBars,
  setIsSorting,
  setBars,
  speed,
  setComparing,
  setSortedBars
) {
  // Implementation of the selection sort algorithm
  // ...
  setIsSorting(true);
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
  setIsSorting(false);
}

export async function handleBubbleSort(
  bars,
  sortedBars,
  setIsSorting,
  setBars,
  speed,
  setComparing,
  setSortedBars
) {
  // Implementation of the bubble sort algorithm
  // ...
  setIsSorting(true);
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
  setIsSorting(false);
}

export function handleGenerateRandomArray(
  bars,
  setBars,
  sortedBars,
  setComparing,
  setSortedBars,
  generateRandomArray
) {
  const newArray = generateRandomArray(bars.length);
  //   console.log(setBars);
  setBars(newArray);
  setComparing([]);
  setSortedBars([]);
}

export function handleStopSorting(
  bars,
  setBars,
  sortedBars,
  setComparing,
  setSortedBars
) {
  setComparing([]);
  setSortedBars([]);
}
