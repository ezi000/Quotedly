import { addQuote } from "../../features/quotes/quotesSlice";
import { useAppDispatch } from "../../app/hooks";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import styled from "styled-components";
import Button, { ButtonProps } from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const QuoteAdd = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      formik.resetForm();
      navigate("/");
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.content) {
        errors.content = "Required";
      }
      return errors;
    },
  });

  return (
    <>
      <QuoteAddBody>
        <h1>Place for your quote:</h1>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            label={
              <>
                Your quote here <span style={{ color: "#e63946" }}>*</span>
              </>
            }
            multiline
            fullWidth
            rows={6}
            id="content"
            type="text"
            value={formik.values.content}
            onChange={formik.handleChange}
            sx={{ backgroundColor: "white" }}
            error={
              formik.touched.content && formik.errors.content ? true : false
            }
          ></TextField>
          <TextField
            label="Who said that?"
            fullWidth
            id="author"
            type="text"
            value={formik.values.author}
            onChange={formik.handleChange}
            sx={{ backgroundColor: "white" }}
          ></TextField>
          <ColorButton variant="contained" type="submit" endIcon={<AddIcon />}>
            Add Quote
          </ColorButton>
        </Form>
      </QuoteAddBody>
    </>
  );
};

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#f16603 !important",
  borderRadius: "0.7rem !important",
}));

const Form = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const QuoteAddBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
