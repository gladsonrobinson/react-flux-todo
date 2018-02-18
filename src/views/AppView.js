import React from 'react';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
    </header>
  );
}


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todotext: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.addTodoItem = this.addTodoItem.bind(this);
	}

	handleChange(event) {
		this.setState({
			todotext: event.target.value
		});
	}

	addTodoItem() {
		this.props.addTodoItem(this.state.todotext);
		this.setState({
			todotext: ''
		});
	}

	render()  {
		return (
			<section id="main">
		      <ul id="todo-list">
		        {[...this.props.todos.values()].reverse().map(todo => (
		          <li key={todo.id}>
		            <div className="view">
		              <input
		                className="toggle"
		                type="checkbox"
		                checked={todo.complete}
		                onChange={() => this.props.onToggleTodo(todo.id)}
		              />
		              <label>{todo.text}</label>
		              <button
		                className="destroy"
		                onClick={() => this.props.onDeleteTodo(todo.id)}
		              />
		            </div>
		          </li>
		        ))}
		      </ul>
		      <div id="add-todo">
		      	<input type="text" id="todotext" name="todotext" value={this.state.todotext} onChange={this.handleChange}/>
		      	<button id="add-todo-button" className="add-todo-button" onClick={this.addTodoItem}>Add Todo</button>
		     	<button id="add-todo-button" className="add-todo-button" onClick={this.props.getRandomTodo}>Get Todo</button>
		      </div>
		    </section>
  		)
	}
}



function Footer(props) {
  if (props.todos.size === 0) {
    return null;
  }
  const remaining = props.todos.filter(todo => !todo.complete).size;
  const phrase = remaining === 1 ? ' item left' : ' items left'; 
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {remaining}
        </strong>
        {phrase}
      </span>
    </footer>
  );
}


export default AppView;