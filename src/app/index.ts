import bubbleSort from "./bubble-sort";
import getMonthData from "./calendar-algorithm";
import color from "./color-util";
import deepClone from "./deep-clone";
import insertSort from "./insert-sort";
import isPrime from "./is-prime";
import multiInherit from "./multi-inherit";
import quickSort from "./quick-sort";
import ranNum from "./random-number";
import unique from "./unique";

export default {
    bubbleSort,
    quickSort,
    insertSort,
    unique,
    deepClone,
    isPrime,
    getMonthData,
    ranNum,
    genColor: color.genColor,
    copyProperties: multiInherit.copyProperties,
    mix: multiInherit.mix,
};
