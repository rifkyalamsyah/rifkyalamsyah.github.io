// format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// format the date to ISO date time format
function formatISO(date: Date): string {
  return date.toISOString();
}

export { formatDate, formatISO };
