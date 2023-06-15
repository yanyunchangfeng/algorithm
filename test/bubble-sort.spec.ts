import { default as bubbleSort } from "src/bubble-sort";

let arr = [4, 65, 2, -31, 0, 99, 2, 83, 782, 1];
let orderArr = [-31, 0, 1, 2, 2, 4, 65, 83, 99, 782];
let snArr = [4, "65", 2, "-31", 0, 99, 2, 83, 78, 1];
let orderSnArr = ["-31", 0, 1, 2, 2, 4, "65", 78, 83, 99];

describe.each([
  [arr, orderArr],
  [snArr, orderSnArr],
])(
  "test  bubbleSort( %o ) equal %o)",
  (arr, orderArr) => {
    test(`return correct order`, () => {
      bubbleSort(arr);
      expect(arr).toEqual(orderArr);
    });
  },
  5000
);
