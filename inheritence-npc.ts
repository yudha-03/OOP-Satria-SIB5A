// ============================================================
// FILE: inheritence-npc.ts
// TOPIK: Inheritance (Pewarisan) dengan Tema NPC (Non-Player Character)
// ============================================================
// Inheritance adalah konsep OOP di mana satu class (child/sub class)
// dapat mewarisi properti dan method dari class lain (parent/super class).
// Kata kunci yang digunakan: 'extends' untuk mewarisi, dan 'super()'
// untuk memanggil constructor class induk.
// ============================================================

// ============================================================
// CLASS INDUK / PARENT CLASS / SUPER CLASS
// ============================================================
// Class NPC adalah class induk yang berisi atribut dan method
// yang bersama-bawa oleh semua jenis NPC di game (QuestGiver, Merchant, Enemy).
class NPC {
  // Public properties: bisa diakses dari mana saja, termasuk class turunan
  name: string;
  health: number;
  positionX: number;
  positionY: number;

  constructor(
    name: string,
    health: number,
    positionX: number,
    positionY: number,
  ) {
    // Menginisialisasi properti instance dengan nilai dari parameter constructor
    this.name = name;
    this.health = health;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  // Method yang akan diwarisi oleh semua class turunan NPC
  // Menampilkan informasi posisi saat ini dari NPC
  getPosition(): string {
    return `${this.name} berada di koordinat (${this.positionX}, ${this.positionY})`;
  }

  // Method untuk Bergerak NPC ke koordinat baru
  moveTo(newX: number, newY: number): void {
    this.positionX = newX;
    this.positionY = newY;
    console.log(`${this.name} bergerak ke (${newX}, ${newY})`);
  }
}

// ============================================================
// CLASS TURUNAN / CHILD CLASS / SUB CLASS
// ============================================================
// QuestGiver mewarisi semua properti dan method dari NPC menggunakan 'extends'.
// Class QuestGiver juga menambahkan properti khusus: questTitle.
class QuestGiver extends NPC {
  // Properti khusus QuestGiver, tidak ada di class NPC induk
  questTitle: string;

  constructor(
    name: string,
    health: number,
    positionX: number,
    positionY: number,
    questTitle: string,
  ) {
    // super() memanggil constructor class induk (NPC)
    // agar properti name, health, positionX, positionY diinisialisasi di sini
    super(name, health, positionX, positionY);

    // Inisialisasi properti khusus QuestGiver
    this.questTitle = questTitle;
  }

  // Method override (menimpa) method getPosition dari class NPC
  // Polimorfisme: method sama tapi perilaku berbeda di subclass
  getPosition(): string {
    return `${this.name} (Quest Giver) menunggu di (${this.positionX}, ${this.positionY})`;
  }

  // Method khusus QuestGiver untuk memberikan quest kepada pemain
  giveQuest(): void {
    console.log(`${this.name} memberikan quest: "${this.questTitle}"`);
  }
}

// Merchant juga mewarisi NPC dengan properti khusus: gold
class Merchant extends NPC {
  gold: number;

  constructor(
    name: string,
    health: number,
    positionX: number,
    positionY: number,
    gold: number,
  ) {
    super(name, health, positionX, positionY);
    this.gold = gold;
  }

  // Method khusus Merchant untuk berjualan (gold bertambah dari penjualan)
  sellItem(itemName: string, price: number): void {
    this.gold += price;
    console.log(`${this.name} menjual ${itemName} seharga ${price} gold, total gold ${this.gold}`);
  }

  // Override getPosition untuk Merchant
  getPosition(): string {
    return `${this.name} (Pedagang) berdiri di toko (${this.positionX}, ${this.positionY})`;
  }
}

// Enemy juga mewarisi NPC dengan properti khusus: damage
class Enemy extends NPC {
  damage: number;

  constructor(
    name: string,
    health: number,
    positionX: number,
    positionY: number,
    damage: number,
  ) {
    super(name, health, positionX, positionY);
    this.damage = damage;
  }

  // Method khusus Enemy untuk menyerang pemain
  attack(playerName: string): void {
    console.log(`${this.name} menyerang ${playerName} dengan damage ${this.damage}!`);
  }

  // Override getPosition untuk Enemy
  getPosition(): string {
    return `${this.name} (Musuh) sedang berjaga di (${this.positionX}, ${this.positionY})`;
  }
}

// ============================================================
// CONTOH PENGGUNAAN (USAGE EXAMPLE)
// ============================================================

// Membuat instance QuestGiver (class turunan NPC)
const questGiver: QuestGiver = new QuestGiver(
  "Elder Sage",
  100,
  10,
  20,
  "Cari Kristal Hilang",
);

// Membuat instance Merchant (class turunan NPC)
const merchant: Merchant = new Merchant("Trader Leo", 80, 50, 30, 500);

// Membuat instance Enemy (class turunan NPC)
const enemy: Enemy = new Enemy("Goblin Warrior", 60, 100, 200, 15);

// ============================================================
// PEMANGGILAN METHOD YANG DIWARISI DARI CLASS NPC (PARENT)
// ============================================================

// Semua subclass NPC memiliki method getPosition() dan moveTo() dari class NPC.
// Namun masing-masing subclass dapat menimpa (override) getPosition() dengan perilaku sendiri.

console.log("=== QuestGiver ===");
console.log(questGiver.getPosition()); // Output dengan override QuestGiver
questGiver.giveQuest(); // Method khusus QuestGiver

console.log("\n=== Merchant ===");
console.log(merchant.getPosition()); // Output dengan override Merchant
merchant.sellItem("Potion", 50); // Method khusus Merchant

console.log("\n=== Enemy ===");
console.log(enemy.getPosition()); // Output dengan override Enemy
enemy.attack("Pemain Satria"); // Method khusus Enemy

// ============================================================
// MENAMPILKAN METHOD WARISAN (moveTo) DARI CLASS NPC
// ============================================================
// moveTo() diwarisi langsung dari NPC tanpa override
console.log("\n=== Bergerak NPC ===");
questGiver.moveTo(15, 25);     // Menggunakan method moveTo() dari class NPC (induk)
merchant.moveTo(55, 35);       // Menggunakan method moveTo() dari class NPC (induk)
enemy.moveTo(110, 210);        // Menggunakan method moveTo() dari class NPC (induk)

export {};   // module -> class NPC di file ini tidak bentrok dengan class NPC di npc.ts
