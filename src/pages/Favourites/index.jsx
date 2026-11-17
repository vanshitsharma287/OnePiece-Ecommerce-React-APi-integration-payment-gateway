import { useEffect, useState } from "react";
import BreadCrumb from "../../components/common/Breadcrumb";
import Header from "../../components/common/Header";
import Products from "../../components/Products";
import { getLocalStorage } from "../../utils/localStorage";
import toast from "react-hot-toast";

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
       fetchFav();
    }, []);

    const fetchFav = async () => {
      try {
        const fav = getLocalStorage("favourites");
        if(fav?.length) {
            const favPromise = fav.map(f => fetch(`https://dummyjson.com/products/${f}`));
            const favRes = await Promise.allSettled(favPromise);
            const favJsonRaw = favRes.map(f => (f.value).json());
            const favJson = await Promise.allSettled(favJsonRaw);
            setFavourites(favJson.map(f => f.value));
        }
      } catch(error) {
        toast.error("Error while fetching favourites");
      }
    }


    return(
        <section className="favourites">
           <Header />
           <BreadCrumb />
           <Products products={favourites} />
        </section>
    )
}
export default Favourites;