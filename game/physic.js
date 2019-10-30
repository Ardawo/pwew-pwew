function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
    controls.update();

    var x = ennemy1.graphic.position.x + WIDTH / 2;
    var y = ennemy1.graphic.position.y + HEIGHT / 2;


    if ( x > WIDTH ) {
      ennemy1.graphic.position.x -= x - WIDTH;
    }
    if ( y < 0 ){
      ennemy1.graphic.position.y -= y;
    }
    if ( y > HEIGHT ){
      ennemy1.graphic.position.y -= y - HEIGHT;
    }
    if ( x < 0 ){
      ennemy1.graphic.position.x -= x;
    }
    if (( x > WIDTH ) || ( y < 0 ) || ( y > HEIGHT ) || ( x < 0 ))
    {
      ennemy1.turnRight(ennemy1.direction + 180);
    }
    else {
      ennemy1.accelerate(moveDistance);
    }
    var x2 = ennemy2.graphic.position.x + WIDTH / 2;
    if (x2 > WIDTH)
    {
      ennemy2.graphic.position.x -= x2 - WIDTH;
      ennemy2.left = true;
    }
    if (x2 < 0)
    {
      ennemy2.graphic.position.x -= x2;
      ennemy2.left = false;
    }
    if (ennemy2.left)
      ennemy2.decelerate(moveDistance);
    else
      ennemy2.accelerate(moveDistance);

    ennemy1.move();
    ennemy2.move();
}
