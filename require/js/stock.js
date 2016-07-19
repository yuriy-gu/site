define(['cash', 'security'], (cash, security) => {
	let stock = {
		banana: 3,
		orange: 5,
		pineapple: 1
	};

	function isInStock(product) {
		return stock[product] > 0;
	}

	return {
		purchaseProduct(product, amount, currency) {
			if(isInStock(product) &&
				 cash.isEnoughMoney(amount) && 
				 security.isCurrencyReal(currency) 
			  ) {
				stock[product]--;
				cash.pay(amount);
				return 'Successully bought: ' + product;
			} else {
				return 'Could not buy:' + product;
			}
		}
	};
});

