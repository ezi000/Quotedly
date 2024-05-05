import { useEffect } from "react";
import { QuoteType, selectQuotes } from "../quotes/quotesSlice";
import { useDispatch } from "react-redux";
import { setQuotes } from "../quotes/quotesSlice";
import { useAppSelector } from "../../app/hooks";
type APIResponse = {
  content: string;
  author: string;
}[];

export const useGetQuotes = () => {
  const dispatch = useDispatch();
  const quotes = useAppSelector(selectQuotes);
  useEffect(() => {
    if (quotes.length === 0) {
      const savedQuotes = localStorage.getItem("quotes");
      if (savedQuotes) {
        dispatch(setQuotes(JSON.parse(savedQuotes)));
      } else {
        fetch("https://api.quotable.io/quotes/random?limit=50")
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
    }
  }, []);
};
