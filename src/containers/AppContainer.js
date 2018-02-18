import AppView from '../views/AppView.js'
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';


function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),

    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    addTodoItem: TodoActions.addTodo,
    getRandomTodo: TodoActions.getRandom,
  };
}

export default Container.createFunctional(AppView, getStores, getState);