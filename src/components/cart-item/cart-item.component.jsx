import React from "react";

import {
  CartItemContainer,
  Name,
  ItemDetails,
  Image,
  Price,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x {price}$
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
