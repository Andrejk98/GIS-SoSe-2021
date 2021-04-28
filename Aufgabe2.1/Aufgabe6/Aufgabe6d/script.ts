function chess(): String {
    let chessboard: string = "";
    let rowStartsWithHashtag: boolean = false;
    let rows: number = 8;
    let cols: number = 8;

    for (let i: number = 0; i < rows; i++) {
        let nextCharIsHashtag: boolean = rowStartsWithHashtag;

        for (let j: number = 0; j < cols; j++) {
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