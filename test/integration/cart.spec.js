import makeCart from './../../src/cart';

describe("Cart Test Suite", () => {
  test("should generate receipt1", () => {
    const cart = makeCart();
    cart.addProduct('1 book at 12.49');
    cart.addProduct('1 music CD at 14.99');
    cart.addProduct('1 chocolate bar at 0.85');
    const result = cart.generateReceipt();
    const receipt = 
      '1 book: 12.49\n' +
      '1 music CD: 16.49\n' +
      '1 chocolate bar: 0.85\n' +
      'Sales Taxes: 1.50\n' +
      'Total: 29.83\n';
    expect(result).toBe(receipt);
  });
  test("should generate receipt2", () => {
    const cart = makeCart();
    cart.addProduct('1 imported box of chocolates at 10.00');
    cart.addProduct('1 imported bottle of perfume at 47.50');
    const result = cart.generateReceipt();
    const receipt = 
      '1 imported box of chocolates: 10.50\n' +
      '1 imported bottle of perfume: 54.65\n' +
      'Sales Taxes: 7.65\n' +
      'Total: 65.15\n';
    expect(result).toBe(receipt);
  });
  test("should generate receipt3", () => {
    const cart = makeCart();
    cart.addProduct('1 imported bottle of perfume at 27.99');
    cart.addProduct('1 bottle of perfume at 18.99');
    cart.addProduct('1 packet of headache pills at 9.75');
    cart.addProduct('1 imported box of chocolates at 11.25');
    const result = cart.generateReceipt();
    const receipt = 
      '1 imported bottle of perfume: 32.19\n' +
      '1 bottle of perfume: 20.89\n' +
      '1 packet of headache pills: 9.75\n' +
      '1 imported box of chocolates: 11.85\n' +
      'Sales Taxes: 6.70\n' +
      'Total: 74.68\n';
    expect(result).toBe(receipt);
  });
})