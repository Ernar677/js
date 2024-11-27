let sandar = [];

while (true) {
    let san = prompt("Сан енгізіңіз:");
    san = Number(san, 10);

    if (san === 0) {
        break;
    } else if (san % 2 === 0) {
        console.log(san + " - Жұп");
        sandar.push(san);
    } else {
        console.log(san + " - Тақ");
        sandar.unshift(san);
    }
}

console.log("Сандар массивінің ұзындығы:", sandar.length);
