import { observable, computed, action } from 'mobx';

class Todos {
  @observable todos = [];

  @action.bound addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  @action.bound toggleDoneState(id) {
    this.todos = this.todos.map(todo => (
      todo.id === id
        ? {
          ...todo,
          done: !todo.done
        }
        : todo
    ));
  }

  @computed get totalTodos() {
    return this.todos.length;
  }

  @computed get getTotalTodosDone() {
    return this.todos.filter(todo => todo.done).length;
  }

  @computed get getTotalTodosNotDone() {
    return this.todos.filter(todo => !todo.done).length;
  }
}

const TodosStore = new Todos();

export default TodosStore;
