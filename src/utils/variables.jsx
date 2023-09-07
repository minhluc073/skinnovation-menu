export const product = {
  DEFAULT_QUANTITY: 1,
};

export const blog = {
  CATEGORIES: ['Beauty tips', 'Make up', 'Skin care', 'Body care', 'Videos'],
};

export const shop = {
  CATEGORISE: ['all', 'eyes', 'face', 'lips', 'set'],
  BRANDS: ['gucci', 'dolce', 'h&m', 'kenzo', 'prada'],
  PRICE_POINTS: [0, 25, 50, 75, 100],
  SORT_TYPES: [
    { label: 'Default', value: 'default' },
    { label: 'A to Z Sorting', value: 'az', for: 'name', order: 'asc' },
    { label: 'Z to A Sorting', value: 'za', for: 'name', order: 'desc' },
    { label: 'Low to High Price Sorting', value: 'lowToHigh', for: 'price', order: 'asc' },
    { label: 'High to Low Price Sorting', value: 'highToLow', for: 'name', order: 'desc' },
  ],
  DEFAULT_VIEW: 'grid',
};
