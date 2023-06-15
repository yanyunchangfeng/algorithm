/**
 * [copyProperties 类的深度拷贝]
 * @param {[object object]} target [要拷贝的目标对象]
 * @param {[object object]} source [要拷贝的原对象]
 * @return {void}
 */
declare const copyProperties: (target: object, source: object) => void;
declare const mix: (...mixins: any[]) => any;
export { copyProperties, mix };
