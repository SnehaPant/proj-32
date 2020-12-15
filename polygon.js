class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
         this.image=loadImage("polygon.png")
    }
    display(){
       
        imageMode(CENTER); 
         image(this.image, this.body.position.x,this.body.position.y,70,70);
       
      }
    }