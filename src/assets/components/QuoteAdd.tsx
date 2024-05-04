import { addQuote } from "../../features/quotes/quotesSlice";
import { useAppDispatch } from "../../app/hooks";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const QuoteAdd = () => {
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
      <h1>Place for your quote:</h1>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          multiline
          fullWidth
          rows={6}
          id="content"
          type="text"
          value={formik.values.content}
          onChange={formik.handleChange}
        ></TextField>
        <Button variant="contained" type="submit">
          Add quote
        </Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
