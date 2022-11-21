import ProductUtils from './product-utils';

const makeCart = () => {
  const products = [];

  const addProduct = (productInfo) => {
    const product = ProductUtils.extractDetails(productInfo);
    products.push(product);
  };

  const getSalesTaxes = () => {
    let salesTaxes = 0;
    for (const product of products) {
      salesTaxes += ProductUtils.getTax(product);
    }
    return salesTaxes;
  }

  const generateReceipt = () => {
    let result = '';
    const salesTaxes = getSalesTaxes();
    let total = 0;
    for (const product of products) {
      result += ProductUtils.toString(product) + '\n';
      total += ProductUtils.getTotalPrice(product);
    }
    result += `Sales Taxes: ${salesTaxes.toFixed(2)}\n`;
    result += `Total: ${total.toFixed(2)}\n`;
    return result;
  };

  return {
    addProduct,
    generateReceipt,
  }
};

export default makeCart;