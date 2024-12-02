const player = {
    аты: "Neymar",
    тегі: "Junior",
    жасы: 32,
    голСаны: 136,
    командалар: ["Santos", "Barcenola", "PSG", "Al-Hilal"],
    discount: function (){
        this.голСаны += 2; 
        return this.голСаны;
    },
    FullName: function (){
    return `Бірінші аты: ${this.аты}
Екінші аты: ${this.тегі}
Негізгі гол саны: ${this.голСаны}
Жасы: ${this.жасы}
Командалары: ${this.командалар.join(", ")}`;
    },
    Gol: function (){
        const жаңаГолСаны = this.discount();
        return `Гол санынан кейінгі саны: ${жаңаГолСаны}`;
    },
};

alert(player.FullName());
alert(player.Gol());




