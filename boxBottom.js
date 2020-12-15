class Bottom{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.bottom=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bottom);
        this.image=loadImage("dustbingreen.png")

    }

    display(){
        var bottomPos=this.bottom.position
        imageMode (CENTER);
        image(this.image,bottomPos.x,bottomPos.y,170,170);
        
    }

}