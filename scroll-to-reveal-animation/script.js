for (let i = 0; i <= 60; i++) {
  const box = document.createElement('div')
  box.classList.add('box')
  document.querySelector('.container').appendChild(box)
}

const randomColorBlock = document.querySelectorAll('.box')

function addColor() {
  randomColorBlock.forEach(e => {
    e.style.background = randomColor()
  })
}

function randomColor() {
  const chars = '1234567890abcdef',
        colorLength = 6
  let color = ''
  for (let i = 1; i <= colorLength; i++) {
    const rondomColors = Math.floor(Math.random() * chars.length)
    color += chars.substring(rondomColors, rondomColors+1)
  }
  return '#'+ color
}

addColor()

const boxes = document.querySelectorAll('.box')



function scrollTrigger() {
  boxes.forEach(boxxx => {
    if (boxxx.offsetTop < window.scrollY) {
      boxxx.classList.add('active')
    } else {
      boxxx.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', scrollTrigger)