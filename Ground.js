class Ground {

constructor() {

var options = {isStatic: true}

this.ground = Bodies.rectangle(450,550,1500,20,options)
World.add(world, this.ground)
    
}

display() {

noStroke();
fill("yellow");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,900,20);

}










}