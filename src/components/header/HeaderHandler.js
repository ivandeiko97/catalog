import { connect } from 'react-redux';
import Header from './Header';

function mapStateToProps(state) {
  return {
    count: state.cart.reduce((count, product) => count + product.count, 0),
  }
};

function mapDispatchToProps(dispatch) {
  return {}
}

const HeaderHandler = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderHandler;
