import makeCart from './cart';

const cart1 = makeCart();
cart1.addProduct('1 book at 12.49');
cart1.addProduct('1 music CD at 14.99');
cart1.addProduct('1 chocolate bar at 0.85');
console.log(cart1.generateReceipt());
