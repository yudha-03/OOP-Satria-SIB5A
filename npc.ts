// NPC: class untuk karakter game, tipenya "walk" atau "fly"
class NPC {
    name: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npcType: "walk" | "fly";

    constructor(
        name: string,
        health: number,
        speed: number,
        defense: number,
        attack: number,
        npcType: "walk" | "fly"
    ) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = npcType;
    }

    // hanya NPC tipe "fly" yang boleh terbang (dulu: diam saja tanpa pesan)
    flying(): void {
        if (this.npcType !== "fly") throw new Error(`${this.name} tidak bisa terbang`);
        this.speed += 10;
        console.log(`Speed increased to ${this.speed}`);
    }

    walking(): void {
        this.speed += 2;
        console.log(`Speed increased to ${this.speed}`);
    }

    attacking(): void {
        this.attack += 2;
        console.log(`Attack increased to ${this.attack}`);
    }

    sprint(): void {
        this.speed += 4;
        console.log(`Speed increased to ${this.speed}`);
    }

    ultimateSkill(): void {
        this.attack += 10;
        console.log(`Attack increased to ${this.attack}`);
    }

    // defense dipakai untuk menahan damage, health bisa berkurang
    takeDamage(damage: number): void {
        const real = Math.max(damage - this.defense, 0);   // damage minimal 0
        this.health -= real;
        console.log(`${this.name} kena ${real} damage, sisa health ${this.health}`);
    }
}

const satria: NPC = new NPC("Satria", 1000, 0, 10, 0, "fly");
satria.flying();
satria.attacking();
satria.ultimateSkill();
satria.takeDamage(50);
