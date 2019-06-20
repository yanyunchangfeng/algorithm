declare const _default: {
    bubbleSort: (arr: any[]) => void;
    quickSort: (arr: any[]) => any[];
    insertSort: (arr: any[]) => void;
    unique: import("./unique").uniqueFn<any[]>;
    deepClone: import("./deep-clone").deepCloneFn<any>;
    isPrime: (num: number) => boolean;
    getMonthData: (year?: number, month?: number) => import("./calendar-algorithm").DateRet[];
    ranNum: (min: number, max: number) => number;
    genColor: import("./color-util").genColorFn<any[]>;
    copyProperties: (target: object, source: object) => void;
    mix: (...mixins: any[]) => any;
};
export default _default;
