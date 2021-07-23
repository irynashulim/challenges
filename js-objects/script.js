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
