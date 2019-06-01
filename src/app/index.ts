import bubbleSort from "./bubble-sort";
import getMonthData from "./calendar-algorithm";
import color from "./color-util";
import insertSort from "./insert-sort";
import isPrime from "./is-prime";
import multiInherit from "./multi-inherit";
import quickSort from "./quick-sort";
import ranNum from "./random-number";
import unique from "./unique";

export default {
    bubbleSort,
    quickSort,
    insertSort,
    unique,
    isPrime,
    getMonthData,
    ranNum,
    genColor: color.genColor,
    copyProperties: multiInherit.copyProperties,
    mix: multiInherit.mix,
};
var str = "hello";
var o:any = [];
for(var i = 0;i<str.length;i++){
    if(str.indexOf(str[i]) == i){
        o[str[i]] = str.split(str[i]).length-1
    }
}
console.log(o)

var name = 'global';
var obj ={
    name:'obj',
    dose:function(){
        this.name = 'does';
        return function(){
            return this.name
        }
    }
};
var result = obj.dose().call(this);
console.log(result)

var str = 'asdfdsfdgdfgreriueghnuirg';

var json:any = {};
for(let i = 0;i<str.length;i++){
    if(!json[str[i]]){
        json[str[i]] = 1
    }else{
        json[str[i]]++
    }
}
var index,max=0;
for (let key in json){
    if(json[key]>max){
        max = json[key];
        index = key
    }
}
console.log(index,max)
var checkbox = document.getElementsByTagName('input');
var len = checkbox.length;;
// var arr = []
// while(len--){
//   if(checkbox[len].type === 'checkbox'){
//       arr.unshift(checkbox[len])
//   }
// }

var arr:any = [11,[33,44,55,66]];
// arr = arr.join(',').split(',');
// console.log(arr.forEach( (val:any,index:number,arr:any) => arr[index] = val*1 ))
// console.log(arr)
arr  = Array.prototype.concat.apply([],arr);
console.log(arr)
console.log(Math.max.apply(NaN,arr))


for(var i =0; i<=3;i++){
    setTimeout((function(a){ return ()=>{console.log(a)}})(i),0)
}