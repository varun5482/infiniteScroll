import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../utils/fetchArticles";
import Article from "../components/Article";
import { useCallback } from "react";
import { setArticleData, setPageNumber } from "../slices/articleSlice";
import styles from "./styles.module.scss";

const ArticleList = () => {
  const { pageNo, articles, reachedEnd } = useSelector(
    (state) => state.article
  );

  const dispatch = useDispatch();

  const updateArticles = useCallback((articles) => {
    dispatch(setArticleData(articles.nodes));
  }, []);

  const handleErr = (err) => {
    dispatch(setPageNumber(pageNo + 1));
  };

  useEffect(() => {
    fetchArticle(pageNo, updateArticles, handleErr);
  }, [pageNo, updateArticles]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (!reachedEnd && scrollTop + clientHeight >= scrollHeight) {
      dispatch(setPageNumber(pageNo + 1));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [articles]);

  return (
    <React.Fragment>
      <div className={styles["fetched-pages"]}>Fetched pages: {pageNo}</div>
      <div className={styles["article-list-holder"]}>
        {articles.map((article) => {
          return <Article article={article.node} />;
        })}
        {reachedEnd ? (
          <div class={styles["end-of-news"]}>That's all for the day folks</div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default ArticleList;
