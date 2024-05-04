import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export type QuoteType = {
  content: string;
  author: string;
  likes: number;
  dislikes: number;
};

type QuotesState = {
  quotes: QuoteType[];
};

const initialState: QuotesState = {
  quotes: [],
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote: (state, action: PayloadAction<QuoteType>) => {
      state.quotes.push(action.payload);
    },
    setQuotes: (state, action: PayloadAction<QuoteType[]>) => {
      state.quotes = action.payload;
    },
  },
});

export const { addQuote, setQuotes } = quotesSlice.actions;
export const selectQuotes = (state: RootState) => state.quotes.quotes;
export default quotesSlice.reducer;
