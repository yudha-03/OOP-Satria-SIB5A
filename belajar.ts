
class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = "mario";

    eatMushroom(): void {
        this.currentForm = "super mario";
        this.hp = this.hp + 1;
    }

    eatFireFlower(): void {
        this.currentForm = "fire mario";
        this.hp = this.hp + 1;
    }

    shootFireball(): void {
        if (this.currentForm === "fire mario") {
            console.log("Fire Mario menembak bola api!");
        } else {
            console.log(
                this.currentForm + " belum bisa menembak bola api"
            );
        }
    }

    eatStar(): void {
        this.invincible = true;
    }

    attacked(): void {
        if (this.invincible) {
            console.log("Mario sedang kebal, serangan tidak mempan!");
        } else {
            this.hp = this.hp - 1;
            this.currentForm = "mario";

            console.log(
                "Mario diserang! HP sekarang: " +
                this.hp +
                ", kembali ke form: " +
                this.currentForm
            );
        }
    }

    moveRight(): void {
        this.positionX = this.positionX + this.speed;
    }

    moveLeft(): void {
        this.positionX = this.positionX - this.speed;
    }
}

class SuperMario extends Mario {
    constructor() {
        super();
        this.eatMushroom();
    }
}

class FireMario extends Mario {
    constructor() {
        super();
        this.eatFireFlower();
    }

    override shootFireball(): void {
        if (this.currentForm === "fire mario") {
            console.log("Fire Mario menembak bola api!");
        } else {
            super.shootFireball();
        }
    }
}

// Mario biasa makan item
const myMario = new SuperMario();
myMario.eatFireFlower();
myMario.shootFireball();
console.log(myMario);

export {};
