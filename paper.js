class Paper {
    constructor (x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.image=loadImage("paper.png")
    }
    display(){
        var pos = this.body.position;
        fill("pink");
        imageMode (CENTER);
        image(this.image,pos.x,pos.y,100,100);
    }
    
}