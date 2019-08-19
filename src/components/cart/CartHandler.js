import { connect } from 'react-redux';
import Cart from './Cart';

function mapStateToProps(state) {
  const { cart, total } = state;
  return {
    cart,
    total,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const CartHandler = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartHandler;
