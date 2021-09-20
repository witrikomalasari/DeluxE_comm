import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  let url = `https://fakestoreapi.com/products`;
  try {
    const response = await axios.get(url);
    // console.log("NAMA PRODUCT", response.data);
    return dispatch({
      type: "All_Product",
      payload: response.data,
    });
  } catch (err) {
    console.log("error", err);
  }
};

export const getDetailProduct = (id) => {
  console.log("id yg dipassing", id);
  return async (dispatch) => {
    let url = `https://fakestoreapi.com/products/${id}`;
    try {
      const response = await axios.get(url);
      console.log("get DETAIL INI", response.data);

      return dispatch({
        type: "Detail_Product",
        payload: response.data,
      });
    } catch (err) {
      console.log("action gk dapat", err);
    }
  };
};
