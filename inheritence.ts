// class induk: atribut dan method yang dipakai bersama
class LibraryItem {
  title: string;
  protected loanDays: number;   // protected: bisa diakses class turunan

  constructor(title: string, loanDays: number) {
    this.title = title;
    this.loanDays = loanDays;
  }

  getInfo(): string { return `${this.title}, dipinjam ${this.loanDays} hari`; }
}

// Book mewarisi semua isi LibraryItem + atribut khusus author
class BookItem extends LibraryItem {
  author: string;

  constructor(title: string, author: string) {
    super(title, 7);   // panggil constructor induk, lama pinjam 7 hari
    this.author = author;
  }
}

// Magazine juga turunan LibraryItem
class Magazine extends LibraryItem {
  constructor(title: string) { super(title, 3); }   // lama pinjam 3 hari
}

// contoh penggunaan
const novel = new BookItem("Laskar Pelangi", "Andrea Hirata");
const majalah = new Magazine("National Geographic");
console.log(novel.getInfo());    // Laskar Pelangi, dipinjam 7 hari
console.log(majalah.getInfo());  // National Geographic, dipinjam 3 hari
console.log(`Penulis: ${novel.author}`);   // atribut khusus Book

export {};   // module -> nama class tidak bentrok dengan out/inheritence.js atau file lain
