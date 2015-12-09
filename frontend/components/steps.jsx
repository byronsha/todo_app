var React = require('react');
var StepStore = require('../stores/step_store.js');
var StepForm = require('./step_form.jsx');

var Steps = React.createClass({
  getInitialState: function () {
    return {store: []};
  },
  handleDestroy: function(e){
    StepStore.destroy(e.target.id);
  },
  stepsChanged: function(){
    this.setState({store: StepStore.all(this.props.todoItem.id)})
  },
  componentDidMount: function(){
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todoItem.id);
  },
  componentWillUnmount: function(){
    StepStore.removeChangedHandler(this.stepsChanged);
  },
  handleDone: function(e){
    StepStore.toggleDone(e.target.id);
  },
  render: function () {
    var that = this;
    var stepListStyle = {
      listStyleType: "lower-roman"
    };
    return(
      <ul style={stepListStyle}>
        {
          this.state.store.map(function(step, idx){
            return(
              <li>
                <div>
                  {step.body}
                  <button id={step.id} onClick={that.handleDone}>{(step.done === false) ? "Done" : "Undo"}</button>
                  <button id={step.id} onClick={that.handleDestroy}>Delete</button>
                </div>
              </li>
            );
          })
        }
        <br/>
        <StepForm todoId={this.props.todoItem.id}/>
      </ul>
    );
  }
});

module.exports = Steps;
