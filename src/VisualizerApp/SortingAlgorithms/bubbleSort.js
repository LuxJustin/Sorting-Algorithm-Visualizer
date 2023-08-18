
import swap from "./swap";


async function bubbleSort(array, setArray, setIsSorting) {
  setIsSorting(true);
  const arrayCopy = [...array]; // Create a copy of the array
  const n = arrayCopy.length; // Get the length of the array

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare arrayCopy[j] and arrayCopy[j + 1]
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Swap elements
        await swap(arrayCopy, j, j + 1); // Async swap with animation
        setArray([...arrayCopy]); // Update the state to trigger re-render
      }
    }
  }
  setIsSorting(false);
}

export default bubbleSort;