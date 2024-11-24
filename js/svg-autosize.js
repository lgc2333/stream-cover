document.addEventListener('DOMContentLoaded', () => {
  /** @type {NodeListOf<SVGGraphicsElement>} */
  const elems = document.querySelectorAll('svg[data-autosize]')
  elems.forEach((svg) => {
    const { width, height } = svg.getBBox()
    svg.setAttribute('width', width)
    svg.setAttribute('height', height)
  })
})
