import moment from 'moment-timezone';

const timeZone = 'America/Argentina/Buenos_Aires';

export const timeFormatter = (time) => {
  return moment.tz(time, timeZone).format('HH:mm [hs]');
};

export const dateTimeFormatter = (dateTime) => {
  return moment
    .tz(dateTime, timeZone)
    .format('DD [de] MMMM [de] YYYY [a las] HH:mm');
};

export const hourAndMinutesFormatter = (dateTime) => {
  return moment.tz(dateTime, timeZone).format('HH:mm');
};

export const dateFormatter = (date) => {
  return moment.tz(date, timeZone).format('DD/MM/YYYY');
};
