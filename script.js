const renderTime = document.querySelector(".time");

const getTime = setInterval(() => {
  const now = new Date();
  const HH = String(now.getHours());
  const MM = String(now.getMinutes());
  const SS = String(now.getSeconds());
  renderTime.innerHTML = `${HH}:${MM}:${SS}`

},1000)

