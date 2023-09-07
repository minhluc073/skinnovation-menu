const cartLocalStorageKey = "si-cart";

export function getCart() {
  const localStorage = window.localStorage;
  if (!localStorage) {
    console.warn("No local storage. getCart is noop");
    return {};
  }
  let cartRaw = localStorage.getItem(cartLocalStorageKey);
  if (!cartRaw) {
    console.warn("No shopping cart, initializing empty");
    const emptyCart = {};
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(emptyCart));
    return emptyCart;
  }
  try {
    return JSON.parse(cartRaw);
  } catch {
    console.error("Cannot parse cart data: ", { cartRaw });
    return {};
  }
}

export function addToCart(payload) {
  const { product } = payload;
  let { quantity } = payload;
  if (!quantity) {
    quantity = 1;
  }
  const localStorage = window.localStorage;
  if (!localStorage) {
    console.warn("No local storage. updateCart is noop");
  }
  if (!product) {
    console.error("No product provided, updateCart is noop ");
  }
  try {
    const currentCart = getCart();
    let count = currentCart[product.id];
    if (!count) {
      currentCart[product.id] = quantity;
    } else {
      count = parseInt(count) + quantity;
      currentCart[product.id] = count;
    }
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(currentCart));
  } catch {
    console.error("Failed to update cart");
  }
}

// const grouped = cartState.reduce(
//   (a, c) => ((a[c] = (a[c] || 0) + 1), a),
//   Object.create(null)
// );

export function clearCart() {
  const localStorage = window.localStorage;
  if (!localStorage) {
    console.warn("No local storage. clearCart is noop");
  }
  try {
    localStorage.setItem(cartLocalStorageKey, JSON.stringify({}));
  } catch {
    console.error("Cannot clear cart");
  }
}

export function removeFromCart(productId) {
  const localStorage = window.localStorage;
  if (!localStorage) {
    console.warn("No local storage. removeFromCart is noop");
  }
  if (!productId) {
    console.error("No productId provided, removeFromCart is noop ");
  }
  try {
    const currentCart = getCart();
    let count = currentCart[productId];
    if (count) {
      count = parseInt(count) - 1;
      if (count === 0) {
        delete currentCart[productId];
      } else {
        currentCart[productId] = count;
      }
    }
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(currentCart));
  } catch {
    console.error("Failed to update cart");
  }
}
