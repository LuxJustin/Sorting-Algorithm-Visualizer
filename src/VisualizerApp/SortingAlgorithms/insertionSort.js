async function insertionSort(array, setArray, setIsSorting) {
    setIsSorting(true);
  
    for (let i = 1; i < array.length; i++) {
      const currentValue = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > currentValue) {
        array[j + 1] = array[j];
        j--;
        await sleep(1); // Adjust the delay time for visualization
        setArray([...array]); // Update the array state to trigger re-render
      }
  
      array[j + 1] = currentValue;
      await sleep(1); // Adjust the delay time for visualization
      setArray([...array]); // Update the array state to trigger re-render
    }
  
    setIsSorting(false);
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export default insertionSort;
  