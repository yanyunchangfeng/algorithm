// import ranNum from '../random-number'
/** 
 * [insertSort 插入排序算法]
 * @param {[object Array]} arr [要进行排序的数组]
 * @return {void}
*/
const insertSort = (arr:any[]):void => {
    //从1开始遍历arr
   for(let i = 1; i < arr.length; i++){
        let current = arr[i]; //将当前值保存在current
        let p = i - 1; // 定义p = i-1
        // 反复：p > 0 && p位置的值 > current
         while(p >= 0 && arr[p] > current){
           // p位置的值赋值给p+1
           arr[p+1] = arr[p];
           //p--
           p--;
         }
         arr[p+1] = current //将current的值保存到p+1中
   }
}
export default insertSort

// let insertArr:any[] = [];

// for(let i = 0;i < 10000; i++){
//    insertArr[i] = ranNum(0,1001)
// }
// // unit test insertSort

// console.time('insertSort')
// insertSort(insertArr);
// console.log(insertArr)
// console.timeEnd('insertSort') // 30.55908203125ms