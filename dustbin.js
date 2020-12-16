class Rect{
    constructor(x,y,w,h,color){
        var options={
            isStatic: true,
            friction:10
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.color=color
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}