class VendingMachine {
	constructor() {
		this.compartments = [
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 },
			{ price: 0, slots: 10 }
		];
		this.bank = 0;
	}

	printProductPrice(compartment) {
		console.log(compartment.price);
	}

	buyProduct(money, requestedProduct) {
		acceptMoney(money, requestedProduct);
	}

	acceptMoney(money, compartment) {
		if (money >= compartment.price) {
			this.addToBank(money);
			return this.dispenseproduct(compartment);
		} else {
			return { status: false, reason: 'not enough money' };
		}
	}

	dispenseProduct(compartment) {
		if (compartment.slots > 0) {
			compartment.slots -= 1;
		} else {
			return { status: false, reason: 'there are no more products left' };
		}
	}

	addToBank(money) {
		this.bank += money;
	}
}
