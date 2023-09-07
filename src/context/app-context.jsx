import React from "react";
import { useImmerReducer } from "use-immer";
import appReducer from "@context/reducer";

export const appState = {
  products: [],
  cart: [],
  wishlist: [],
  filterOptions: {},
  newlyAddedToCart: {},
  editWishlist: {},
  blog: [],
};

export const AppStateContext = React.createContext();
export const AppContext = React.createContext();

export const useAppContext = () => {
  return [React.useContext(AppStateContext), React.useContext(AppContext)];
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appReducer, appState);
  return (
    <AppContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppContext.Provider>
  );
};

export default AppProvider;
