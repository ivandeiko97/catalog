import { connect } from 'react-redux';
import Product from './Product';
import { buyAction, deleteAction, changeCountAction } from '../../redux/action';

function mapStateToProps(state, ownProps) {
  const { product } = ownProps;

  return {
    title: product.title,
    description: product.description,
    price: product.price,
    id: product.id,
    count: product.count,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    buy: id => dispatch(buyAction(id)),
    deleteProduct: id => dispatch(deleteAction(id)),
    changeCount: (id, sign) => dispatch(changeCountAction(id, sign))
  }
};

const ProductHandler = connect(mapStateToProps, mapDispatchToProps)(Product)

export default ProductHandler;
