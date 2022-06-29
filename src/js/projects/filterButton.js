(function buttonsHandler() {
  const buttons = document.getElementsByClassName("projects-nav__filter");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousemove', (e) => {
      let x = e.offsetX
      let y = e.offsetY

      buttons[i].style.setProperty('--mouse-x', x + "px")
      buttons[i].style.setProperty('--mouse-y', y + "px")
    })
  }
})()