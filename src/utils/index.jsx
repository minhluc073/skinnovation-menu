export const formatCurrency = (num, to = 2, currency = 'USD') => {
  let newNum = Number.parseFloat(num).toFixed(to);
  switch (currency) {
    case 'USD':
      return `$${newNum}`;
    default:
      return `${newNum}VND`;
  }
};

export function formatSingleNumber(n) {
  return n > 9 ? '' + n : '0' + n;
}

export const calculateTotalPrice = (cartArr, isformatCurrency) => {
  let total = 0;
  if (!cartArr || !Array.isArray(cartArr)) {
    return total;
  }

  cartArr.forEach((item) => (total += item.price * item.cartQuantity));

  if (isNaN(total)) {
    return undefined;
  }
  
  return isformatCurrency ? formatCurrency(total) : total;
};

export const checkProductInCart = (cartArr, pid, color) => {
  if (!cartArr || !Array.isArray(cartArr)) {
    return undefined;
  }

  if (cartArr.length > 0) {
    if (color) {
      return cartArr.find(
        (item) =>
          item.productId === pid &&
          item.selectedColor &&
          item.selectedColor === color
      );
    }
    return cartArr.find((item) => item.productId === pid);
  }
};

export const getAvaiableQuantityInCart = (cartArr, pid, quantity) => {
  if (!cartArr || !Array.isArray(cartArr)) {
    return undefined;
  }

  let arr = cartArr.filter((item) => item.id === pid);
  if (cartArr || cartArr.length > 0) {
    if (arr.length > 0) {
      let result =
        arr.length > 0 &&
        arr.reduce((total, num) => total + num.cartQuantity, 0);
      return result && quantity - result;
    } else {
      return quantity;
    }
  }
  return quantity;
};

export const checkProductInWishList = (wishlistArr, productId) => {
  if (!wishlistArr || !Array.isArray(wishlistArr)) {
    return undefined;
  }

  return wishlistArr.find((item) => item.id === productId);
};

export function convertToSlug(title, id) {
  const renderId = id ? '-' + id : '';
  return title ? title.replace(/ /g, '-').toLowerCase() + renderId : '';
}

export const getPosts = (posts, category, limit) => {
  const finalPosts = category
    ? posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    finalProducts &&
    finalProducts.slice(0, limit ? limit : finalProducts.length)
  );
};

export const getCategoryQuantity = (posts, category) => {
  return category
    ? posts?.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      ).length
    : 0;
};

export const getPostBySlug = (posts, slug) => {
  return slug
    ? posts.find((post) => post.slug.toLowerCase() === slug.toLowerCase())
    : null;
};

export const getPostByKeyword = (posts, keyword) => {
  return keyword
    ? posts.filter((post) => post.title.toLowerCase().includes(keyword))
    : posts;
};
