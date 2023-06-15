/**
 * [genColor 根据指定的颜色值和数据集合，生成颜色集合 多用于Echarts条状图的颜色替换等，NiceFish系列的可视化图，就是基于当前的颜色基础值及其轮训算法]
 * @param {[object Array]} arr [传入的数据集合]
 * @return {[object Array]}    [返回生成好的颜色集合]
 */
declare const baseColor: string[];
export interface genColorFn<T> {
    (arr: T): string[];
}
declare const genColor: genColorFn<any[]>;
export { baseColor, genColor };
