import axios from "axios";

export const fetchArticle = (pageNo, setArticle) => {
  axios
    .get("/app-api/v1/photo-gallery-feed-page/page/" + pageNo)
    .then((response) => {
      setArticle && setArticle(response?.data);
    })
    .then((err) => {
      console.log(err);
    });
};
