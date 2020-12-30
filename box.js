class Box{
    constructor(x,y,width,height){
        var options = {isStatic: true};
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;

        this.body.shapeColor = rgb(233, 22, 64);
        
        push();

        translate(pos.x, pos.y);
        fill("red");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);


        pop();
        
        }
}