import ProductUtils from './../../src/product-utils';

describe("ProductUtils Test Suite", () => {
  test("should extract normal products", () => {
    const productStr = '1 packet of headache pills at 9.75';
    const details = {
      quantity: 1,
      price: 9.75,
      name: 'packet of headache pills',
      isImported: false,
      type: 'medicine',
    };
    const result = ProductUtils.extractDetails(productStr);
    expect(result).toEqual(details);
  });
  test("should extract imported products", () => {
    const productStr = '3 imported box of chocolates at 10.00';
    const details = {
      quantity: 3,
      price: 10,
      name: 'imported box of chocolates',
      isImported: true,
      type: 'food',
    };
    const result = ProductUtils.extractDetails(productStr);
    expect(result).toEqual(details);
  });
  test("should calculate total price", () => {
    const product = {
      quantity: 1,
      price: 0.85,
      name: 'chocolate bar',
      isImported: false,
      type: 'food',
    };
    const result = ProductUtils.getTotalPrice(product);
    expect(result).toEqual(0.85);
  });
})