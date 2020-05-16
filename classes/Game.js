class Game {
  constructor() {
    this.player1 = new Player();
    this.obstacle1 = new Obstacle();
    // this.obstacle2 = new Obstacle();
    // this.obstacle3 = new Obstacle();
    // this.obstacle4 = new Obstacle();
    // this.obstacle5 = new Obstacle();
  }

  // playerHitObstacle = () => {
  //   const borderPlayer = document.querySelector('#player').getBoundingClientRect();
  //   const borderObstacle = document.querySelector('.obstacle').getBoundingClientRect();

  //   if (borderPlayer.bottom === borderObstacle.top || 
  //       borderPlayer.top === borderObstacle.bottom ||
  //       borderPlayer.left === borderObstacle.right || 
  //       borderPlayer.right === borderObstacle.left) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}