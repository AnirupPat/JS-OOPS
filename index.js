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
  this.draw = function () {
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
