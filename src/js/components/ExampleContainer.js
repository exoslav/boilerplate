import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 25px;
  margin-bottom: 30px;
  border: 1px solid #b9c7d7;
  border-radius: 7px;
`;

const ExampleContainer = props => (
  <StyledContainer>
    {props.children}
  </StyledContainer>
);

export default ExampleContainer;
