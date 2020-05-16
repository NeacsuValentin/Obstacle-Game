 /*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
  constructor() {
    this.div = Player.display();
    this.move();
  }

  // logica de miscare
  move() {
    //
   // console.log('miscare', this)
    document.addEventListener('keydown', (event) => {
      const border = document.querySelector('#gameContainer').getBoundingClientRect();
      const obst = document.querySelector('.obstacle').getBoundingClientRect();

      const player = this.div.getBoundingClientRect();

      const oldTop = parseInt(this.div.style.top);
      const oldLeft = parseInt(this.div.style.left);
      // aici avem un arrow function, 
      // aceste arrow function sunt speciale pentru ca copiaza contextul de mai sus 
      // (in cazul nostru, this din metoda miscare())
      const move = this.playerOutsideOfContainer();
      // const obstacle = this.playerHitObstacle();
      // console.log(obstacle);
      if (move === false && event.keyCode === 40) { // key down
        if(border.bottom !== oldTop + 20) { // blocam iesirea din gameContainer in partea de jos
          // logica de miscare
          this.div.style.top = `${oldTop + 20}px`;
        }
      } else if (move === false && event.keyCode === 38) { // key up
        if(border.top !== oldTop){ // blocam iesirea din gameContainer in partea de sus
          this.div.style.top = `${oldTop - 20}px`;
        }
      } else if (move === false && event.keyCode === 37) { // key left
          if(border.left !== oldLeft){ // blocam iesirea din gameContainer in partea stanga
          this.div.style.left = `${oldLeft - 20}px`;
      }
      } else if (move === false && event.keyCode === 39) { // key right
          if(border.right !== oldLeft + 20){ // blocam iesirea din gameContainer in partea stanga
          this.div.style.left = `${oldLeft + 20}px`;
          }
      }
    })
  }

  // verificam daca player atinge marginile
  playerOutsideOfContainer = () => {
     
      const oldTop = parseInt(this.div.style.top);
      const oldLeft = parseInt(this.div.style.left);

      const border = document.querySelector('#gameContainer').getBoundingClientRect();

      if(oldTop < border.top || oldTop + 20 > border.bottom || oldLeft < border.left || oldLeft + 20 > border.right) {
        return true;
      } else {
        return false;
      }
  }
  
  // verificam daca player atinge obstacole
  playerHitObstacle = () => {
    const borderPlayer = document.querySelector('#player').getBoundingClientRect();
    const borderObstacle = document.querySelector('.obstacle').getBoundingClientRect();

    // console.log(borderPlayer)
    if ((borderPlayer.bottom === borderObstacle) ||
        (borderPlayer.top === borderObstacle) ||
        (borderPlayer.left === borderObstacle) || 
        (borderPlayer.right === borderObstacle)) {



    // if ((borderPlayer.bottom === borderObstacle.top && borderPlayer.left === borderObstacle.left) ||
    //     (borderPlayer.bottom === borderObstacle.top && borderPlayer.right === borderObstacle.right) ||
    //     (borderPlayer.top === borderObstacle.bottom && borderPlayer.left === borderObstacle.left) ||
    //     (borderPlayer.top === borderObstacle.bottom && borderPlayer.right === borderObstacle.right) ||
    //     (borderPlayer.left === borderObstacle.right && borderPlayer.top === borderObstacle.top) || 
    //     (borderPlayer.left === borderObstacle.right && borderPlayer.bottom === borderObstacle.bottom) || 
    //     (borderPlayer.right === borderObstacle.left && borderPlayer.top === borderObstacle.top) ||
    //     (borderPlayer.right === borderObstacle.left && borderPlayer.bottom === borderObstacle.bottom)) {{}
      return true;
    } else {
      return false;
    }



  }

  // afisarea div-ului
  static display() {
    const div = document.createElement('div');
    div.setAttribute('id', 'player');
    const { style } = div;
    style.width = "20px";
    style.height = "20px";
    style.borderRadius = '50%';
    style.backgroundColor = "#37f";
    style.position = "absolute";
    style.top = "40px"
    style.left = "40px"

    // document.querySelector('#gameContainer').appendChild(div);
    document.body.appendChild(div);
      
    return div;
  }
  
  
}