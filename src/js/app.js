import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const wrapper = document.getElementById('app');

const Component = styled.div`
  background: white
`;

ReactDOM.render(<Component>test</Component>, wrapper);
