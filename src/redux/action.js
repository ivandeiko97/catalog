export const BUY_PRODUCT = 'BUY_PRODUCT';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const PLUS_COUNT_PRODUCT = 'PLUS_COUNT_PRODUCT';
export const MINUS_COUNT_PRODUCT = 'MINUS_COUNT_PRODUCT'

export function buyAction(id) {
  return {
    type: BUY_PRODUCT,
    id
  };
};

export function deleteAction(id) {
  return {
    type: DELETE_FROM_CART,
    id,
  };
};

export function plusCountAction(id) {
  return {
    type: PLUS_COUNT_PRODUCT,
    id,
  }
}

export function minusCountAction(id) {
  return {
    type: MINUS_COUNT_PRODUCT,
    id,
  }
}