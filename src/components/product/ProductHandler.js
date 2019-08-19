import { connect } from 'react-redux';
import Product from './Product'

function mapStateToProps(state, ownProps) {
  const { product } = ownProps;
  return {
    title: product.title,
    description: product.description,
    price: product.price,
  };
};

function mapDispatchToProps(dispatch) {
  return {}
};

const ProductHandler = connect(mapStateToProps, mapDispatchToProps)(Product)

export default ProductHandler;
