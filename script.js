

const king = document.querySelector('.chess-piece')
const squares = document.querySelectorAll(".square")

king.addEventListener('dragstart', dragStart)

squares.forEach(square => {
  square.addEventListener("dragenter", dragEnter)
  square.addEventListener("dragleave", dragLeave)
  square.addEventListener("dragover", dragOver)
  square.addEventListener("dragend", dragEnd)
  square.addEventListener("drop", dragDrop)
})

let beingDragged;

function dragStart(e) {
  beingDragged = e.target
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.target.classList.add("highlight")
}

function dragLeave(e) {
  e.target.classList.remove('highlight')
}

function dragDrop(e) {  
  e.target.append(beingDragged)
  e.target.classList.remove("highlight")
}

function dragEnd(e) {
  setTimeout(() => e.target.classList.remove("target"), 1)
}