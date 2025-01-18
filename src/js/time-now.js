document.addEventListener('DOMContentLoaded', () => {
  const task = () => {
    /** @type {NodeListOf<HTMLSpanElement>} */
    const elems = document.querySelectorAll('span#time-now')
    const d = new Date()

    const year = `${d.getFullYear()}`
    const yearShort = year.slice(-2)
    const month = `${d.getMonth() + 1}`
    const monthPad = month.padStart(2, '0')
    const date = `${d.getDate()}`
    const datePad = date.padStart(2, '0')
    const hours = `${d.getHours()}`
    const hoursPad = hours.padStart(2, '0')
    const minutes = `${d.getMinutes()}`
    const minutesPad = minutes.padStart(2, '0')
    const seconds = `${d.getSeconds()}`
    const secondsPad = seconds.padStart(2, '0')

    elems.forEach((e) => {
      e.textContent = (e.dataset.format || 'YYYY-mm-dd HH:MM:SS')
        .replaceAll('YYYY', year)
        .replaceAll('YY', yearShort)
        .replaceAll('mm', monthPad)
        .replaceAll('m', month)
        .replaceAll('dd', datePad)
        .replaceAll('d', date)
        .replaceAll('HH', hoursPad)
        .replaceAll('H', hours)
        .replaceAll('MM', minutesPad)
        .replaceAll('M', minutes)
        .replaceAll('SS', secondsPad)
        .replaceAll('S', seconds)
    })
  }

  setInterval(task, 500)
  task()
})
