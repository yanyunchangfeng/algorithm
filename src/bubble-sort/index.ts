
 /**
   * [bubbleSort 冒泡排序算法]
   * @param  {[object Array]} arr    [要进行排序的数组]
   * 
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