// This program visualizes popular algorithms.
// Animations are done with async javascript.

import React, { useState } from "react"; // Import react and its hooks
import "./VisualizerApp.css"; // Import CSS

// Import sorting algorithms
import bubbleSort from "./SortingAlgorithms/bubbleSort";
import selectionSort from "./SortingAlgorithms/selectionSort";
import insertionSort from "./SortingAlgorithms/insertionSort";

function SortingAlgorithmVisualizer() {
  // Maximum and minimum values for array.
  const max = 500;
  const min = 5;

  // State
  const [array, setArray] = useState(getRandomArray(max, min)); // Holds the current array for visualization
  const [isSorting, setIsSorting] = useState(false); // Flags whether a sorting algorithm is currently running

  // Functions to run sorting algorithms.
  async function doBubbleSort() {
    await bubbleSort(array, setArray, setIsSorting); // Use the function
  }  
  
  async function doSelectionSort() {
    await selectionSort(array, setArray, setIsSorting); // Use the function
  }

  async function doInsertionSort() {
    await insertionSort(array, setArray, setIsSorting); // Use the function
  }

  // Generate new Array and set it to state
  function newArray() {
    setArray(getRandomArray(max, min));
  }

  return (
    <div className="container">
      {/* Display array values */}
      {array.map((value, index) => (
        <div className="bar" style={{ height: `${value}px` }} key={index}></div>
      ))}
      <br />
      {/*Generate new array on click*/}
      <button onClick={newArray} disabled={isSorting}>New Array</button>
      {/*Buttons to run sorting algorithms on click*/}
      <button onClick={doBubbleSort} disabled={isSorting}>Bubble Sort</button>
      <button onClick={doSelectionSort} disabled={isSorting}>Selection Sort</button>
      <button onClick={doInsertionSort} disabled={isSorting}>Insertion Sort</button>
    </div>
  );
}

// Get random array from interval
function getRandomArray(max, min) {
  const randomArray = [];

  for (let i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * (max - 1 + min)) + min;
    randomArray.push(randomNumber); // Add number to new array.
  }

  return randomArray;
}

export default SortingAlgorithmVisualizer;
