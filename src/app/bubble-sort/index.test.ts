import bubbleSort from './index';
import ranNum  from  '../random-number';
import deepClone from '../deep-clone';
test('bubbleSort',()=>{
    let bubbleArr:any[] = [];
    for(let i = 0;i < 10000; i++){
        bubbleArr[i] = ranNum(0,1001);
    }
    let cloneArr = deepClone(bubbleArr).sort((a:any, b:any) => a-b)
    bubbleSort(bubbleArr);
    expect(bubbleArr).toEqual(cloneArr);
})