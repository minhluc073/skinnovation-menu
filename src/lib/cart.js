import useSWR from "swr";
import { useAppContext } from "@context/app-context";

const getShoppingCartProducts = (cartState, products) => {
  if (!products || !Array.isArray(products)) {
    return [];
  }
  const productMap = new Map(products.map((i) => [i.id, i]));
  const shoppingCart =
    cartState &&
    Object.keys(cartState)
      .map((p) => {
        return {
          ...productMap.get(p),
          cartQuantity: cartState[p],
        };
      })
      .filter((p) => p);
  return shoppingCart;
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useCart() {
  const [state] = useAppContext();
  const { cart } = state;
  const productIds = cart ? Object.keys(cart).join("|") : "";
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`/shop/api/cartProductDetails?products=${productIds}`, fetcher);

  const shoppingCart = getShoppingCartProducts(cart, products);

  return {
    shoppingCart,
    isLoading,
    isError: error,
  };
}
