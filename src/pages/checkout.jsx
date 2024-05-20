// import { usecart } from "../context/cartContext";
import BasketCard from "../Components/BasketCard";
import BasketCardSidebar from "../Components/BasketCartSidebar";
import styles from "./CheckoutPage.module.css"
import { useSelector } from "react-redux";

function Checkout() {
 // const [state, dispatch] = usecart();
 // const clickHandler=(type,payload)=>dispatch({type,payload})
 const state = useSelector((store) => store.cart)
  if(!state.itemsCounter){
     return (
      <div className={styles.empty_basket}> 
      Your basket is empty! Please add some items to your .</div>
       
     )
  }
  return (
    <div  className={styles.container}>
      <BasketCardSidebar state={state} />
      <div className={styles.products}>
      {state.selectedItems.map((product) => (
        <BasketCard key={product.id} 
        data={product}
       />
      ))}
      </div>
    </div>
  );
}

export default Checkout;
