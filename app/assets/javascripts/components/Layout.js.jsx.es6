class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subjects: [] };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    sendRequest('GET', '/subjects', function(err, _data) {
      if (err) throw new Error(err);
      let subjects = JSON.parse(_data);
      this.setState({ subjects: subjects });
    }.bind(this));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <SubjectList subjects={this.state.subjects}/>
          </div>
          <div className="col-md-offset-1 col-md-3">
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}
