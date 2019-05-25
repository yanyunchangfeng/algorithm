"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMonthData = function (year, month) {
    // 定义ret变量用来保存最后的结果集
    var ret = [];
    if (!year || !month) {
        var date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1; // 月份修正
    }
    // 获取当前月的第一天，用于计算上月预留天数
    var firstDayOfMonth = new Date(year, month - 1, 1);
    var preMonthDay = firstDayOfMonth.getDay();
    // 获取上月的最后一天，本月第0天即为上月最后一天
    var lastDayOfLastMonth = new Date(year, month - 1, 0);
    var lastDateOfLastMonth = lastDayOfLastMonth.getDate();
    // 获取本月最后一天，下月第0天即为本月最后一天
    var lastDayOfMonth = new Date(year, month, 0);
    var lastDateOfMonth = lastDayOfMonth.getDate();
    for (var i = 0; i < 6 * 7; i++) {
        // 获取当前排序的日期数,+1是为了修正
        var thisYear = year, thisMonth = month, date = i + 1 - preMonthDay, showDate = date;
        if (date <= 0) {
            // 如果date小于等于0，则说明是上月预留天数，月和日都要加以修正
            thisMonth -= 1;
            showDate = date + lastDateOfLastMonth;
        }
        else if (date > lastDateOfMonth) {
            // 如果date大于本月最后一天说明为下月预留天数，月和日加以修正
            thisMonth += 1;
            showDate = date - lastDateOfMonth;
        }
        // 修正年月，因为当月份为1时，上月减1为0,需要同时修正月和年
        // 当月份为12时，下月加1为13,需要同时修正年和月
        if (thisMonth === 13) {
            thisMonth = 1, thisYear += 1;
        }
        if (thisMonth === 0) {
            thisMonth = 12, thisYear -= 1;
        }
        ret.push({
            thisYear: thisYear,
            thisMonth: thisMonth,
            date: date,
            showDate: showDate,
        });
    }
    return ret;
};
exports.default = getMonthData;
//# sourceMappingURL=index.js.map