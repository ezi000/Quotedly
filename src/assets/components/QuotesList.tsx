import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { selectQuotes } from "../../features/quotes/quotesSlice";

export const QuotesList = () => {
  const quotes = useAppSelector(selectQuotes);
  return (
    <>
      <StyledQuotesList>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.content}</li>
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
  width: 50vw;
`;
