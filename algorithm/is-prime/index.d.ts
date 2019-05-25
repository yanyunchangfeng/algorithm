/** 函数记忆: 让函数记住曾经处理过的参数及其对应的处理结果
 * 为什么： 避免重复计算
 * 何时： 只要一个函数，有可能处理大量重复的数据时
 * 如何: 利用闭包，为函数添加一个受保护的关联数组
 *       关联数组中保存曾经计算过的参数和处理结果*/
/**
 * [isPrime 带有记忆功能的判断质数方法]
 * @params {number} num 传入的参数
 * @return {boolean}
 */
declare const isPrime: (num: number) => boolean;
export default isPrime;
