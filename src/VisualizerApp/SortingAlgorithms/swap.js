function swap(array, i, j) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        resolve();
      }, 10); // Adjust the time interval for smoother animation
    });
  }

  
export default swap;