/**
 * Create a class for the Backpack object type.
 */

 import Notebook from "./notebook";

 const schoolNotebook = new Notebook(
     "School Notebook",
     "pink",
     999,
     10,
     15,
     false
 );

 console.log("the school notebook object:", schoolNotebook);
 console.log("the pageNum value:", schoolNotebook.pageNum);