import styled from "styled-components";

export const Description = () => {
  return (
    <>
      <DescriptionBox>
        <H1>
          This is a simple app that displays 50 random quotes from the{" "}
          <StyledLink href="https://quotable.io/">Quotable API</StyledLink>.
        </H1>
        <H5>
          You can add your own quotes to the list and like or dislike them. No
          account needed!
        </H5>
      </DescriptionBox>
    </>
  );
};

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 50vw;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 70vw;
  }
`;

const StyledLink = styled.a`
  color: #e12881;
  text-decoration: none;
`;

const H1 = styled.h1`
  font-size: 1.7rem;
  margin: 0;
  text-align: center;
`;

const H5 = styled.h5`
  font-size: 1rem;
  margin: 0;
  text-align: center;
  color: #777;
`;
