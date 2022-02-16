class Shape
{
    X=0;
    Y=0;
    constructor(X,Y)
    {
        this.X=X;
        this.Y=Y;
    }
    GetArea()
    {
        return 0;
    }
    GetCirumference()
    {
        return 0;
    }
    log()
    {
        console.log("Cirumference: "+this.GetCirumference()+",Area:"+this.GetArea()+",Type "+this.constructor.name);
    }

}


class Recatngle extends Shape
{
    Length=0;
    Width=0;
    constructor(X,Y,Length,Width)
    {
        if( arguments[0].constructor.name=="Recatngle")
        {
            console.log("from"+arguments[0].constructor.name)
            super(arguments[0].X, arguments[0].Y)
            this.Length=arguments[0].Length;
            this.Width=arguments[0].Width;
        }else{
        super(X,Y);
        this.Length=Length;
        if(Width==undefined)
        {
            this.Width=this.Length;
        }else{
        this.Width=Width;}
               }
    }
    GetArea()
    {
        return this.Length*this.Width;
    }
    GetCirumference()
    {
        return 2*(this.Length+this.Width)
    }

}

class Square extends Recatngle
{
    Length;
    constructor(X,Y,Length)
    {
        if(arguments[0].constructor.name=="Square")
        { 
            super(arguments[0].X, arguments[0].Y,arguments[0].Length);
            this.Length=arguments[0].Length;
         } else{
        super(X,Y,Length);
        this.Length = Length;}
    }
}


class Oval extends Shape
{
    A;
    B;
    constructor(X,Y,A,B)
    {
        if( arguments[0].constructor.name=="Oval")
        {
            super(arguments[0].X, arguments[0].Y)
            this.A=arguments[0].A;
            this.B=arguments[0].B;
        }else{
        super(X,Y)
        this.A=A;
        if(B==undefined)
        {
            this.B=this.A;
        }else{
        this.B=B;
        }
    }
    }
    GetCirumference()
    {
        return (this.A+this.B)*Math.PI
    }
    GetArea()
    {
        return this.A*this.B*Math.PI
    }
}


class Circle extends Oval
{
    R;
    constructor(X,Y,R)
    {
        if( arguments[0].constructor.name=="Circle")
        {
            super(arguments[0].X, arguments[0].Y,arguments[0].R)
            
        }else{
        super(X,Y,R)
        this.R=R;
              }
    }
}

class DrawingArea 
{
    shapes;
    constructor()
    {
       this.shapes = new Array();
    }

    addShape(shape)
    {
        this.shapes.push(shape);
    }
    
    logShapes()
    {
        for(let shape of this.shapes)
        {
            shape.log()
        }
    }
}

let myDrawingArea=new DrawingArea()
let myRectangle=new Recatngle(0,0,10,5);
let mySquare=new Square(0,0,5);
let myOval=new Oval(0,0,10,5);
let myCircle= new Circle(0,0,5);
let mynewOval=new Oval(myOval);
let mynewSquare=new Square(mySquare)
let mynewRectangle=new Recatngle(myRectangle)
let mynewCircle=new Circle(myCircle)
myDrawingArea.addShape(myRectangle)
myDrawingArea.addShape(mySquare);
myDrawingArea.addShape(myOval)
myDrawingArea.addShape(myCircle)
myDrawingArea.addShape(mynewRectangle)
myDrawingArea.addShape(mynewSquare)
myDrawingArea.addShape(mynewOval)
myDrawingArea.addShape(mynewCircle)
myDrawingArea.logShapes()
