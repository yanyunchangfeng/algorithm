"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMonthData = function (year, month) {
    //用来保存最后的结果集
    var ret = [];
    if (!year || !month) {
        var date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1; //月份修正
    }
    //获取当前月的第一天，用于计算上月预留天数
    var firstDayOfMonth = new Date(year, month - 1, 1);
    var preMonthDay = firstDayOfMonth.getDay();
    //获取上月的最后一天，本月第0天即为上月最后一天
    var lastDayOfLastMonth = new Date(year, month - 1, 0);
    var lasteDateOflastMonth = lastDayOfLastMonth.getDate();
    //获取本月最后一天，下月第0天即为本月最后一天
    var lastDayOfMonth = new Date(year, month, 0);
    var lasteDateOfMonth = lastDayOfMonth.getDate();
    for (var i = 0; i < 6 * 7; i++) {
        var thisYear = year, thisMonth = month, date = void 0, showDate = void 0;
        date = i + 1 - preMonthDay;
        showDate = date;
        if (date <= 0) {
            thisMonth -= 1;
            showDate = date + lasteDateOflastMonth;
        }
        else if (date > lasteDateOfMonth) {
            thisMonth += 1;
            showDate = date - lasteDateOfMonth;
        }
        if (thisMonth === 13) {
            thisMonth = 1, thisYear += 1;
        }
        if (thisMonth === 0) {
            thisMonth = 12, thisYear -= 1;
        }
        ret.push({
            year: year,
            month: month,
            date: date,
            showDate: showDate
        });
    }
    return ret;
};
exports.default = getMonthData;
//unit test
// console.log(getMonthData());
//# sourceMappingURL=index.js.map