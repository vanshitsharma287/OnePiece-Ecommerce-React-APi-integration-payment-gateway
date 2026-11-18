import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import ProductHeader from "../../components/ProductHeader";
import Products from "../../components/Products";
import toast from 'react-hot-toast';
import Pagination from "../../components/common/Pagination";
import Loader from "../../components/common/Loader";
import { useSearchParams } from "react-router";


const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const savedLimit = Number(searchParams.get("limit"));
  const initialLimit = [10, 20, 30].includes(savedLimit) ? savedLimit : 20;
  const initialPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const [products, setProducts] =  useState([]);
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");
  const [loading, setLoading] = useState(true);
  const [totalItem,setTotalItem] = useState(0);
  const [limit, setLimit] = useState(initialLimit);
  const [skip, setSkip] = useState((initialPage - 1) * initialLimit);

  const updatePage = (page, nextLimit = limit) => {
    setLimit(nextLimit);
    setSkip((page - 1) * nextLimit);
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);
      nextParams.set("page", String(page));
      nextParams.set("limit", String(nextLimit));
      return nextParams;
    }, { replace: true });
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setSkip(0);
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);
      nextParams.set("page", "1");
      if (value) {
        nextParams.set("q", value);
      } else {
        nextParams.delete("q");
      }
      return nextParams;
    }, { replace: true });
  };

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
      <Header disabledSearch={false} setSearchValue={handleSearchChange} searchValue={searchValue} />
      <ProductHeader  totalProducts = {totalItem}/>
      {loading ? <Loader  /> : <Products products={products} />}
      <Pagination totalItem={totalItem} limit={limit} skip={skip} onPageChange={updatePage} />
  </section>
  )
}
export default Home;