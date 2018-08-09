class VendingMachine {
	constructor() {
		this.compartments = [];
		this.bank = 0;
	}

	printProductPrice(product) {}

	buyProduct(money, requestedProduct) {
		acceptMoney(money, requestedProduct);
	}

	dispenseProduct(money) {
		//return get product and make change
	}

	removeProduct(product) {}

	addToBank() {}

	makechange() {}

	acceptMoney(money, requestedProduct) {
		this.dispenseproduct();
	}
}
