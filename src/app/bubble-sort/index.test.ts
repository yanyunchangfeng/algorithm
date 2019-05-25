import deepClone from "../deep-clone";
import ranNum from "../random-number";
import bubbleSort from "./index";
test("bubbleSort", () => {
    const bubbleArr: any[] = [];
    for (let i = 0; i < 10000; i++) {
        bubbleArr[i] = ranNum(0, 1001);
    }
    const cloneArr = deepClone(bubbleArr).sort((a: any, b: any) => a - b);
    bubbleSort(bubbleArr);
    expect(bubbleArr).toEqual(cloneArr);
});
