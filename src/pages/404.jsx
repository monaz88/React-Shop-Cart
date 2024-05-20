import React from "react";
import styles from "./404.module.css"

function PageNotfound() {
  return (
    <div className={styles.container}>
      <img src="/404.png" alt="404" />

      <div className={styles.text}>
        <span>Error 404</span>
        <h1>there is light in here too.</h1>
        <span>
          but the page is missing or you assembled the link incorrectly.
        </span>
      </div>
    </div>
  );
}

export default PageNotfound;
