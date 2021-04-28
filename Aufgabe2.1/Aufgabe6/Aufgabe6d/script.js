"use strict";
function chess() {
    let chessboard = "";
    let rowStartsWithHashtag = false;
    let rows = 8;
    let cols = 8;
    for (let i = 0; i < rows; i++) {
        let nextCharIsHashtag = rowStartsWithHashtag;
        for (let j = 0; j < cols; j++) {
            chessboard += nextCharIsHashtag ? "#" : " ";
            nextCharIsHashtag = !nextCharIsHashtag;
        }
        rowStartsWithHashtag = !rowStartsWithHashtag;
        chessboard += "\n";
    }
    console.log(chessboard);
    return chessboard;
}
chess();
//# sourceMappingURL=script.js.map