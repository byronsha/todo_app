var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var Steps = require('./steps.jsx');

var TodoDetailView = React.createClass({
  getInitialState: function(){
    return {showing: false};
  },
  handleDestroy: function(e){
    TodoStore.destroy(this.props.todoItem.id);
  },
  handleClick: function(e){
    this.setState({showing: !this.state.showing})
  },
  render: function(){
    if (this.state.showing){
      return(
        <span>
          <button onClick={this.handleClick}>Close Details</button>
          <div>
            <b><i>{this.props.todoItem.body}</i></b>
            <button onClick={this.handleDestroy}>Delete</button>
            <Steps todoItem={this.props.todoItem}/>
          </div>
        </span>
      );
    } else {
      return (
        <span>
          <button onClick={this.handleClick}>Details</button>
        </span>
      );
    }
  }
});

module.exports = TodoDetailView;
