const findSmalest = (arr) => {
  const iter = (i, smallest, smalestIndex) => {
    if (i >= arr.length) {
      return smalestIndex;
    }
    const next = i + 1;
    if (arr[i] < smallest) {
      const newSmallest = arr[i];
      const newSmallestIndex = i;
      return iter(next, newSmallest, newSmallestIndex);
    }
    return iter(next, smallest, smalestIndex);
  };
  return iter(1, arr[0], 0);
};

const selectionSort = (arr) => {
  const iter = (i, sortedArr, workingArr) => {
    if (i >= arr.length) {
      return sortedArr;
    }
    const smallestIndex = findSmalest(workingArr);
    const getSmallest = workingArr.splice(smallestIndex, 1);
    const newArr = sortedArr.concat(getSmallest);
    const next = i + 1;
    return iter(next, newArr, workingArr);
  };
  return iter(0, [], arr.slice());
};

// console.log(selectionSort([5, 3, 6, 2, 10]));
export default selectionSort;
