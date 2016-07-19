define(() => {
	let sum = 100;
	return {
		isEnoughMoney(amount) {
			return amount < sum;
		},
		pay(amount) {
			sum -= amount;
		}
	};
})