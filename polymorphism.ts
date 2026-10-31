// Polymorphism: satu method, banyak bentuk perilaku (method overriding)

// class induk: method dideklarasikan di sini, isinya diatur tiap turunan
abstract class LibraryMedia {
  title: string;
  protected daysLate: number;

  constructor(title: string, daysLate: number) {
    this.title = title;
    this.daysLate = daysLate;
  }

  // wajib ada di induk -> inilah kunci polymorphism
  abstract calculateFine(): number;
}

class Ebook extends LibraryMedia {
  calculateFine(): number { return this.daysLate * 1000; }   // Rp1.000 per hari
}

class Audiobook extends LibraryMedia {
  calculateFine(): number { return this.daysLate * 500; }    // Rp500 per hari
}

// variabel bertipe induk bisa menampung object turunan (dynamic dispatch)
const items: LibraryMedia[] = [
  new Ebook("Laskar Pelangi", 2),
  new Audiobook("Tempo", 2),
];

for (const item of items) {
  console.log(`${item.title}: denda Rp${item.calculateFine()}`);
}

export {};   // bikin file jadi module -> nama class tidak bentrok dengan file lain
