class Papper {
    constructor(x, y) {
        var options = {
            istatic:false,
            'restitution':1,
           friction:0.3,
           density:1.2
        }
        this.body = Bodies.rectangle(x, y, 50, 50 ,options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      
      display()
        var pos =this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push ();
        translate (pos.x,pos.y);
        angleMode (RADIANS);
        rotate (angle);
        rectMode(CENTER);       
        fill("pink");
        rect(0,0,this.width, this.height);
        pop ();
      }
}