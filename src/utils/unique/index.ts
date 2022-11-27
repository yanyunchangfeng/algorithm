/**
 * [unique hash算法 数组去重 效率最高]
 * @params {[object Array]} arr [要去重的数组]
 * @return {[object Array]}     [新的去重后的数组]
 */
export interface uniqueFn<T>{
    (arr:T):T
}
const unique:uniqueFn<any[]> = <T>(arr: any[]): T[] => {
    const result: any[] = [], hash: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            result.push(arr[i]);
            hash[arr[i]] = true;
        }
    }
    return result;
 };

 export default unique
