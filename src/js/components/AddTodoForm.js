import React, { useCallback, useState } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledForm = styled.form`
  display: flex;
`;

const NameInput = styled.input`
  height: 50px;
  padding: 0 16px;
  border-radius: 7px;
  border: 1px solid #d3dce6;
  outline: none;
  color: #3c4859;
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
`;

const StyledSubmit = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 15px;
  border: none;
  color: #fff;
  background: #0facf3;
  cursor: pointer;
  border-radius: 7px;
`;

const AddTodoForm = inject('todosStore')(observer(
  (props) => {
    const [ todoName, setTodoName ] = useState('');

    const handleFormSubmit = useCallback(e => {
      e.preventDefault();

      props.todosStore.addTodo({
        id: new Date().getTime(),
        name: todoName,
        done: false
      });
    });

    return (
      <div>
        <h2>Todo list</h2>
        <p>{`Todos done: ${props.todosStore.getTotalTodosDone}`}</p>
        <p>{`Todos left to be done: ${props.todosStore.getTotalTodosNotDone}`}</p>

        <StyledForm action="" onSubmit={handleFormSubmit}>
          <NameInput type="text" onChange={(e) => setTodoName(e.target.value)} />
          <StyledSubmit type="submit">
            <FontAwesomeIcon icon="plus" />
          </StyledSubmit>
        </StyledForm>

        {
          props.todosStore.todos.length > 0 &&
          <ul>
            {
              props.todosStore.todos.map(todo => (
                <TodoItem
                  id={todo.id}
                  key={todo.id}
                  name={todo.name}
                  done={todo.done}
                />
              ))
            }
          </ul>
        }
      </div>
    );
  }
));

export default AddTodoForm;
