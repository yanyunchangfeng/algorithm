/**
 * [insertSort 插入排序算法]
 * @param {[object Array]} arr [要进行排序的数组]
 * @return {void}
 */
const insertSort = (arr: any[]): void => {
    // 从1开始遍历arr
   for (let i = 1; i < arr.length; i++) {
        const current = arr[i]; // 将当前值保存在current
        let p = i - 1; // 定义p = i-1
        // 反复：p > 0 && p位置的值 > current
        while (p >= 0 && arr[p] > current) {
           // p位置的值赋值给p+1
           arr[p + 1] = arr[p];
           // p--
           p--;
         }
        arr[p + 1] = current; // 将current的值保存到p+1中
   }
};

const inser = (arr:any[]):void =>{
   for(let i = 1 ;i<arr.length;i++){
      let temp = arr[i];
      let p = i-1;
      while(temp < arr[p]){
         arr[p+1] = arr[p];
         p-- 
      }
      arr[p+1] =temp;
   }
}

let tarr = [1,5,4,3,2,6,44,0];
let darr = [1,5,4,3,2,6,44,22];
console.time('i1')
inser(tarr)
console.log(tarr)
console.timeEnd('i1')
// console.time('i2')
// insertSort(tarr)
// console.log(tarr)
// console.timeEnd('i2')
export default insertSort;


