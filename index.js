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
  let distanceCovered = { x: 0, y: 0 };

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

  Object.defineProperty(this, "distanceCovered", {
    get: function () {
      return distanceCovered;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid ");
      distanceCovered = value;
    },
  });
}

const sedan = new Car(40, 50);
console.log(sedan.distanceCovered);
sedan.distanceCovered = { x: 2, y: 3 };
sedan.drive();

//--------------------------------------

// Stopwatch

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) {
      throw new Error("Stopwatch already started !");
    }
    running = true;
    startTime = new Date();
  };

  this.end = () => {
    if (!running) {
      throw new Error("Stopwatch already stopped");
    }
    running = false;
    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

let watch = new Stopwatch();
watch.start();
watch.stop();
watch.duration();
