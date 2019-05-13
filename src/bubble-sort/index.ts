// import ranNum from "../random-number";
 
 /**
   * [bubbleSort 冒泡排序算法]
   * @param  {[object Array]} arr    [要进行排序的数组]
   * return {void}
   */


const bubbleSort = (arr:any[]):void => {
   for(let i = 1; i<arr.length;i++){
       for(let j = 0;j<arr.length-i;j++){
           if(arr[j]>arr[j+1]){
               arr[j] = [ arr[j+1] , arr[j+1]=arr[j] ][0];
           }
       }
   }
}

export default bubbleSort

// let bubbleArr:any[] = [];

// for(let i = 0;i < 10000; i++){
//    bubbleArr[i] = ranNum(0,1001)
// }
// // unit test bubbleSort

// console.time('bubbleSort')
// bubbleSort(bubbleArr);
// console.log(bubbleArr)
// console.timeEnd('bubbleSort') // bubbleSort: 212.758056640625ms