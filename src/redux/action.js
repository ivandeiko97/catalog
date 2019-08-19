export const BUY_PRODUCT = 'BUY_PRODUCT';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CHANGE_COUNT_PRODUCT = 'CHANGE_COUNT_PRODUCT';

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

export function changeCountAction(id, sign) {
  return {
    type: CHANGE_COUNT_PRODUCT,
    id,
    sign,
  }
}
