
const products = [
	{ id: 1, name: 'Producto 1', price: 10, stock: 5 },
	{ id: 2, name: 'Producto 2', price: 20, stock: 10 },
	{ id: 3, name: 'Producto 3', price: 30, stock: 15 }
];

let cart = []; 


function addToCart() {
	const productId = document.getElementById('product').value;
	const quantity = parseInt(document.getElementById('quantity').value);
	const product = products.find(item => item.id == productId);

	if (product.stock >= quantity) {
		product.stock -= quantity;
		cart.push({ product: product, quantity: quantity });
		showCart();
	} else {
		alert('No hay suficiente stock disponible');
	}
}

function showCart() {
	const cartList = document.getElementById('cart');
	cartList.innerHTML = '';

	cart.forEach(item => {
		const listItem = document.createElement('li');
		listItem.innerHTML = `${item.quantity} x ${item.product.name} - $${item.product.price}`;
		cartList.appendChild(listItem);
	});

	const cartTotal = document.createElement('li');
	cartTotal.innerHTML = `Total: $${getCartTotal()}`;
	cartList.appendChild(cartTotal);
}

function getCartTotal() {
	let total = 0;
	cart.forEach(item => {
		total += item.quantity * item.product.price;
	});
	return total;
}
