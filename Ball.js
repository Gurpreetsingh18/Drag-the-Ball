class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,20,20);
    var options ={
      isStatic: true,
      restitution: 0.7,
      friction: 0.1,
      density: 1.0
      
    }
  }

  display() {
    super.display();
    rectMode(CENTER);
    rect(ball.body.position.x,ball.body.position.y,20,20);
    ball.image = loadImage("images/bird1.png");
  }
}