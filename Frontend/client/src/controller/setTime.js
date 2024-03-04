const setTime = () => {
  const date = new Date();

  let time = {
    hours: date.getHours(),
    minuite: date.getMinutes(),
    day: date.getDay(),
    month: date.toLocaleString('default', { month: 'long' }),
    year: date.getFullYear(),
  };

  return time
};

module.exports = setTime;
