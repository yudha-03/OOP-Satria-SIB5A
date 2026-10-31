"use strict";
// ============================================================
// FILE: inheritance-enemy.ts
// TOPIK: Inheritance (Pewarisan) dalam TypeScript
// ============================================================
// Inheritance adalah konsep OOP di mana satu class (child/sub class)
// dapat mewarisi properti dan method dari class lain (parent/super class).
// Kata kunci yang digunakan: 'extends' untuk mewarisi, dan 'super()'
// untuk memanggil constructor class induk.
// ============================================================
// ============================================================
// CLASS INDUK / PARENT CLASS / SUPER CLASS
// ============================================================
// Class Hero adalah class induk yang berisi atribut dan method
// yang bersama-bawa oleh semua tipe karakter (Fighter, Mage, Support).
class Hero {
    constructor(health, attack, magicalDefense, pysicalDefense, basicAttack) {
        // Menginisialisasi properti instance dengan nilai dari parameter constructor
        this.health = health;
        this.attack = attack;
        this.magicalDefense = magicalDefense;
        this.pysicalDefense = pysicalDefense;
        this.basicAttack = basicAttack;
    }
    // Method yang akan diwarisi oleh semua class turunan
    getHealth() {
        return `This Health ${this.health}`;
    }
}
// ============================================================
// CLASS TURUNAN / CHILD CLASS / SUB CLASS
// ============================================================
// Fighter mewarisi semua properti dan method dari Hero menggunakan 'extends'.
// Class Fighter juga menambahkan properti khusus mereka sendiri: spellVamp.
class Fighter extends Hero {
    constructor(health, attack, magicalDefense, pysicalDefense, basicAttack) {
        // super() memanggil constructor class induk (Hero)
        // agar properti health, attack, dll. diinisialisasi di sini
        super(health, attack, magicalDefense, pysicalDefense, basicAttack);
        // Inisialisasi properti khusus Fighter
        this.spellVamp = 10;
    }
}
// Mage juga mewarisi Hero dengan properti khusus: magicalAttack
class Mage extends Hero {
    constructor(health, attack, magicalDefense, pysicalDefense, basicAttack) {
        super(health, attack, magicalDefense, pysicalDefense, basicAttack);
        this.magicalAttack = 10;
    }
}
// Support juga mewarisi Hero dengan properti khusus: healing
class Support extends Hero {
    constructor(health, attack, magicalDefense, pysicalDefense, basicAttack) {
        super(health, attack, magicalDefense, pysicalDefense, basicAttack);
        this.healing = 10;
    }
}
// ============================================================
// CONTOH PENGGUNAAN (USAGE EXAMPLE)
// ============================================================
// Membuat instance Support (class turunan)
// Meskipun kita men-buat Support, ia tetap memiliki method getHealth() dari Hero
const support = new Support(100, 100, 100, 100, 100);
// Memanggil method yang diwarisi dari class Hero
support.getHealth(); // Mengembalikan: "This Health 100"
