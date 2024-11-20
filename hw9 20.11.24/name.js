let  name = prompt("Студенттің аты жөні?")
let students = prompt("Студент кай тілде сөйлесін?(eng,kaz,rus)")

function convertName(language,world){
    if(world === "eng"){
        return "Hello!"+ language +"How are you?"
    }else if(world ==="kaz"){
        return "Сәлем!"+ language +"қалың қалай?"
    }else if(world ==="rus"){
        return "Привет!"+ language +"Как дела?"
    }else{
        return "Қате! Берілген тілдерді таңдаңыз!"
    }
}

let result = convertName(name,students)
alert(result);
