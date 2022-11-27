/**
 * [ranNum 生成随机数的方法]
 * @param  {number} min  [最小范围]
 * @param  {number} max  [最大范围]
 * @return {number} [生成一个min-max 的随机数]
 */
const ranNum = (min: number, max: number): number => {
    return Math.trunc(Math.random() * (max - min) + min );
};

export default ranNum;
