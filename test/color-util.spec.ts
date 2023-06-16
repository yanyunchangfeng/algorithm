import { baseColor, genColor } from "src/color-util";

let arr = [1, 2, 3, 4, 5, 6, 7];
let colorResult = baseColor.slice(0, 7);
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let colorResult2 = [
  ...baseColor.slice(0, baseColor.length),
  ...baseColor.slice(0, arr2.length - baseColor.length),
];
let arr3 = [1, 2, 3, 4];
let myColor = ["#e3e45", "#26987", "#fd3456", "#gb5210"];
let colorResult3 = myColor.slice(0, myColor.length);
describe.each([
  [arr, colorResult, baseColor],
  [arr2, colorResult2, baseColor],
  [arr3, colorResult3, myColor],
])(
  "test  genColor( %o ) equal %o)",
  (arr, colorResult, baseColor) => {
    test(`return correct colorResult`, () => {
      let result = genColor(arr, baseColor);
      expect(result).toEqual(colorResult);
    });
  },
  5000
);
