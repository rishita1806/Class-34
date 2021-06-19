class Rope{
    constructor(bodyA,pointB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        length : 350,
        stiffness: 1.2
    } 
    this.pointB = pointB;
    this.body = Constraint.create(options);
    World.add(world,this.body);
    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("black");
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}