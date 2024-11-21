const EUR = () => {
    let aksha;
    let val;
    let newaksha = 0;

    while(true){
        let aksha = +prompt("aksha zhaz")
 

        if(aksha == "stop"){
            break;
        }

        let val = prompt("valuta zhaz")

        if(val === "usd"){
            aksha *= 0.85;
            newaksha += aksha
        }else if (val === "kzt"){
            aksha *= 0.002;
            newaksha += aksha;
        }else if(val === "eur"){
            aksha *= 1;
            newaksha += aksha
        }
    }
    return newaksha
}

alert(EUR() + "sizdin chetynyzda")