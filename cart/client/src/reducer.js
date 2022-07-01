const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "REMOVE") {
    const tempCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "INCREASE") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "DECREASE") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      cart: action.payload,
      loading: false,
    };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      total,
      amount,
    };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return {
              ...cartItem,
              amount: cartItem.amount + 1,
            };
          }
          if (action.payload.type === "dec") {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }

  throw new Error("No Matching Type Action");
};

export default reducer;
