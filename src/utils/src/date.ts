import add from 'date-fns/add';

// get current year for Footer, and other places

function formatYear(year: Date): string {
  try {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(year);
  } catch (err) {
    return year.toString();
  }
}

export class DateUtils extends Date {
  static getCurrentDateTime(date: Date): string {
    const DATE = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);

    return DATE;
  }

  static getCurrentYear(): string {
    try {
      return formatYear(new Date());
    } catch (e) {
      return '2023';
    }
  }
  static getNextYear(): string {
    try {
      const nextYear = add(new Date(), { years: 1 });
      return formatYear(nextYear);
    } catch (e) {
      return formatYear(new Date());
    }
  }
  static formatDate(date: string): string {
    const turnStringToDate = new Date(date);
    if (isNaN(turnStringToDate.getTime())) {
      return date;
    }
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(turnStringToDate);
  }
}
