/**
 * [deepClone 对象的深度克隆]
 * @param {[object Object]} obj [要深度拷贝的源对象]
 * @return {[object Object]}
 */

const deepClone = (obj: object) => {
     return JSON.parse(JSON.stringify(obj));
 };
export default deepClone;
