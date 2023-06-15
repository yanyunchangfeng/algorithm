/**
 * [deepClone 对象的深度克隆]
 * @param {[object Object]} obj [要深度拷贝的源对象]
 * @return {[object Object]}
 */
declare const deepClone: (obj: any, hash?: WeakMap<object, any>) => any;
export default deepClone;
