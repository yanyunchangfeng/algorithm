/**
 * [unique hash算法 数组去重 效率最高]
 * @params {[object Array]} arr [要去重的数组]
 * @return {[object Array]}     [新的去重后的数组]
 */
export interface uniqueFn<T> {
    (arr: T): T;
}
declare const unique: uniqueFn<any[]>;
export default unique;
