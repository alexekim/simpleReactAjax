const setDimension = "50%";

class Greeting extends React.Component {
  action() {
    console.log("hey yo action!");
  }
  render() {
    return <h5 onClick={this.action}>Hello, {this.props.name}</h5>;
  }
}

class Trial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    if (this.state.value === "Alex") {
      console.log("it's Alex");
      document.getElementById("root").style.background = "#bad80a";
    } else {
      document.getElementById("root").style.background = "";
    }
    return <div>
      <label htmlFor="name">Name:</label><input onChange={this.handleChange.bind(this)} type="text" id="name"/><br/>
      <p>type in 'Alex' and see what happens!</p>
    </div>;
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "decent :)"
    };
    this.changeStateMood = this.changeStateMood.bind(this);
  }
  changeStateMood(e) {
    e.preventDefault();
    if (this.state.mood == "decent :)") {
      this.setState({mood: "foul due to hunger >:("});
    } else {
      this.setState({mood: "decent :)"});
    }
  }
  render() {
    console.log("props:");
    console.log(this.props);
    console.log("children:");
    console.log(this.props.children);
    console.log("state:");
    console.log(this.state);
    return <a href="#" onClick={this.changeStateMood}>state.mood is: {this.state.mood}</a>;
  }
}
// var Component = React.createClass({
//   getInitialState: function() {
//     return {mood: 'decent'};
//   },
//   render: function() {
//   console.log("props:");
//   console.log(this.props);
//   console.log("children:");
//   console.log(this.props.children);
//   console.log("state:");
//   console.log(this.state);
//   return <p>compontent content</p>;
//   }
// })
var string = "<Component />"

ReactDOM.render(
  <div>
  <h3>React Section</h3>
  <Trial/>
  <Greeting name="ken"/>
  <Component hey="yo" sup="dawg">
    <p>child of {string}</p>
  </Component>
  <img height={setDimension} width={setDimension} src="http://www.lung.org/images/ala-logo-head.png"/>
</div>, document.getElementById('root'));
