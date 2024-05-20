// import { createContext, useReducer, useContext } from "react";
// import { sumProducts } from "../Helpers/helper";

// const initialState = {
//   selectedItems: [],
//   itemCounter: 0,
//   total: 0,
//   checkout: false,
// };
// const CartContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD-ITEM":
//       if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
//         state.selectedItems.push({ ...action.payload, quantity: 1 });
//       }
//       return {
//         ...state,
//         ...sumProducts(state.selectedItems),
//         checkout: false,
//       };

//     case "REMOVE_ITEM":
//       const newselectedItems= state.selectedItems.filter(
//         (item) => item.id !== action.payload.id
//       );

//       return {
//         ...state,
//         selectedItems: [...newselectedItems],
//         ...sumProducts(newselectedItems),
//       };

//     case "INCREASE":
//       const increaseIndex = state.selectedItems.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       state.selectedItems[increaseIndex].quantity++;

//       return {
//         ...state,...sumProducts(state.selectedItems),};
//     case "DECREASE":
//       const decreaseIndex = state.selectedItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       state.selectedItems[decreaseIndex].quantity--;
//       return { ...state, ...sumProducts(state.selectedItems) };
//       case "CHECKOUT":
//         return { ...state, checkout: true };
//     default:
//       throw new Error("Invalid Action");
//   }
// };
// function CartProvider({ Children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {Children}
//     </CartContext.Provider>
//   );
// }
// const usecart = () => {
//   const { state, dispatch } = useContext(CartContext);
//   return [state, dispatch];
// };

// export default CartProvider;
// export { usecart };
