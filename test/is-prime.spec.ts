import { default as isPrime } from "src/is-prime";

describe.each([
  [3, true],
  [4, false],
  [99, false],
])(
  "test  isPrime( %o ) equal %o)",
  (num, boolean) => {
    test(`return correct result`, () => {
      let result = isPrime(num);
      expect(result).toEqual(boolean);
    });
  },
  5000
);
