"use strict";
function chess(_rows, _cols) {
    let chessboard = "";
    let rowStartsWithHashtag = false;
    for (let i = 0; i < _rows; i++) {
        let nextCharIsHashtag = rowStartsWithHashtag;
        for (let j = 0; j < _cols; j++) {
            chessboard += nextCharIsHashtag ? "#" : " ";
            nextCharIsHashtag = !nextCharIsHashtag;
        }
        rowStartsWithHashtag = !rowStartsWithHashtag;
        chessboard += "\n";
    }
    console.log(chessboard);
    return chessboard;
}
chess(9, 10);
//# sourceMappingURL=script.js.map