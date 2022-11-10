import React from "react";
import styled from "styled-components";
import { Button } from "../../../styles/Button";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {

    
const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

  return (
    <Wrapper>
      <img src="../images/error1.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

export default PageNotFound;
