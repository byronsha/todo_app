var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');
var TodoForm = require('./todo_form.jsx');

var TodoList = React.createClass({
  getInitialState: function () {
    return { store: [] };
  },
  todosChanged: function(){
    this.setState({store: TodoStore.all() })
  },
  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount: function(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },
  render: function(){
    var todoListStyle = {
      listStyleType: "upper-roman"
    };
    return(
      <div>
        <ul style={todoListStyle}>
          {
            this.state.store.map(function(todo, idx){
              return (<li><TodoListItem key={idx} todoItem={todo}/></li>)
            })
          }
        </ul>
        <TodoForm/>
      </div>
    );
  }
});

module.exports = TodoList;
