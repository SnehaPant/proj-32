class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0,
        friction:0.04,
        density:10
    }
    this.visiblity=255
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
   
    
     console.log(this.body.speed)
     if(this.body.speed<3)
     {
      var pos =this.body.position;
   
      rectMode(CENTER)
      fill('lightblue')
       rect(pos.x, pos.y, this.width, this.height)
     
     }else{
         World.remove(world,this.body)
         this.visiblity=this.visiblity-5
         push()
         tint(255,this.visiblity)
         pop()
     } 
 }
 score(){
   if(this.visiblity<0 && this.visiblity>-105){
     score++
   }
 }
};



