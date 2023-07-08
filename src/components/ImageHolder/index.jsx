import React from "react";
import styles from "./styles.module.scss";

const ImageHolder = ({ src, alternateText }) => {
  return (
    <img className={styles["image-holder"]} src={src} alt={alternateText} />
  );
};

export default ImageHolder;
