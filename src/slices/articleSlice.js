import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNo: 1,
  articles: [],
  reachedEnd: false,
};

export const articleSlice = createSlice({
  name: "articleSlice",
  initialState: initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNo = action.payload;
    },
    setArticleData: (state, action) => {
      if (action.payload.length === 0) {
        state.reachedEnd = true;
      } else {
        state.articles = [...state.articles, ...action.payload];
      }
    },
  },
});

export const { setArticleData, setPageNumber } = articleSlice.actions;

export default articleSlice.reducer;
