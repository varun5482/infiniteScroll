import axios from "axios";

export const fetchArticle = (pageNo, setArticle, handleErr) => {
  axios
    .get("/app-api/v1/photo-gallery-feed-page/page/" + pageNo)
    .then((response) => {
      setArticle && setArticle(response?.data);
    })
    .catch((err) => {
      console.log(err);
      handleErr && handleErr(err);
    });
};
