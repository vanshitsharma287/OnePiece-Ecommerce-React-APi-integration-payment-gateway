import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import ProductHeader from "../../components/ProductHeader";
import Products from "../../components/Products";
import toast from 'react-hot-toast';
import Pagination from "../../components/common/Pagination";


const Home = () => {
  const [products, setProducts] =  useState([]);
  const [totalItem,setTotalItem] = useState(0);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

   const getAllProducts = async () => {
    try{  
          const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
          const jsonResult = await result.json();
          setProducts(jsonResult.products);
          setTotalItem(jsonResult.total);
    }
    catch(error){
      toast.error("Error while fetching products");
    }

  }

  useEffect(() => {
    getAllProducts();
  },[limit,skip]);

  return (
  <section className="home">
      <Header />
      <ProductHeader />
      <Products products={products} />
      <Pagination totalItem ={totalItem} limit={limit} setLimit={setLimit}  setSkip={setSkip} skip = {skip} />
  </section>
  )
}
export default Home;