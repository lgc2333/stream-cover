document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    /** @type {NodeListOf<HTMLSpanElement>} */
    const elems = document.querySelectorAll('span#time-now')
    const d = new Date()
    const str =
      `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` +
      ` ${d.getHours()}` +
      `:${d.getMinutes().toString().padStart(2, '0')}` +
      `:${d.getSeconds().toString().padStart(2, '0')}`
    elems.forEach((span) => {
      span.textContent = str
    })
  }, 500)
})
