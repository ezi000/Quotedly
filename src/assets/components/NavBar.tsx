import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { Button, ButtonProps, PaperProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <Link to="/addQuote">
          <ColorButton variant="contained" endIcon={<AddIcon />}>
            Add Quote
          </ColorButton>
        </Link>
        <H1>50 QUOTES</H1>
        <Author>
          <Avatar alt="Dami" src="/images/image-of-me.jpg" />
          <StyledParagraph>
            BY <div>DAMIAN</div>
          </StyledParagraph>
        </Author>
      </StyledNavBar>
    </>
  );
};

const H1 = styled.h1`
  font-size: 1.7rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledNavBar = styled(Paper)<PaperProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "50vw",
  padding: "1rem",
  borderRadius: "1.5rem !important",
  "@media (max-width: 768px)": {
    width: "70vw",
  },
}));

const Author = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  width: fit-content;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#f16603 !important",
  borderRadius: "1rem !important",
  width: "6rem",
  "@media (max-width: 768px)": {
    width: "5rem",
    fontSize: "0.7rem !important",
  },
}));
