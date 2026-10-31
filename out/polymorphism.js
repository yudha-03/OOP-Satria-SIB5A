"use strict";
// Polymorphism: satu method, banyak bentuk perilaku (method overriding)
Object.defineProperty(exports, "__esModule", { value: true });
// class induk: method dideklarasikan di sini, isinya diatur tiap turunan
class LibraryMedia {
    constructor(title, daysLate) {
        this.title = title;
        this.daysLate = daysLate;
    }
}
class Ebook extends LibraryMedia {
    calculateFine() { return this.daysLate * 1000; } // Rp1.000 per hari
}
class Audiobook extends LibraryMedia {
    calculateFine() { return this.daysLate * 500; } // Rp500 per hari
}
// variabel bertipe induk bisa menampung object turunan (dynamic dispatch)
const items = [
    new Ebook("Laskar Pelangi", 2),
    new Audiobook("Tempo", 2),
];
for (const item of items) {
    console.log(`${item.title}: denda Rp${item.calculateFine()}`);
}
