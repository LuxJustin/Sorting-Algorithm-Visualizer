import swap from "./swap";

async function selectionSort(array, setArray, setIsSorting) {
  setIsSorting(true);
  const arrayCopy = [...array];
  const n = arrayCopy.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arrayCopy[j] < arrayCopy[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      await swap(arrayCopy, i, minIndex); // Async swap with animation
      setArray([...arrayCopy]); // Update the state to trigger re-render
    }
  }
  setIsSorting(false);
}

export default selectionSort;