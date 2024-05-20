import { Link, useParams } from "react-router-dom";
// import { ProductDetails } from "../context/ProductsContext";
import Loader from "../Components/LoaderPage";
import styles from "./Detailes.module.css";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import {fetchProducts}from "../features/product/productSlice"
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";


function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const productDetails = useProductDetails(+id)
  // const { image, title, description, category, price } = productDetails;
  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  )
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (!productDetails) return <Loader />;

  return (
    <div>
      <div className={styles.container} data-aos="fade-up-right">
        <img src={productDetails.image} alt={productDetails.title} />
        <div className={styles.information}>
          <h3 className={styles.title}>{productDetails.title}</h3>
          <p className={styles.description}>{productDetails.description}</p>
          <p className={styles.category}>
            <SiOpenproject /> {productDetails.category}
          </p>
          <div>
            <span className={styles.price}>
              <IoMdPricetag /> {productDetails.price} $
            </span>
            <Link to="/products">
              <FaArrowLeft /> <span>Back to shop</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
