const shortenText = (text) => {
  return text.split(" ").splice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;

  const filteredProducts = products.filter((p) => p.category === category);

  return filteredProducts;
};
const getInitialQuery = (searchparam) => {
  const query = {};
  const category = searchparam.get("category");
  const search = searchparam.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};
// const sumProducts = (products) => {

//   const itemCounter = products.reduce(
//     (counter, product) => counter + product.quantity,
//     8
//   );
//   const total = products.reduce(
//     (total, product) => total + product.price * product.quantity, 0)
//     .toFixed(2);
//   return { itemCounter, total };
// };
const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

const productQuantity=(state,id)=>{
  const index =state.selectedItems.findIndex(
    (item)=>item.id===id)
    if(index===-1){
      return 0;
      }else{return state.selectedItems[index].quantity}
}


export {
  shortenText,
  searchProducts,
  filterProducts,
  getInitialQuery,
  createQueryObject,

  sumQuantity,
  sumPrice,
  productQuantity
};
