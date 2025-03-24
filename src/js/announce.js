document.addEventListener('DOMContentLoaded', async () => {
  if (globalThis.announceData) {
    const containerEl = document.getElementById('announce')
    Object.entries(globalThis.announceData).forEach(([key, value]) => {
      const groupContainerEl = document.createElement('div')
      groupContainerEl.id = `announce-${key}`

      value.forEach((x) => {
        const el = document.createElement('div')
        el.innerText = x.join('\n')
        groupContainerEl.appendChild(el)
      })

      containerEl.appendChild(groupContainerEl)
    })
  }

  if (globalThis.copyrightAnnounceData) {
    const el = document.getElementById('right-announce-copyright')
    el.innerText = globalThis.copyrightAnnounceData.join('\n')
  }
})
