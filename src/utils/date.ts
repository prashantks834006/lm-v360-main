import moment from 'moment';

export const isToday = (date: string): boolean =>
  moment(date).isBetween(moment().startOf('day'), moment().endOf('day'));

export const isTomorrow = (date: string): boolean =>
  moment(date).isBetween(moment().add(1, 'day').startOf('day'), moment().add(1, 'day').endOf('day'));

export const isNextWeek = (date: string): boolean =>
  moment(date).isBetween(moment().add(7, 'day').startOf('day'), moment().add(7, 'day').endOf('day'));

export const isNextMonth = (date: string): boolean =>
  moment(date).isBetween(moment().add(1, 'month').startOf('day'), moment().add(1, 'month').endOf('day'));

export const isNextYear = (date: string): boolean =>
  moment(date).isBetween(moment().add(1, 'year').startOf('day'), moment().add(1, 'year').endOf('day'));

export const isNext = (date: string, period: string): boolean => {
  switch (period) {
    case 'today':
      return isToday(date);
    case 'tomorrow':
      return isTomorrow(date);
    case 'nextWeek':
      return isNextWeek(date);
    case 'nextMonth':
      return isNextMonth(date);
    case 'nextYear':
      return isNextYear(date);
    default:
      return false;
  }
};

export const isPast = (date: string): boolean => moment(date).isBefore(moment());

export const isFuture = (date: string): boolean => moment(date).isAfter(moment());

export const isBetween = (date: string, from: string, to: string): boolean =>
  moment(date).isBetween(moment(from), moment(to));

export const isSameOrBefore = (date: string, other: string): boolean => moment(date).isSameOrBefore(moment(other));

export const isSameOrAfter = (date: string, other: string): boolean => moment(date).isSameOrAfter(moment(other));
