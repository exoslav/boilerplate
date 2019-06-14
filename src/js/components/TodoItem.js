import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const StyledTodoItem = styled.li`
  margin-bottom: 15px;
  text-decoration: ${props => props.done ? 'line-through' : ''};
  cursor: pointer;
  
  &:hover {
    color: #000;
  }
`;

const TodoItem = inject('todosStore')(observer(
  (props) => (
    <StyledTodoItem done={props.done} onClick={() => props.todosStore.toggleDoneState(props.id)}>
      <span>{props.name}</span>
    </StyledTodoItem>
  )
));

export default TodoItem;
