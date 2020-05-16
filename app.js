const gameContainer = document.createElement('div');
gameContainer.setAttribute('id', 'gameContainer');
gameContainer.style.width = '400px';
gameContainer.style.height = '400px';
gameContainer.style.top = '20px';
gameContainer.style.left = '20px';
gameContainer.style.backgroundColor = 'lightgrey';
gameContainer.style.position = 'relative';

document.body.appendChild(gameContainer);

// const player1 = new Player();

// const obstacle1 = new Obstacle();
// const obstacle2 = new Obstacle();
// const obstacle3 = new Obstacle();
// const obstacle4 = new Obstacle();
// const obstacle5 = new Obstacle();

const game = new Game();