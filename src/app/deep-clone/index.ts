/**
 * [deepClone 对象的深度克隆]
 * @param {[object Object]} obj [要深度拷贝的源对象]
 * @return {[object Object]}
 */
//使用泛型类型函数,定义泛型接口
// 我们可能想把泛型参数当作整个接口的一个参数，这样接口里的其它成员也能知道这个参数的类型了。
export interface deepCloneFn<T>{
    (arg:T):T
}
const deepClone:deepCloneFn <any> = <T> (arg: T): T => {
   return JSON.parse(JSON.stringify(arg))
}
export default deepClone;

 
