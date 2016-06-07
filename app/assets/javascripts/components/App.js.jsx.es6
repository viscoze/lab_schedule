class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    sendRequest('GET', '/subjects', function(err, data) {
      if (err) throw new Error(err);
      this.setState({ data: data });
    }.bind(this));
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}
