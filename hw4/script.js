// let course = prompt("Курсыңызды еңгізіңіз: 1/2/3/4")
// let isAlmaty = prompt("Келген жеріңіз Алматыма? (Yes/No)")
// if(course = 1 || 2  && !isAlmaty){
//     alert("Сізге жатахана беріледі")
// }
// else{
//     alert("Сізге өкінішке орай жатахана берілмейді((")
// }

//task2
alert("Ойын шарты:Дұрыс жауап берілген әр сұраққа 1 балл беріледі.Сұрақ қойылады жауапты еңгізіңіз!");
let surak1 = Number(prompt("Қазақстан тәуелсуіздігін кашан алды?"));
let surak2 = prompt("Қазір қай қалада оқып жатсыз?(Almaty +1/Бассқасы -1)");
let score = 0;

if(surak1 === 1991){
    score+=1
}
if(surak2.toLowerCase() === "Almaty"){
    score+=1 
}
alert("Сіздің жинаган упайыныз" + score)