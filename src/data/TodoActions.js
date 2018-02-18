import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import RandomUserAPI from './RandomUserAPI';

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },

  deleteTodo(id) {
  	TodoDispatcher.dispatch({
  		type: TodoActionTypes.DELETE_TODO,
  		id,
  	});
  },

  toggleTodo(id) {
  	TodoDispatcher.dispatch({
  		type: TodoActionTypes.TOGGLE_TODO,
  		id,
  	});
  },

  getRandom() {
  	TodoDispatcher.dispatch({
  		type: TodoActionTypes.GET_RANDOM,
  	});

  	RandomUserAPI.get();
  },

  receiveRandom(response) {
  	TodoDispatcher.dispatch({
  		type: TodoActionTypes.GET_RANDOM_RESPONSE,
  		response,
  	});
  }
};

export default Actions;