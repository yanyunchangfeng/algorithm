/**  
 * [getMonthData 计算日历的方法]
 * @param {number} year  [年]
 * @param {number} month [月]
 * @return {DateRet[]}   [返回的日历数据]
  */
 export interface DateRet {
     year:number,
     month:number,
     date:number,
     showDate:number,
 }

 const getMonthData = (year?:number,month?:number):DateRet[] => {
     //用来保存最后的结果集
    let ret:any[] = [];
    if(!year||!month){
        let date = new Date()
        year = date.getFullYear();
        month = date.getMonth()+1; //月份修正
    }
    //获取当前月的第一天，用于计算上月预留天数
    let firstDayOfMonth = new Date(year, month-1, 1);
    let preMonthDay =  firstDayOfMonth.getDay();
    //获取上月的最后一天，本月第0天即为上月最后一天
    let lastDayOfLastMonth = new Date(year, month-1, 0);
    let lasteDateOflastMonth = lastDayOfLastMonth.getDate();
    //获取本月最后一天，下月第0天即为本月最后一天
    let lastDayOfMonth = new Date(year, month, 0);
    let lasteDateOfMonth = lastDayOfMonth.getDate();
    
    for(let i = 0;i < 6*7; i++){
        let thisYear = year , thisMonth = month,date:number,showDate:number;
        date = i+1-preMonthDay;
        showDate = date;
        if(date<=0){
            thisMonth -= 1;
            showDate = date + lasteDateOflastMonth
        }else if(date>lasteDateOfMonth){
            thisMonth += 1;
            showDate = date - lasteDateOfMonth
        }
        
        if(thisMonth === 13) {thisMonth = 1 , thisYear += 1}
        if(thisMonth === 0) {thisMonth = 12 , thisYear -= 1}
        ret.push({
            year,
            month,
            date,
            showDate
        })
    }
    return ret 
 }
 export default getMonthData

//unit test
// console.log(getMonthData());