// PEGANDO TODAS AS DIVS COM CLASS KEY
const keys = document.querySelectorAll(".key")

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);

  // tecla digitada ou pressionada
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // VERIFICAR SE A TECLA EXISTE
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

// ADICIONAR A CLASS PLAYING (EFEITO DE PROFUNDIDADE)
function addPlayingClass(key) {
  key.classList.add('playing')
}

// PEGAR O KEYCODE
function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

// TOCAR O SOM
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

// REMOVER A CLASS PLAYING (EFEITO DE PROFUNDIDADE)
function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  // QUANDO CLICK NO MOUSE
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })

  //  QUANDO APERTAR UMA TECLA
  window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)