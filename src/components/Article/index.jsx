import React from "react";
import ImageHolder from "../ImageHolder";
import styles from "./styles.module.scss";
import dateFormat from "../../utils/dateFormat";

const Article = (props) => {
  const { article } = props;

  const { field_photo_image_section, title, last_update } = article;

  const lastUpdated = dateFormat(last_update);

  return (
    <div className={styles["article-holder"]}>
      <div>
        <ImageHolder src={field_photo_image_section} alternateText={title} />
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{lastUpdated}</div>
      </div>
    </div>
  );
};

export default Article;
