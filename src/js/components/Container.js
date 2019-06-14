import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const Container = props => (
  <StyledContainer>
    {props.children}
  </StyledContainer>
);

export default Container;
