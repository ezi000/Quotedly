import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { Button, ButtonProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <ColorButton variant="contained" endIcon={<AddIcon />}>
          Add Quote
        </ColorButton>
      </StyledNavBar>
    </>
  );
};

const StyledNavBar = styled(Paper)`
  display: flex;
  align-items: center;
  width: 30vw;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "green !important",
  width: "6rem",
}));
