var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function(){
    return {title: "", body: ""};
  },
  updateTitle: function(e){
    this.setState({title: e.target.value});
  },
  updateBody: function(e){
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    TodoStore.create({"title": this.state.title, "body": this.state.body, "done": false});
    this.setState({title: "", body: ""});
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Title
          <br/>
          <input onChange={this.updateTitle} type="text" value={this.state.title}></input>
          <br/>
          Description
          <br/>
          <input onChange={this.updateBody} type="text" value={this.state.body}></input>
          <br/><br/>
          <input type="submit" value="Add Todo"></input>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
