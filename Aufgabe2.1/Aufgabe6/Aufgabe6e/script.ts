function chess(_rows: number, _cols: number): String {
    let chessboard: string = "";
    let rowStartsWithHashtag: boolean = false;

    for (let i: number = 0; i < _rows; i++) {
        let nextCharIsHashtag: boolean = rowStartsWithHashtag;

        for (let j: number = 0; j < _cols; j++ ) {
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