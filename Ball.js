class Ball {
constructor(){
var options={
    isStatic :false,
    restitution:0.3,
    friction:0.5,
    density:1.0
};
this.body = Bodies.circle(200,100,20,options);
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
     var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(50);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, 20 , 20);
        pop();
}

}