/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

 const notebook = {
    name: "Study Notebook",
    color: "brown",
    pageNum: 360,
    measures: {
        topBottom: 20,
        leftRight: 30,
    },
    pageFull: false,
  writeToPage: function (pageStatus) {
    this.pageFull = pageStatus;
  },
    newMesures: function (topBottom, leftRight) {
        this.measures.topBottom = topBottom;
        this.measures.leftRight = leftRight;
      },
};

console.log("the notebook object:", notebook);
console.log("the pageNum value:", notebook.pageNum);
console.log("the pageNum value:", notebook["pageNum"]);

/**
 * Practice: Making methods
 *
 * - Create a method for object property color.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

 const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    newColor: function (colorStatus) {
      this.color = colorStatus
    },
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  console.log("backpack color before:", backpack.color);
  backpack.newColor("red");
  console.log("backpack color after:", backpack.color);

  