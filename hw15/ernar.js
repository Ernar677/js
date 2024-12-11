let task = [
    {
    name: "Жаттығу жасау", Boolean: false 
    },
    {  
    name: "Үй жұмысын аяқтау", Boolean: true
    },
    {
    name: "Кітап оқу", Boolean: false 
    },
    { 
    name: "Дүкенге бару", Boolean: true 
    }
]
let Tasks = task.filter(task => !task.Boolean);
if(Tasks.length > 0){
    alert("Тапсырма орындалмады")
}else if(prompt == 1){
    
}


