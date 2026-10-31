"use strict";
// NPC: class untuk karakter game, tipenya "walk" atau "fly"
class NPC {
    constructor(name, health, speed, defense, attack, npcType) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = npcType;
    }
    // hanya NPC tipe "fly" yang boleh terbang (dulu: diam saja tanpa pesan)
    flying() {
        if (this.npcType !== "fly")
            throw new Error(`${this.name} tidak bisa terbang`);
        this.speed += 10;
        console.log(`Speed increased to ${this.speed}`);
    }
    walking() {
        this.speed += 2;
        console.log(`Speed increased to ${this.speed}`);
    }
    attacking() {
        this.attack += 2;
        console.log(`Attack increased to ${this.attack}`);
    }
    sprint() {
        this.speed += 4;
        console.log(`Speed increased to ${this.speed}`);
    }
    ultimateSkill() {
        this.attack += 10;
        console.log(`Attack increased to ${this.attack}`);
    }
    // defense dipakai untuk menahan damage, health bisa berkurang
    takeDamage(damage) {
        const real = Math.max(damage - this.defense, 0); // damage minimal 0
        this.health -= real;
        console.log(`${this.name} kena ${real} damage, sisa health ${this.health}`);
    }
}
const satria = new NPC("Satria", 1000, 0, 10, 0, "fly");
satria.flying();
satria.attacking();
satria.ultimateSkill();
satria.takeDamage(50);
