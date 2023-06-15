/**
 * [copyProperties 类的深度拷贝]
 * @param {[object object]} target [要拷贝的目标对象]
 * @param {[object object]} source [要拷贝的原对象]
 * @return {void}
 */
const copyProperties = (target, source) => {
    for (const key of Reflect.ownKeys(source)) {
        if (key !== "constructor" && key !== "prototype" && key !== "name") {
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
};
// 类的多重继承方法
const mix = (...mixins) => {
    class Mix {
    }
    for (const mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
};
export { copyProperties, mix };
//# sourceMappingURL=index.js.map