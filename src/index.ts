import bubbleSort from './bubble-sort';
import quickSort from './quick-sort';
import insertSort from './insert-sort';


/**
 * [ranNum 生成随机数的方法]
 * @return {number} [生成一个0-1000 的随机数]
 */
const ranNum = ():number => {
    return Math.trunc(Math.random()*1001)
}

let bubbleArr= [],insertArr=[],quickArr = [];
for(let i = 0;i<10000;i++){
   bubbleArr[i] = ranNum();
   insertArr[i] = ranNum();
   quickArr[i] = ranNum();
}

console.log(bubbleArr,insertArr,quickArr)
// unit test bubbleSort
console.time('bubbleSort')
bubbleSort(bubbleArr);
console.log(bubbleArr)
console.timeEnd('bubbleSort') // bubbleSort: 212.758056640625ms

// unit test quickSort
console.time('insertSort')
insertSort(insertArr);
console.log(insertArr)
console.timeEnd('insertSort') //insertSort: 36.515380859375ms


// unit test quickSort
console.time('quickSort')
let  quickRes = quickSort(quickArr);
console.log(quickRes);
console.timeEnd('quickSort') //quickSort: 59.569091796875ms
