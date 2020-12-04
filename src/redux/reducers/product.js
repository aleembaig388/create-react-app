import * as actiontype from "../types/product";

const initailState = {
  isLoading: false,
  products: null,
};

const product = (state = initailState, action) => {
  switch (action.type) {
    case actiontype.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        products: null,
      };
    }
    case actiontype.GET_PRODUCTS_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        products: action.products || [],
      };
    }
    case actiontype.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        products: null,
      };
    }
    default:
      return state;
  }
};
export default product;
