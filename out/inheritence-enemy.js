"use strict";
// Ini Tugas
Object.defineProperty(exports, "__esModule", { value: true });
class Enemy {
    constructor(health) {
        this.health = health;
    }
    baseHealth() {
        return this.health;
    }
}
class Minions extends Enemy {
    constructor(health) {
        super(health);
    }
    baseHealth() {
        return (this.health += 30);
    }
}
class MinionFighter extends Enemy {
    constructor() {
        super(1860);
    }
}
class MinionArcher extends Enemy {
    constructor() {
        super(1550);
    }
}
class MinionMage extends Enemy {
    constructor() {
        super(2350);
    }
}
class SuperMinion extends Enemy {
    constructor() {
        super(5000);
    }
}
class Lord extends Enemy {
    constructor() {
        super(20000);
    }
}
class Turtle extends Enemy {
    constructor() {
        super(7000);
    }
}
class RedDragon extends Enemy {
    constructor() {
        super(3300);
    }
}
class BlueWolf extends Enemy {
    constructor() {
        super(3300);
    }
}
const minion = new Minions(10);
console.log(minion.baseHealth());
