import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "./types";
export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data =>{
          return dispatch({type:FETCH_PRODUCTS, payload: data});
      });
}

export const filterProducts = (products, size) => (dispatch) => {
    return dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items:size === ''? products: products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0)
        }
    })
}

export const sortProducts = (items, sort) => dispatch => {
  const products = items.slice()
  if(sort !== ''){
    products.sort((a,b) => (sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
  } else {
    products.sort((a,b) => (a.id > b.id ? 1: -1));
  }

  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products
    }
  });
};


//   if (sort !== "") {
//     //If the sort state is NOT empty
//     //And its value is lowest OR highest
//     //sort a && b
//     // if a.price is > b.price
//     // we return 1 else if not -1
//     //Then sort at the product price
//     //Else sort by ID

//     products.sort((a, b) =>
//       sort === "Lowest"
//         ? a.price > b.price
//           ? 1
//           : -1
//         : a.price < b.price
//         ? 1
//         : -1
//     );
//   } else {
//     products.sort((a, b) => (a.id < b.id ? 1 : -1));
//   } //Checks the value of size e.g Small, Medium
//Fetching products to redux then dispatches the products to the playloads and fills database