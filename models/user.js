class User {
	constructor() {
		this.bank = 0;
	}
	checkPrice(machine, compartment) {
		machine.printProductPrice(compartment);
	}

	buyProduct(machine, compartment, money) {}
}
