import bubbleSort from './bubble-sort';
import quickSort from './quick-sort';
import insertSort from './insert-sort';
import ranNum from './random-number';
import isPrime from './is-prime'
import unique from './unique';
import getMonthData from './calendar-algorithm';
import color from './color-util';
import multiInherit from './multi-inherit'
export default {
    bubbleSort,
    quickSort,
    insertSort,
    unique,
    isPrime,
    getMonthData,
    ranNum,
    genColor:color.genColor,
    copyProperties:multiInherit.copyProperties,
    mix:multiInherit.mix
}
