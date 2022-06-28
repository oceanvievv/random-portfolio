(function buttonHandler() {
  let button = document.getElementById("filterButton")

  button.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY

    button.style.setProperty('--mouse-x', x + "px")
    button.style.setProperty('--mouse-y', y + "px")
  })
})()