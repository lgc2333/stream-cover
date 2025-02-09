document.addEventListener('DOMContentLoaded', () => {
  /** @type {NodeListOf<SVGGraphicsElement>} */
  const elems = document.querySelectorAll('svg[data-autosize]')
  elems.forEach((svg) => {
    const { width, height } = svg.getBBox()

    const additionalWAttr = svg.getAttribute('data-additional-w')
    let additionalW = additionalWAttr ? parseFloat(additionalWAttr) : 0
    if (Number.isNaN(additionalW)) additionalW = 0

    const additionalHAttr = svg.getAttribute('data-additional-h')
    let additionalH = additionalHAttr ? parseFloat(additionalHAttr) : 0
    if (Number.isNaN(additionalH)) additionalH = 0

    svg.setAttribute('width', `${width + additionalW}`)
    svg.setAttribute('height', `${height + additionalH}`)
  })
})
