export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) =>
  cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const targetCartItem = cartItems.find(
    cartItem => cartItem.id === itemToDecrease.id
  );

  if (targetCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToDecrease.id
      ? { ...itemToDecrease, quantity: itemToDecrease.quantity - 1 }
      : cartItem
  );
};
