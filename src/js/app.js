import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createGlobalStyle } from 'styled-components';

import TodosStore from './store/Todos';
import Container from './components/Container';
import ExampleContainer from './components/ExampleContainer';
import AddTodoForm from './components/AddTodoForm';

import initIcons from './initializeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

initIcons();

const targetElement = document.getElementById('app');
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 50px 0;
    color: #3c4859;
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Roboto Slab', serif;
  }
  
  h1, h2, h3 {
    margin-top: 0;
  }
`

const App = () => (
  <Provider todosStore={TodosStore}>
    <Container>
      <GlobalStyles />
      <h1>Welcome to boilerplate, which consists of following stack:</h1>
      <ul>
        <li>React</li>
        <li>MobX</li>
        <li>styledComponents</li>
        <li>fontAwesomeIcons</li>
      </ul>

      <h2>Example of font awesome icons:</h2>
      <ExampleContainer>
        <span>Solid - </span><FontAwesomeIcon icon="star" /> {/* solid icon */}
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>Regular - </span><FontAwesomeIcon icon={['far', 'star']} /> {/* regular icon */}
      </ExampleContainer>

      <h2>Example of MobX state management:</h2>
      <ExampleContainer>
        <AddTodoForm />
      </ExampleContainer>
    </Container>
  </Provider>
);

ReactDOM.render(<App />, targetElement);
