export async function getStoreProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

export async function getStoreProductsOne(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

export async function getJewelryData() {
  const response = await fetch(
    "https://dummyjson.com/products/category/womens-jewellery"
  );
  const data = await response.json();
  return data.products;
}

export async function getClothingData() {
  const response = await fetch(
    "https://dummyjson.com/products/category/womens-dresses"
  );
  const data1 = await response.json();
  const response2 = await fetch(
    "https://dummyjson.com/products/category/mens-shirts"
  );
  const data2 = await response2.json();
  const data = [...data1.products, ...data2.products];
  return data;
}

export async function getElectronicsData() {
  const response = await fetch(
    "https://dummyjson.com/products/category/furniture"
  );
  const data = await response.json();
  return data.products;
}

export async function getSmartPhoneData() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  const data = await response.json();
  return data.products;
}

export async function getGroceriesData() {
  const response = await fetch(
    "https://dummyjson.com/products/category/groceries"
  );
  const data = await response.json();
  return data.products;
}

export async function getSearchData(query) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const data = await response.json();
  return data.products;
}
