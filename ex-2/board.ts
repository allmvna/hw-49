function generateChessBoard() {
    let array: string[] = [];

    for (let i: number = 1; i <= 8; i++) {
        for (let j: number = 1; j <= 8; j++) {
            array.push((i % 2 === j % 2) ? '  ' : '██');
        }
        console.log(array.join(''));
        array = [];
    }
}

generateChessBoard();