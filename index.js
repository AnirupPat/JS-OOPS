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
