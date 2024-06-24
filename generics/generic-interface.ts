interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}
//when generic type user then data represent as User data
// and generic type product then data represent as Product data
const response = fetch<Product>("url");
// response.data?.title
