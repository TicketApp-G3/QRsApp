import moment from 'moment-timezone';

export const timeFormatter = (time) => {
  return moment.tz(time, 'America/Argentina/Buenos_Aires').format('HH:mm [hs]');
};

export const dateTimeFormatter = (dateTime) => {
  return moment
    .tz(dateTime, 'America/Argentina/Buenos_Aires')
    .format('DD [de] MMMM [de] YYYY [a las] HH:mm [hs]');
};

export const dateFormatter = (date) => {
  return moment.tz(date, 'America/Argentina/Buenos_Aires').format('DD/MM/YYYY');
};
