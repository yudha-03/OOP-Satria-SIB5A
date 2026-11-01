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

  // Method ini akan di-override (ditulis ulang) oleh class anak
  shootFireball(): void {
    console.log(this.currentForm + " belum bisa menembak bola api");
  }

  // 1. SuperMushroom: jadi Super Mario, HP + 1
  eatMushroom(): SuperMario {
    let baru = new SuperMario();
    baru.hp = this.hp + 1;
    baru.positionX = this.positionX;
    baru.positionY = this.positionY;
    baru.invincible = this.invincible; // Pertahankan status kebal
    return baru;
  }

  // 2. FireFlower: jadi Fire Mario, HP + 1
  eatFireFlower(): FireMario {
    let baru = new FireMario();
    baru.hp = this.hp + 1;
    baru.positionX = this.positionX;
    baru.positionY = this.positionY;
    baru.invincible = this.invincible; // Pertahankan status kebal
    return baru;
  }

  // 3. SuperStar: kebal terhadap serangan
  eatStar(): void {
    this.invincible = true;
  }

  // 4. Diserang
  attacked(): void {
    if (this.invincible) {
      console.log(this.currentForm + " kebal, serangan tidak berpengaruh");
    } else {
      this.hp = this.hp - 1;
      this.currentForm = "mario";
      console.log("Mario diserang, HP sekarang " + this.hp);
    }
  }

  // 5. Bergerak ke kanan
  moveRight(): void {
    this.positionX = this.positionX + this.speed;
  }

  // 6. Bergerak ke kiri
  moveLeft(): void {
    this.positionX = this.positionX - this.speed;
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
    super();
    this.currentForm = "super mario";
  }
}

// ------------------- CLASS ANAK: FIRE MARIO -------------------
class FireMario extends Mario {
  constructor() {
    super();
    this.currentForm = "fire mario";
  }

  // Override: Fire Mario bisa menembak bola api (selama form-nya masih fire mario)
  shootFireball(): void {
    if (this.currentForm === "fire mario") {
      console.log("fire mario menembak bola api!");
    } else {
      super.shootFireball();
    }
  }
}

// =====================================================================
//  CARA PAKAI (OBJECT)
// =====================================================================

let mario = new Mario();
mario.status();

// 1. Makan SuperMushroom -> jadi Super Mario, HP + 1
let superMario = mario.eatMushroom();
superMario.status();

// 2. Makan FireFlower -> jadi Fire Mario, HP + 1, bisa nembak api
let fireMario = superMario.eatFireFlower();
fireMario.status();
fireMario.shootFireball();

// 3. Makan SuperStar -> kebal
fireMario.eatStar();
fireMario.status();

// 4. Diserang saat kebal -> tidak berpengaruh
fireMario.attacked();

// 4. Diserang saat tidak kebal -> HP - 1, balik ke form mario
fireMario.invincible = false;
fireMario.attacked();
fireMario.status();
fireMario.shootFireball(); // Sekarang otomatis gagal menembak karena sudah kembali jadi 'mario'

// 5 & 6. Bergerak kanan lalu kiri
mario.moveRight();
mario.moveRight();
mario.moveLeft();
mario.status();

export {};