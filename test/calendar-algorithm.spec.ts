import { default as getMothData } from "src/calendar-algorithm";

describe.each([
  [
    2020,
    5,
    [
      { thisYear: 2020, thisMonth: 4, date: -4, showDate: 26 },
      { thisYear: 2020, thisMonth: 4, date: -3, showDate: 27 },
      { thisYear: 2020, thisMonth: 4, date: -2, showDate: 28 },
      { thisYear: 2020, thisMonth: 4, date: -1, showDate: 29 },
      { thisYear: 2020, thisMonth: 4, date: 0, showDate: 30 },
      { thisYear: 2020, thisMonth: 5, date: 1, showDate: 1 },
      { thisYear: 2020, thisMonth: 5, date: 2, showDate: 2 },
      { thisYear: 2020, thisMonth: 5, date: 3, showDate: 3 },
      { thisYear: 2020, thisMonth: 5, date: 4, showDate: 4 },
      { thisYear: 2020, thisMonth: 5, date: 5, showDate: 5 },
      { thisYear: 2020, thisMonth: 5, date: 6, showDate: 6 },
      { thisYear: 2020, thisMonth: 5, date: 7, showDate: 7 },
      { thisYear: 2020, thisMonth: 5, date: 8, showDate: 8 },
      { thisYear: 2020, thisMonth: 5, date: 9, showDate: 9 },
      { thisYear: 2020, thisMonth: 5, date: 10, showDate: 10 },
      { thisYear: 2020, thisMonth: 5, date: 11, showDate: 11 },
      { thisYear: 2020, thisMonth: 5, date: 12, showDate: 12 },
      { thisYear: 2020, thisMonth: 5, date: 13, showDate: 13 },
      { thisYear: 2020, thisMonth: 5, date: 14, showDate: 14 },
      { thisYear: 2020, thisMonth: 5, date: 15, showDate: 15 },
      { thisYear: 2020, thisMonth: 5, date: 16, showDate: 16 },
      { thisYear: 2020, thisMonth: 5, date: 17, showDate: 17 },
      { thisYear: 2020, thisMonth: 5, date: 18, showDate: 18 },
      { thisYear: 2020, thisMonth: 5, date: 19, showDate: 19 },
      { thisYear: 2020, thisMonth: 5, date: 20, showDate: 20 },
      { thisYear: 2020, thisMonth: 5, date: 21, showDate: 21 },
      { thisYear: 2020, thisMonth: 5, date: 22, showDate: 22 },
      { thisYear: 2020, thisMonth: 5, date: 23, showDate: 23 },
      { thisYear: 2020, thisMonth: 5, date: 24, showDate: 24 },
      { thisYear: 2020, thisMonth: 5, date: 25, showDate: 25 },
      { thisYear: 2020, thisMonth: 5, date: 26, showDate: 26 },
      { thisYear: 2020, thisMonth: 5, date: 27, showDate: 27 },
      { thisYear: 2020, thisMonth: 5, date: 28, showDate: 28 },
      { thisYear: 2020, thisMonth: 5, date: 29, showDate: 29 },
      { thisYear: 2020, thisMonth: 5, date: 30, showDate: 30 },
      { thisYear: 2020, thisMonth: 5, date: 31, showDate: 31 },
      { thisYear: 2020, thisMonth: 6, date: 32, showDate: 1 },
      { thisYear: 2020, thisMonth: 6, date: 33, showDate: 2 },
      { thisYear: 2020, thisMonth: 6, date: 34, showDate: 3 },
      { thisYear: 2020, thisMonth: 6, date: 35, showDate: 4 },
      { thisYear: 2020, thisMonth: 6, date: 36, showDate: 5 },
      { thisYear: 2020, thisMonth: 6, date: 37, showDate: 6 },
    ],
  ],
])(
  "test  getMonthData( %o ) equal %o)",
  (Y, M, result) => {
    test(`return correct date`, () => {
      let data = getMothData(Y, M);
      expect(data).toEqual(result);
    });
  },
  5000
);
