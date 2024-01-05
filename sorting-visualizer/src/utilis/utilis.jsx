// utils.js
function generateRandomArray(size) {
  const arraySize = Math.min(Math.max(size, 10), 50);
  return Array.from(
    { length: arraySize },
    () => Math.floor(Math.random() * 80) + 12
  );
}

export { generateRandomArray };
