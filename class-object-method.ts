// Class = cetak biru untuk object
class Book {
    title: string;            // atribut
    private stock: number;    // atribut + encapsulation

    constructor(title: string, stock: number) {
        this.title = title;   // isi atribut
        this.stock = stock;
    }

    borrow(qty: number): void {
        if (qty <= 0 || qty > this.stock) throw new Error(`Stok tidak cukup, sisa ${this.stock}`);
        this.stock -= qty;
        console.log(`Pinjam ${qty} "${this.title}", sisa stok ${this.stock}`);
    }

    returnBook(qty: number): void {
        if (qty <= 0) throw new Error("Jumlah harus lebih dari 0");
        this.stock += qty;
        console.log(`Kembali ${qty} "${this.title}", stok ${this.stock}`);
    }
}

// Object = hasil new Book(...)
const book1 = new Book("Laskar Pelangi", 5);
console.log(book1.title);    // Laskar Pelangi
book1.borrow(2);
book1.returnBook(1);
