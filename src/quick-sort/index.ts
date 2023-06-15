/**
 * [quicksort 快速排序算法]
 * @param  {[object Array]} arr [要进行排序的数组]
 * @return {[object Array]}     [新的排好序的数组]
 */
const quickSort = <T extends number>(arr: T[]): T[] => {
  if (arr.length > 1) {
    const centerIndex = parseInt(arr.length / 2 + "");
    const center = <T>(arr.splice(centerIndex, 1) as unknown);
    const left = [],
      right = [];
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (current < center) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(center, quickSort(right));
  } else {
    return arr;
  }
};

export default quickSort;
