"use strict";
// QUIZ: Mario Bros dengan OOP (inheritance + polymorphism)
Object.defineProperty(exports, "__esModule", { value: true });
// ============================ CLASS INDUK ============================
class Mario {
    // constructor = tempat menaruh nilai default
    constructor() {
        this.hp = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = "mario";
    }
    // POLYMORPHISM: method ini nanti ditulis ulang (override) oleh class turunan
    shootFireball() {
        return `${this.currentForm} belum bisa menembak bola api`;
    }
    status() {
        return `form=${this.currentForm}, hp=${this.hp}, pos=(${this.positionX}, ${this.positionY}), kebal=${this.invincible}`;
    }
    // 5. bergerak ke kanan: positionX + speed
    moveRight() {
        this.positionX += this.speed;
    }
    // 6. bergerak ke kiri: positionX - speed
    moveLeft() {
        this.positionX -= this.speed;
    }
    // 1. SuperMushroom: jadi Super Mario, hp + 1
    eatMushroom() {
        // kalau sudah Super/Fire Mario, form tidak boleh turun -> cukup hp + 1
        if (this.currentForm !== "mario") {
            this.hp += 1;
            return this;
        }
        const naik = this.copyStatus(new SuperMario()); // buat object form baru, salin status lama
        naik.hp = this.hp + 1; // hp + 1
        return naik;
    }
    // 2. FireFlower: jadi Fire Mario, hp + 1
    eatFireFlower() {
        const naik = this.copyStatus(new FireMario());
        naik.hp = this.hp + 1;
        return naik;
    }
    // 3. SuperStar: kebal terhadap serangan (form tetap)
    eatStar() {
        this.invincible = true;
        return this;
    }
    // 4. diserang: hp - 1 dan kembali ke form mario, kecuali sedang kebal
    attacked() {
        if (this.invincible) {
            return this; // kebal: tidak ada yang berubah
        }
        const turun = this.copyStatus(new Mario()); // kembali ke form dasar
        turun.hp = this.hp - 1; // hp - 1
        return turun;
    }
    // method bantu: salin speed, posisi, dan status kebal ke object tujuan
    // (supaya saat ganti form, posisi/kecepatan Mario tidak hilang)
    copyStatus(target) {
        target.speed = this.speed;
        target.positionX = this.positionX;
        target.positionY = this.positionY;
        target.invincible = this.invincible;
        return target;
    }
}
// ============================ CLASS TURUNAN ============================
// SuperMario mewarisi semua atribut dan method dari Mario
class SuperMario extends Mario {
    constructor() {
        super(); // jalankan constructor induk (nilai default terpasang)
        this.currentForm = "super mario"; // lalu ganti nama form-nya
    }
    // override: perilaku shootFireball khusus Super Mario
    shootFireball() {
        return "super mario memecah bata, belum bisa menembak bola api";
    }
}
// FireMario mewarisi semua isi SuperMario (SuperMario juga turunan Mario)
class FireMario extends SuperMario {
    constructor() {
        super();
        this.currentForm = "fire mario";
    }
    // override: fire mario bisa menembak bola api
    shootFireball() {
        return "fire mario menembak bola api!";
    }
}
// ============================ OBJECT + UJI ATURAN ============================
let mario = new Mario();
console.log(mario.status(), "|", mario.shootFireball()); // default: hp 1, form mario
mario = mario.eatMushroom(); // 1. hp 1 -> 2, form super mario
console.log(mario.status(), "|", mario.shootFireball());
mario = mario.eatFireFlower(); // 2. hp 2 -> 3, form fire mario
console.log(mario.status(), "|", mario.shootFireball());
mario.moveRight(); // 5. x: 0 -> 5
mario.moveRight(); //    x: 5 -> 10
mario.moveLeft(); // 6. x: 10 -> 5
console.log(mario.status());
mario = mario.eatStar(); // 3. kebal
console.log(mario.attacked().status()); // 4. kebal -> hp tetap 3, form tetap
const kecil = new Mario().eatFireFlower(); // fire mario, hp 2
console.log(kecil.attacked().status()); // 4. tidak kebal -> hp 1, balik form mario
