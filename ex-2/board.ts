let array: string[] = [];

for (let i: number = 1; i <= 8; i++) {
    for (let j: number = 1; j <= 8; j++) {
        if (i % 2 === j % 2) {
            array.push('  ');
        } else {
            array.push('██');
        }
    }
    console.log(array.join(''));
    array = [];
}
