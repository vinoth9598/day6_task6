class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
             return this.radius
    }
    setRadius(radius){
        this.radius=radius;

    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
    }
    toString(){
        // return (`circle radius is ${this.radius} and color of circle is ${this.color}`);
        console.log(['radius:' ,this.radius])
        console.log(['color :',this.color]);
    }
    getArea(){
        // Area of circle 3.14*(r**2)
        console.log ('Area of circle :',(Math.PI)*(this.radius**2));
    }
    getCircumference(){
         // circumference of circle is 2*3.14*r.
         console.log("Circumference of circle :",(2*(Math.PI)*(this.radius)));
    
    }
       
}

let circ=new circle(1.0,'red');
console.log(circ.radius);

let circle1=new circle(2.03);
console.log(circle1.getRadius());

circ.setRadius('3.54');
console.log(circ.getRadius());

console.log(circ.getColor());

circle1.setColor('Blue');
console.log(circle1.getColor());

// console.log(circle1.toString());
circle1.toString();
circ.getArea();
circle1.getArea();
circle1.getCircumference();