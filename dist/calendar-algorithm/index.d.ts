/**
 * [getMonthData 计算日历的方法]
 * @param {number} year  [年]
 * @param {number} month [月]
 * @return {DateRet[]}   [返回的日历数据]
 */
export interface DateRet {
    year: number;
    month: number;
    date: number;
    showDate: number;
}
declare const getMonthData: (year?: number, month?: number) => DateRet[];
export default getMonthData;
