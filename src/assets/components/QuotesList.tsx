import { addQuote, selectQuotes } from "../../features/quotes/quotesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { QuoteType } from "../../features/quotes/quotesSlice";
export const QuotesList = () => {
  const quotes = useAppSelector(selectQuotes);
  const dispatch = useAppDispatch();
  const [quoteToAdd, setQuoteToAdd] = useState<QuoteType>({
    content: "",
    likes: 0,
    dislikes: 0,
  });

  return (
    <>
      <input
        type="text"
        value={quoteToAdd.content}
        onChange={(e) => setQuoteToAdd(e.target.value)}
      ></input>
      <button onClick={() => dispatch(addQuote(quoteToAdd))}>Add quote</button>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.content}</li>
        ))}
      </ul>
    </>
  );
};
