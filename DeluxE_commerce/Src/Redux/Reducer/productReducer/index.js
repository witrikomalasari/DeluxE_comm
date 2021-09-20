const initialState = {
  allProduct: [],
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "All_Product":
      return {
        ...state,
        allProduct: action.payload,
      };
    case "Detail_Product":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
