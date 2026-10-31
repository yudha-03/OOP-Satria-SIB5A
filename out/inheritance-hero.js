"use strict";
// ============================================================
// FILE: inheritance-hero.ts
// TOPIK: Inheritance (Pewarisan) dalam TypeScript
// ============================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ============================================================
// CLASS INDUK / PARENT CLASS / SUPER CLASS
// ============================================================
// Class Hero berisi atribut dan method yang dipakai bersama
// oleh semua tipe karakter (Fighter, Mage, Support).
class Hero {
    constructor(health, attack, magicalDefense, physicalDefense, basicAttack) {
        this.health = health;
        this.attack = attack;
        this.magicalDefense = magicalDefense;
        this.physicalDefense = physicalDefense;
        this.basicAttack = basicAttack;
    }
    // Method yang diwarisi oleh semua class turunan
    getHealth() {
        return `Health: ${this.health}`;
    }
}
// ============================================================
// CLASS TURUNAN / CHILD CLASS / SUB CLASS
// ============================================================
// Fighter mewarisi semua properti dan method dari Hero lewat extends,
// lalu menambah properti khususnya sendiri: spellVamp.
class Fighter extends Hero {
    constructor(health, attack, magicalDefense, physicalDefense, basicAttack, spellVamp = 10) {
        // super() memanggil constructor class induk (Hero)
        super(health, attack, magicalDefense, physicalDefense, basicAttack);
        this.spellVamp = spellVamp;
    }
}
// Mage juga mewarisi Hero dengan properti khusus: magicalAttack
class Mage extends Hero {
    constructor(health, attack, magicalDefense, physicalDefense, basicAttack, magicalAttack = 10) {
        super(health, attack, magicalDefense, physicalDefense, basicAttack);
        this.magicalAttack = magicalAttack;
    }
}
// Support juga mewarisi Hero dengan properti khusus: healing
class Support extends Hero {
    constructor(health, attack, magicalDefense, physicalDefense, basicAttack, healing = 10) {
        super(health, attack, magicalDefense, physicalDefense, basicAttack);
        this.healing = healing;
    }
}
// ============================================================
// CONTOH PENGGUNAAN (USAGE EXAMPLE)
// ============================================================
// Ketiga object ini tetap punya method getHealth() WARISAN dari Hero,
// tapi masing-masing punya atribut khusus yang berbeda.
const fighter = new Fighter(100, 80, 50, 50, 60);
const mage = new Mage(80, 40, 90, 40, 30);
const support = new Support(90, 30, 50, 60, 20);
console.log(`Fighter -> ${fighter.getHealth()}, basicAttack ${fighter.basicAttack}, spellVamp ${fighter.spellVamp}`);
console.log(`Mage    -> ${mage.getHealth()}, magicalAttack ${mage.magicalAttack}`);
console.log(`Support -> ${support.getHealth()}, healing ${support.healing}`);
