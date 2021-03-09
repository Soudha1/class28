class SlingShot{
    constructor(bodyA, localPointB){
        var options = {
            bodyA: bodyA,
            pointB: localPointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=localPointB;
        World.add(world, this.sling);
    }
    fly(body){
        this.sling.bodyA = null ;
     
    }
    display(){
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            
    }
    
}