const renderTime = document.querySelector(".time");

const getTime = setInterval(() => {

  const now = new Date();
  const HH = String(now.getHours()).padStart(2, '0');
  const MM = String(now.getMinutes()).padStart(2, '0');
  const SS = String(now.getSeconds()).padStart(2, '0');

  const amPm = (HH < 12) ? 'AM': 'PM';

  renderTime.innerHTML = `${HH}:${MM}:${SS} ${amPm}`

},1000)

