import { BUY_PRODUCT, DELETE_FROM_CART, PLUS_COUNT_PRODUCT, MINUS_COUNT_PRODUCT } from './action';

const initialState = {
  cart: [],
  products: [
    {
      title : "Product 1",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "128",
      id : "15"
    },
    {
      title : "Product 2",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "9",
      id : "26"
    },
    {
      title : "Product 3",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "146",
      id : "23"
    },
    {
      title : "Product 4",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "256",
      id : "74"
    },
    {
      title : "Product 5",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price : "28",
      id : "89"
    }
  ],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case BUY_PRODUCT: 
      const {products, cart} = state;
      let newCart = [...cart]
      let product = newCart.find(product => product.id === action.id);
      console.log(action.count)
      if (product) {
        product.count = product.count + action.count;
      } else {
          let newProduct = products.find(product => product.id === action.id)
          newProduct.count = action.count;
          newCart.push(newProduct);
      }
      return {
        ...state,
        cart: newCart,
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.id)
      }
    case PLUS_COUNT_PRODUCT: 
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product.id === action.id) {
            return {
              ...product,
              count: product.count + 1,
            };
          };
          return product;
        })
      }
    case MINUS_COUNT_PRODUCT: 
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product.id === action.id) {
            return {
              ...product,
              count: product.count - 1,
            };
          };
          return product;
      })
    }
    default:
      return state;
  };
};