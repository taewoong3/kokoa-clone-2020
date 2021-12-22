const clock = document.querySelector(
  '.status-bar .status-bar__column:nth-child(2) span'
)

function getClock() {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  clock.innerText = `${hour}:${minute}`
}

getClock()
setInterval(getClock, 1000)
