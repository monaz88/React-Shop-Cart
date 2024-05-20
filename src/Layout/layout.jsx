import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
// import { usecart } from "../context/cartContext";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state =useSelector((store)=>store.cart)
  // const [state] = usecart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products" className={styles.Link}>MonaShop</Link>
        <Link to="/checkout">
        <div>
        <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
          </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Develop By Mona with 🤍 </p>
      </footer>
    </>
  );
}

export default Layout;
