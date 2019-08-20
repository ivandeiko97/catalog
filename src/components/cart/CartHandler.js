import { connect } from 'react-redux';
import Cart from './Cart';

function mapStateToProps(state) {
  const { cart } = state;
  return {
    cart,
    total: cart.reduce((total, product) => total + (product.price * product.count), 0),
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const CartHandler = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartHandler;
