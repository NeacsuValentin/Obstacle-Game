class Obstacle{
  constructor(){
    this.div = Obstacle.displayObstacle();
  }

  static displayObstacle(){
    const div = document.createElement('div');
    div.classList.add('obstacle');
    const { style } = div;
    style.width = "20px";
    style.height = "20px";
    style.backgroundColor = "yellow";
    style.position = "absolute";
    style.top = `${Math.floor(Math.random()*19)*20}px`;
    style.left = `${Math.floor(Math.random()*18)*20}px`;

    document.querySelector('#gameContainer').appendChild(div);
  }
}