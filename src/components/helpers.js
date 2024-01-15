export const generateId = () => {
  const timestamp = Date.now().toString(36); 
  const randomString = Math.random().toString(36).substring(2, 8); 
  return timestamp + randomString;
}

export const getDate = () => { 
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    hour12: true
  });

  const formattedDate = formatter.format(now);
  return formattedDate;
}