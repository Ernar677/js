function compareWords (word1, word2) {
    // Сөздерді кіші әріпке түрлендіру
    const word1Lower = word1.toLowerCase();
    const word2Lower = word2.toLowerCase();

    if (word1Lower === word2Lower) {
        return "Сөздер бірдей";
    } else {
        return "Сөздер әртүрлі";
    }
}

alert(compareWords("JavaScript", "javascript")); 
alert(compareWords("JavaScript", "Js"));         