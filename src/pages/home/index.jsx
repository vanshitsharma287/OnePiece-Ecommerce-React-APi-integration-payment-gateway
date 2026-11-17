import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import ProductHeader from "../../components/ProductHeader";
import Products from "../../components/Products";
import toast from 'react-hot-toast';
import Pagination from "../../components/common/Pagination";
import Loader from "../../components/common/Loader";


const Home = () => {
  const [products, setProducts] =  useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalItem,setTotalItem] = useState(0);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

   const getAllProducts = async () => {
    try{  
          const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
          const jsonResult = await result.json();
          setProducts(jsonResult.products);

          setTotalItem(jsonResult.total);
          setLoading(false);
    }
    catch(error){
      toast.error("Error while fetching products");
      setLoading(false);
    }

  }

  const searchProducts = async () => {
    try{
      const result = await fetch(`https://dummyjson.com/products/search?q=${searchValue}&limit=${limit}&skip=${skip}`); 
      const jsonResult = await result.json();
      setProducts(jsonResult.products);
      setTotalItem(jsonResult.total);
      setLoading(false);
    } catch(error){
      toast.error("Error while searching products");
      setLoading(false);
    }
  }  

  useEffect(() => {
    if(searchValue.length > 0){
      const debounce = setTimeout(() => {
        searchProducts();
      }, 500);
      return () => clearTimeout(debounce);
    } else {
      getAllProducts();
    }
  }, [searchValue,limit,skip]);


  return (
  <section className="home">
      <Header disabledSearch={false} setSearchValue={setSearchValue} searchValue={searchValue} />
      <ProductHeader  totalProducts = {totalItem}/>
      {loading ? <Loader  /> : <Products products={products} />}
      <Pagination totalItem ={totalItem} limit={limit} setLimit={setLimit}  setSkip={setSkip} skip = {skip} />
  </section>
  )
}
export default Home;