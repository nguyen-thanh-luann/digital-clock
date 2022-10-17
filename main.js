$(document).ready(function () {
  function showTime() {
    let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seccond = date.getSeconds()
    let period = 'AM'

    if (hour >= 12) {
      period = 'PM'
    }

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    seccond = seccond < 10 ? '0' + seccond : seccond

    $('#hour').text(hour)
    $('#minute').text(minute)
    $('#second').text(seccond)
    $('#period').text(period)

    setTimeout(showTime, 1000)
  }
  showTime()
})
