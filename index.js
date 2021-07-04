// Object Literal

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("drawing!");
  },
};

circle.draw();

//-----------------------------------

// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Its drawing now");
    },
  };
}

const newCircle = createCircle(1);
newCircle.draw();

//------------------------------------

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.computeOptimalLocation = function (factor) {
    //...
  };
  this.draw = function () {
    this.computeOptimalLocation(0.1);
    console.log("in constructor function");
  };
}

const constructorCircle = new Circle(1);
constructorCircle.draw();

//-------------------------------------

// Adding and removing Object properties
// we can add and remove object properties after the object is created...

const anotherCircle = new Circle(10);
anotherCircle.location = { x: 1 };
const propertyName = "border-width";
anotherCircle[propertyName] = 2;

delete anotherCircle.location;

//---------------------------------------

// Enumurating Properties

for (let key in anotherCircle) {
  if (typeof anotherCircle[key] !== "function")
    console.log(key, anotherCircle[key]);
}

let keys = Object.keys(anotherCircle);
console.log(keys);

if ("radius" in anotherCircle) {
  console.log("Radius property exists");
}

//-----------------------------------------

// Data Abstraction

// we are able to access this method of the Object..
anotherCircle.computeOptimalLocation();

// hence we should implement the Data abstraction concept here...
// to show the essentials and hide the rest.

function Car(width, height) {
  this.width = width;
  this.height = height;

  forward = () => {
    console.log("move forward!");
  };

  backward = () => {
    console.log("Move Backword!");
  };

  this.drive = () => {
    backward();
    console.log("Lets drive now!");
    forward();
  };
}

let sedan = new Car(40, 50);
sedan.drive();
