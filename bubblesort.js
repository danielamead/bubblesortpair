function swap(first, second, array, index) {
  let newFirst = first;
  first = second;
  second = newFirst;
  array[index] = first;
  array[index + 1] = second;
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapCounter = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array[j], array[j + 1], array, j);
        swapCounter++;
      }
    }
    if (swapCounter === 0) {
      break;
    }
  }
  return array;
}
