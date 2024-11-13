let san = +prompt("Санды енгізіңіз: ");

if (san) {
    for (let i = 1; i <= san; i++) {
       
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i); 
            
            if (i % 2 === 0) {
                break;
            }
        }
    }
} else {
    console.log("Қате: дұрыс сан енгізіңіз!");
}
