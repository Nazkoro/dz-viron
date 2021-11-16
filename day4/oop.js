
class Person {
    speed = 250; //бег с ножом
    life = 100;
    jump = 1;
    constructor(name,iDamage, damageToMe ,money =800,  press =1, chat ='На связи') {
        this.name = name;
        this.iDamage = iDamage;
        this.damageToMe = damageToMe;
        this.money = money;
        this.press = press;
        this.chat = chat;
    }
    run() { 
       
         return 'Бегу'; 
    }
    sitDown() { 
        
         return 'Присел'; 
    }
    shoot() { 
        if(this.iDamage >= 100) return 'kill';
        return this.iDamage = this.iDamage * this.press; //урон
    }
    amountOfLife() { 
        if(this.life <= 0) return 'you died';
        return this.life = this.life - this.damageToMe; //остаток ХП
    }
    speak() {
        
        return `${this.name}: ${this.chat}`;
    }

}


class Weapon {
    constructor(name, price, damage, numberOfCartridge, speed){
        this.name = name;
        this.price = price;
        this.damage = damage;
        this.numberOfCartridge = numberOfCartridge;
        this.speed = speed;
        // this.rapidityOfFire = rapidityOfFire;
        // this.armorPiercing = armorPiercing;
    }
   
}


let TT = new Person('Halif', 20, 34 ,3200,3);
let CT = new Person('Jeck', 25,69, 3400, 2, 'Сектор чист');

let shop = [
    new Weapon ('Desert Eagle', 700, 73, 7,267),
    new Weapon ('M4A4', 3100, 33, 666),
    new Weapon ('AK-47', 2700, 36, 600)
]



