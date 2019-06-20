/**
 * [deepClone 对象的深度克隆]
 * @param {[object Object]} obj [要深度拷贝的源对象]
 * @return {[object Object]}
 */
export interface deepCloneFn<T> {
    (arg: T): T;
}
declare const deepClone: deepCloneFn<any>;
export default deepClone;
