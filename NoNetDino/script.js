const dino = document.querySelector('.dino');
const background = document.querySelector('.bg');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
  if (event.code ===  'Space') {
    //console.log("bar");
    if (!isJumping) {   // Se não estiver pulando, torna true
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval)   // Para de subir

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);    // Para de descer
          isJumping = false;

        } else {
          position -= 20;   // Descendo
          dino.style.bottom = position + 'px';
        }
      }, 20);

    } else {
      position += 20;     // Subindo
      dino.style.bottom = position + 'px';
    }
  }, 20);   // 20: velocidade
}

function createTree() {
  const tree = document.createElement('div');
  let treePosition = 2000;
  let randomTime = Math.random() * 6000;

  tree.classList.add('tree');
  tree.style.left = 2000 + 'px';
  background.appendChild(tree);

  let leftInterval = setInterval(() => {
    if (treePosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(tree);

    } else if (treePosition > 0 && treePosition < 60 && position < 60) {
      // Game Over
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';

    } else {
      treePosition -= 10;
      tree.style.left = treePosition + 'px';
    }
  }, 20);

  setTimeout(createTree, randomTime)
}

createTree();
document.addEventListener('keyup', handleKeyUp);
