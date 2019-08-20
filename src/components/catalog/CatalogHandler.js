import { connect } from 'react-redux';
import Catalog from './Catalog';

function mapStateToProps(state, ownProps) {
  const { products } = state;

  return {
    products,
  };
};

function mapDispatchToProps(dispatch) {
  return {}
}

const CatalogHandler = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogHandler;
