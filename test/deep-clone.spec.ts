import { default as deepClone } from "src/deep-clone";

let arr = [4, 65, 2, [4, 5, 5]];
let result = [4, 65, 2, [4, 5, 5]];

describe.each([[arr, result]])(
  "test  deepClone( %o ) equal %o)",
  (arr, clone) => {
    test(`return correct order`, () => {
      let result = deepClone(arr);
      expect(result === clone).toBe(false);
      expect(result[3] === clone[3]).toEqual(false);
    });
  },
  5000
);
