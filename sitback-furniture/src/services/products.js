export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch("https://free.mockerapi.com/mock/cb05d79c-f869-46cc-80c8-0aa2c59fc21a");
    const data = await response.json();
    return data.products.filter((product) => product.category === category);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
