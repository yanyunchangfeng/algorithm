import { default as unique } from "src/unique";

let arr = [1, 2, 2, 3, 4, 4, 4, 5];
let uniqueArr = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 55, 7, 8, 9, 55, 3, 1, 45, 55];
let uniqueArr2 = [1, 3, 55, 7, 8, 9, 45];

describe.each([
  [arr, uniqueArr],
  [arr2, uniqueArr2],
])(
  "test  unique( %o ) equal %o)",
  (arr, uniqueArr) => {
    test(`return correct result`, () => {
      let result = unique(arr);
      expect(result).toEqual(uniqueArr);
    });
  },
  5000
);
