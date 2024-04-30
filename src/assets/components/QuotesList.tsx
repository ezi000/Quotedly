import { addQuote, selectQuotes } from "../../features/quotes/quotesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { useFormik } from "formik";

export const QuotesList = () => {
  const quotes = useAppSelector(selectQuotes);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      content: "",
      author: "",
      likes: 0,
      dislikes: 0,
    },
    onSubmit: (values) => {
      dispatch(
        addQuote({
          content: values.content,
          author: "",
          likes: 0,
          dislikes: 0,
        })
      );
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="content"
          type="text"
          value={formik.values.content}
          onChange={formik.handleChange}
        ></input>
        <button type="submit">Add quote</button>
      </form>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.content}</li>
        ))}
      </ul>
    </>
  );
};
