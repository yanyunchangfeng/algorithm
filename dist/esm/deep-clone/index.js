/**
 * [deepClone 对象的深度克隆]
 * @param {[object Object]} obj [要深度拷贝的源对象]
 * @return {[object Object]}
 */
//使用泛型类型函数,定义泛型接口
// 我们可能想把泛型参数当作整个接口的一个参数，这样接口里的其它成员也能知道这个参数的类型了。
var deepClone = function (obj, hash) {
    if (hash === void 0) { hash = new WeakMap(); }
    // 判断obj是undefined 还是null
    if (obj == null)
        return obj;
    if (obj instanceof Date)
        return new Date(obj);
    if (obj instanceof RegExp)
        return new RegExp(obj);
    if (typeof obj !== "object")
        return obj; // 不是对象就不用拷贝了
    // 要不是数组 要不是对象
    if (hash.has(obj))
        return hash.get(obj); //如果weakMap中有对象就直接返回
    var cloneObj = new obj.constructor();
    // 如果是对象把他放到weakMap中，如果在拷贝这个对象这个对象就存在了 直接返回这个对象即可
    hash.set(obj, cloneObj);
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
};
export default deepClone;
