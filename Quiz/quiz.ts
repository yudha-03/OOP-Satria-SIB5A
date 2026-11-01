// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================

// ------------------- CLASS INDUK (PARENT) -------------------
class Mario {
  hp: number;
  speed: number;
  positionX: number;
  positionY: number;
  invincible: boolean;
  currentForm: string;

  constructor() {
    this.hp = 1;
    this.speed = 5;
    this.positionX = 0;
    this.positionY = 0;
    this.invincible = false;
    this.currentForm = "mario";
  }

  // method ini akan di-override (ditulis ulang) sama class anak
  shootFireball(): void {
    console.log(this.currentForm + " belum bisa menembak bola api");
  }

  // 5. bergerak ke kanan
  moveRight(): void {
    this.positionX = this.positionX + this.speed;
  }

  // 6. bergerak ke kiri
  moveLeft(): void {
    this.positionX = this.positionX - this.speed;
  }

  // 4. diserang
  attacked(): void {
    if (this.invincible) {
      console.log(this.currentForm + " kebal, serangan tidak berpengaruh");
    } else {
      this.hp = this.hp - 1;
      this.currentForm = "mario";
      console.log("Mario diserang, HP sekarang " + this.hp);
    }
  }

  status(): void {
    console.log(
      "form=" + this.currentForm +
      ", hp=" + this.hp +
      ", posisi=(" + this.positionX + "," + this.positionY + ")" +
      ", kebal=" + this.invincible
    );
  }
}

// ------------------- CLASS ANAK: SUPER MARIO -------------------
class SuperMario extends Mario {
  constructor() {
    super();                      // ambil semua atribut dari Mario
    this.currentForm = "super mario";
  }
}

// ------------------- CLASS ANAK: FIRE MARIO -------------------
class FireMario extends Mario {
  constructor() {
    super();
    this.currentForm = "fire mario";
  }

  // override: Fire Mario bisa menembak bola api
  shootFireball(): void {
    console.log("fire mario menembak bola api!");
  }
}

// =====================================================================
//  CARA PAKAI (OBJECT)
// =====================================================================

// Mario mulai dari form dasar
let mario = new Mario();
mario.status();

// 1. Makan SuperMushroom -> jadi Super Mario, HP + 1
let superMario = new SuperMario();
superMario.hp = mario.hp + 1;
superMario.status();

// 2. Makan FireFlower -> jadi Fire Mario, HP + 1, bisa nembak api
let fireMario = new FireMario();
fireMario.hp = superMario.hp + 1;
fireMario.status();
fireMario.shootFireball();

// 3. Makan SuperStar -> kebal
fireMario.invincible = true;
fireMario.status();

// 4. Diserang saat kebal -> tidak berpengaruh
fireMario.attacked();

// 4. Diserang saat tidak kebal -> HP - 1, balik ke form mario
fireMario.invincible = false;
fireMario.attacked();
fireMario.status();

// 5 & 6. Bergerak kanan lalu kiri
mario.moveRight();
mario.moveRight();
mario.moveLeft();
mario.status();

export {};