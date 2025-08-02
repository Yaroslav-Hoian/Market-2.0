import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';
const searchParams = new URLSearchParams({
  limit: 12,
});

export async function getCategoriesList() {
  try {
    const data = await axios.get(`/category-list`);
    return data.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}

export async function getProductsList(currentPage = 1) {
  try {
    const response = await axios.get(
      `?${searchParams}&skip=${(currentPage - 1) * 12}`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}

export async function getProductsListByCategory(category, currentPage = 1) {
  try {
    const response = await axios.get(
      `/category/${category}?${searchParams}&skip=${(currentPage - 1) * 12}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}

export async function getProductsListId(id) {
  try {
    const response = await axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}

export async function getProductsBySearch(value, currentPage = 1) {
  try {
    const response = await axios.get(
      `/search?q=${value}&${searchParams}&skip=${(currentPage - 1) * 12}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}
