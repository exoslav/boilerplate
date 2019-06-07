import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import initIcons from './initializeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

initIcons();

const wrapper = document.getElementById('app');

const Component = styled.div`
  background: white
`;

const WelcomeComponent = () => (
  <Component>
    <p>Hello world!</p>
    <FontAwesomeIcon icon="star" /> {/* solid icon */}
    <FontAwesomeIcon icon={['far', 'star']} /> {/* regular icon */}
  </Component>
);

ReactDOM.render(<WelcomeComponent />, wrapper);
