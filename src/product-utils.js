const BASIC_TAX = 0.1;
const IMPORT_TAX = 0.05;
const KEYWORD_BOOK = ['book'];
const KEYWORD_MEDICINE = ['pills', 'headache'];
const KEYWORD_FOOD = ['chocolate'];

const checkKeyword = (str, keywords) => {
  for (const keyword of keywords) {
    if (str.includes(keyword)) return true;
  }
  return false;
}

const getProductType = (productName) => {
  if (checkKeyword(productName, KEYWORD_BOOK)) return 'book';
  if (checkKeyword(productName, KEYWORD_MEDICINE)) return 'medicine';
  if (checkKeyword(productName, KEYWORD_FOOD)) return 'food';
  return 'other';
};

const isTaxable = (product) => !['book', 'medicine', 'food'].includes(product.type);

const toString = (product) => {
  return `${product.quantity} ${product.name}: ${getTotalPrice(product).toFixed(2)}`;
};

const getTotalPrice = (product) => product.quantity * product.price + getTax(product);

const getTax = (product) => {
  const totalTaxRate = (isTaxable(product) ? BASIC_TAX : 0) + (product.isImported ? IMPORT_TAX : 0);
  return Math.ceil(product.price * product.quantity * totalTaxRate * 20) / 20;
};

const extractDetails = (str) => {
  const REGEX = /^([0-9]+)\s+(.+)\s+at\s+([0-9]+\.[0-9]{2,2})$/;
  const detailsArr = REGEX.exec(str);
  return {
    isImported: detailsArr[2].startsWith('imported'),
    name: detailsArr[2],
    price: parseFloat(detailsArr[3]),
    quantity: parseInt(detailsArr[1]),
    type: getProductType(detailsArr[2]),
  };
};

export default {
  extractDetails,
  toString,
  getTotalPrice,
  getTax,
}