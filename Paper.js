class Paper{

constructor(){

var options = {

restitution : 0.2

}


this.body = Bodies.circle(200,50,5,options)

World.add(world,this.body)




}

display(){

var pos = this.body.position


circle(pos.x,pos.y,20)


}

}