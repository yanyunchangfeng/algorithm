/**
 * [bubbleSort 冒泡排序算法]
 * @param  {[object Array]} arr    [要进行排序的数组]
 * return {void}
 */

const basicBubbleSort = (arr: any[]): void => {
   for (let i = 1; i < arr.length; i++) {
       for (let j = 0; j < arr.length - i; j++) {
           if (arr[j] > arr[j + 1]) {
               arr[j] = [ arr[j + 1] , arr[j + 1] = arr[j] ][0];
           }
       }
   }
};
/*
* 优化后的冒泡算法
  [时间复杂度  最好O(n) 最差 O(n^2)]
  [空间复杂度  O(1)]
  [稳定性  稳定]
*/
const bubbleSort = (arr: any[]): void => {
   let len = arr.length, change = true;
   for (let i = 1 ; i < len && change; i++) {
      change = false;
      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
            arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            change = true;
        }
      }
   }
};
export default bubbleSort;

