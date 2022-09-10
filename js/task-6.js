class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	getPriceInfo() {
		return `${this.name} costs ${this.price}`;
	}
}

class Meal extends Product {
	setDiscount(discount) {
		this._discount = discount;

		return this._discount;
	}

	getDiscount() {
		if (!this._discount) {
			console.log("No discount!");
		}
		const bill = this.price - this.price * this._discount;
		return bill;
	}
}

class Drink extends Product {
	constructor(name, price, alk) {
		super(name, price);
		this._alk = alk;
	}
}

// const shot = new Drink("Sex on the beach", 150, true);
// console.log(Drink);

// console.log(Product);
// console.log(Meal);
// console.log(Drink);

const mango = new Product("Mango", 200);
console.log(mango.getPriceInfo());

const gaspacho = new Meal("Gaspacho", 300);
console.log(gaspacho.setDiscount(0.1));
console.log(gaspacho.getDiscount());
