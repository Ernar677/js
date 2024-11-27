function getNumberOfInputs() {
    return Number(prompt("Неше сан енгізесіз?"));
}

function getNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        let number = parseFloat(prompt((i + 1) + "-санды енгізіңіз:"));
        numbers.push(number);
    }
    return numbers;
}

function countNegativeNumbers(numbers) {
    let count = 0;
    numbers.forEach(number => {
        if (number < 0) {
            count++;
        }
    });
    return count;
}

function countEvenNumbers(numbers) {
    let count = 0;
    numbers.forEach(number => {
        if (number % 2 === 0) {
            count++;
        }
    });
    return count;
}

function countOddNumbers(numbers) {
    let count = 0;
    numbers.forEach(number => {
        if (number % 2 !== 0) {
            count++;
        }
    });
    return count;
}

function main() {
    let count = getNumberOfInputs();
    let numbers = getNumbers(count);
    
    let negativeCount = countNegativeNumbers(numbers);
    let evenCount = countEvenNumbers(numbers);
    let oddCount = countOddNumbers(numbers);

    alert("Нәтиже:\n" +
          "Кері сандар саны: " + negativeCount + "\n" +
          "Жұп сандар саны: " + evenCount + "\n" +
          "Тақ сандар саны: " + oddCount);
}

