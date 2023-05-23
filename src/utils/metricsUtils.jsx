export const splitDateRangeInNDates = (timeFrom, timeTo, N) => {
  const fromDate = new Date(timeFrom);
  const toDate = new Date(timeTo);
  console.log(toDate);
  const interval = (toDate - fromDate) / N;
  const dates = [];
  console.log('INTERVALO: ', interval);
  dates.push(fromDate.toISOString());

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < N; i++) {
    const newDate = new Date(fromDate.getTime() + interval * i);
    dates.push(newDate.toISOString());
  }

  dates.push(toDate.toISOString());

  return dates;
};
