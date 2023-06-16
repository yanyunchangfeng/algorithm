import { mix } from "src/multi-inherit";

class A {
  getName() {
    return "yycf";
  }
  getAge() {
    return 18;
  }
}

class B {
  getAddress() {
    return "hangzhou";
  }
  getIdCard() {
    return "420683";
  }
}

describe.each([[A, B]])(
  "test  mix( %o ) equal %o)",
  (A, B) => {
    test(`return correct order`, () => {
      let Mix = mix(A, B);
      let instance: any = new Mix();
      expect(instance.getName()).toEqual("yycf");
      expect(instance.getAddress()).toEqual("hangzhou");
    });
  },
  5000
);
