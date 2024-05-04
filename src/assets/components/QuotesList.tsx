import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { selectQuotes } from "../../features/quotes/quotesSlice";
import { useGetQuotes } from "../../features/hooks/useGetQuotes";
import Paper from "@mui/material/Paper";

export const QuotesList = () => {
  const quotes = useAppSelector(selectQuotes);
  //może dodaj do local storage, żeby były w pamięci
  useGetQuotes();
  if (quotes.length == 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <StyledQuotesList>
        {quotes.map((quote, index) => (
          <StyledQuote elevation={1} key={index}>
            {quote.content}
          </StyledQuote>
        ))}
      </StyledQuotesList>
    </>
  );
};

const StyledQuotesList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const StyledQuote = styled(Paper)`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 1rem;
  font-size: 1.5rem;
  width: 30vw;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 70vw;
  }
`;
