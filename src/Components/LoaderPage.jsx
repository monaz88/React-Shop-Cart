import React from "react";
import { Rings } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <Rings
        height="100"
        width=""
        color="#fe5d42"
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default Loader;
