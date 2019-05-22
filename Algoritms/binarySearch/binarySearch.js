const search = (list, number) => {
  const iter = (low, high) => {
    if (low > high) {
      return undefined;
    }
    const mid = Math.round((low + high) / 2);
    const gues = list[mid];
    if (gues === number) {
      return mid;
    }
    if (gues > number) {
      return iter(low, mid - 1);
    }
    return iter(mid + 1, high);
  };
  return iter(0, list.length - 1);
};

// export default search;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 3;
console.log(search(arr, num));
