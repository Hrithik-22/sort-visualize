import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function generateRandomArray(size, min, max) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return array;
}

function Bar() {
  return (
    <div
      className="bg-red-500 mx-1"
      style={{ height: `${50}px` }}
    ></div>
  );
}

function Visualizer() {
  const [array, setArray] = useState(generateRandomArray(20, 20, 300));

  const generateNewArray = () => {
    setArray(generateRandomArray(20, 20, 300));
  };

  return (
    <div className="flex justify-center items-end h-screen bg-gray-200">
      {array.map((value) => (
        <Bar key={uuidv4()} height={value} />
      ))}
      <button
        className="mt-4 bg-green-500 px-4 py-2 rounded-md text-white"
        onClick={generateNewArray}
      >
        Generate New Array
      </button>
    </div>
  );
}

export default Visualizer;
