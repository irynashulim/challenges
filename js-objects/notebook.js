/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Notebook {
    constructor(
        // Defines parameters:
        name,
        color,
        pageNum,
        measuresTopB,
        measuresLeftR,
        pageFull
    ) {
        // Define properties:
        this.name = name;
        this.color = color;
        this.pageNum = pageNum;
        this.measures = {
            topBottom: measuresTopB,
            leftRight: measuresLeftR,
        };
        this.pageFull = pageFull; 
    }
    // Add methods like normal functions:
    writeToPage(pageStatus) {
        this.pageFull = pageStatus;
      }
        newMesures(topBottom, leftRight) {
            this.measures.topBottom = topBottom;
            this.measures.leftRight = leftRight;
          }
}

export default Notebook;