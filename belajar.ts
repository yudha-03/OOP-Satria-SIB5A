abstract class itemperpus {
    constructor (public tittle: string, protected loanDays: number){}
    getInfo (): string {
        return this.tittle + " dipinjam " + this.loanDays + " hari"
    }
    abstract calculateFine(dayslate: number): number;
}

class bukuKomik extends itemperpus {
    constructor(tittle: string, public author: string){
        super(tittle, 7)
    }
    calculateFine(dayslate: number): number {
        return dayslate * 1000
    }
}

class majalah extends itemperpus {
    constructor(tittle: string){
        super(tittle, 9)
    }
    calculateFine(dayslate: number): number {
        return dayslate * 500
    }
}

let item: itemperpus

item = new bukuKomik("jujutsu kaisen", " g tau siapa")
console.log(item.getInfo())
console.log(item.calculateFine(2))

item = new majalah("majalah dewasa")
console.log(item.getInfo())
console.log(item.calculateFine(3))

