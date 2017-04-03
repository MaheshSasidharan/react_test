function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.  And delay is {props.myDelay}.  And Dummy {props.dummy} </h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  this.timeout = setTimeout(function(){ 
      console.log(this.props.delay +  " ---- " + Date.now()); 
      this.timerID = setInterval(() => this.tick(),this.props.delay);}.bind(this), this.props.delay);    
  }

  componentWillUnmount() {
    console.log("HII");
    clearInterval(this.timerID);
    clearTimeour(this.timeout);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} myDelay={this.props.delay} dummy="123"/>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock delay="1"/>
      <Clock delay="333"/>
      <Clock delay="666"/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
