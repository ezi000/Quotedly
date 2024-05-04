import { useEffect } from "react";
import { QuoteType } from "../quotes/quotesSlice";
import { useDispatch } from "react-redux";
import { setQuotes } from "../quotes/quotesSlice";
type APIResponse = {
  content: string;
  author: string;
}[];

export const useGetQuotes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedQuotes = localStorage.getItem("quotes");
    if (savedQuotes) {
      dispatch(setQuotes(JSON.parse(savedQuotes)));
    } else {
      fetch("https://api.quotable.io/quotes/random?limit=3")
        .then((response) => response.json())
        .then((data: APIResponse) => {
          const quotesList = data.map<QuoteType>((quote) => {
            return {
              content: quote.content,
              author: quote.author,
              likes: 0,
              dislikes: 0,
            };
          });
          localStorage.setItem("quotes", JSON.stringify(quotesList));
          dispatch(setQuotes(quotesList));
        });
    }
  }, []);
};
