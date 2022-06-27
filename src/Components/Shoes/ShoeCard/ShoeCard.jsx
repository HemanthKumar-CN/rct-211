import React from "react";

const ShoeCard = ({item}) => {
  // const shoeId = null;

  // console.log(t)
  return (
    <div data-cy={`shoe-card-wrapper-${item.id}`}>
      <img data-cy="shoe-card-image" width='100px' alt="shoe" src={item.image} />
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{item.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
