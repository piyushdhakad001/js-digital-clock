const renderTime = document.querySelector(".time");

function getTime12(){

  const now = new Date();
  let HH = String(now.getHours()).padStart(2, '0');
  const MM = String(now.getMinutes()).padStart(2, '0');
  const SS = String(now.getSeconds()).padStart(2, '0');

  const amPm = (HH < 12) ? 'AM': 'PM';
  HH = HH % 12 || 12;
   
  return `${HH}:${MM}:${SS} ${amPm}`

}

setInterval(() => {
  renderTime.textContent = getTime12();
}, 1000);
