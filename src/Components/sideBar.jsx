import { FaListUl } from "react-icons/fa6";
import { createQueryObject } from "../Helpers/helper";
import styles from "./sideBar.module.css";
import { category } from "../constants/List";


function SideBar({ query,setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categorise</p>
      </div>
     <ul onClick={categoryHandler} >
       {category.map((item) => (
         <li key={item.id} 
         className=
         {item.type.toLowerCase()===query.category?styles.selected:null}
         >{item.type}</li> 
       ))}

     </ul>
    </div>
  );
}

export default SideBar;
