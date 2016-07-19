'use strict'

class Car {
	constructor(name, maxSpeed) {
		this.name = name || 'unnamed';
		this.maxSpeed = maxSpeed || 60;
		this._fuel = 0;
		this.coveredDistance = 0;
	}

	go() {
		if(this._fuel) {
			this.coveredDistance += 50;
			this._fuel--;
			console.log('Авто проехало 50 км');
		} else {
			console.log('Нет топлива');
		}
	}

	fillTheTank(amount) {
		this._fuel += amount;
		console.log(`Бак заправлен на ${amount} единицы`);
	}

	get distance() {
		return this.coveredDistance;
	}

	static whichIsFaster(car1, car2) {
		return (car1.maxSpeed > car2.maxSpeed)? `${car1.name} быстрее` : `${car2.name} быстрее`;
	}
}

let car1 = new Car('audi', 200);
let car2 = new Car();


let result = Car.whichIsFaster(car1, car2);
console.log(result);

car1.go();
car1.fillTheTank(2);
car1.go();
car1.go();
car1.go();
car1.go();
console.log(car1.distance);



class Truck extends Car {
	constructor(name, maxSpeed, wheels) {
		super(name, maxSpeed);//вызвала конструктор класса car (обязательно и должен вызываться на 1й строке)
		this.wheels = wheels;
	}

	go() {
		super.go();
		this._fuel --;
	}
}

let car3 = new Truck('Man', 150, 10);
console.log(car3)
car3.go();

console.log(Object.getPrototypeOf(car3));
console.log(Object.getPrototypeOf(car1));