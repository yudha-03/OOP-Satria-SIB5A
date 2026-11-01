class marioBaru {
    hp: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: string;

    constructor(){
        this.hp = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false
        this.currentForm = "mario"
    }

    nembakApi() : void {
        console.log(this.currentForm + " tidak bisa nembak api")
    }

    makanJamur() : marioSuper {
        
    }
}

class marioSuper extends marioBaru {
    constructor(){
        super()
        this.currentForm = "super mario"
    }
}

class marioFire extends marioBaru {
    constructor(){
        super()
        this.currentForm = "fire mario"
    }
}