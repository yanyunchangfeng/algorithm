import { default as ranNum } from "src/random-number";

describe.each([[60, 100]])(
  "test  ranNum( %o ) equal %o)",
  (min, max) => {
    test(`return correct order`, () => {
      let result = ranNum(min, max);
      expect(result).toBeLessThanOrEqual(max);
      expect(result).toBeGreaterThanOrEqual(min);
    });
  },
  5000
);
