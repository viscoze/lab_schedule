class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subjects: [] };

    this.addSubject = this.addSubject.bind(this);
  }

  componentDidMount() {
    sendRequest('GET', '/subjects', (err, _data) => {
      if (err) throw new Error(err);
      let subjects = JSON.parse(_data);
      this.setState({ subjects: subjects });
    });
  }

  addSubject(subject) {
    console.log(subject);
    console.log(this.state.subjects);
    this.setState({ subjects: this.state.subjects.concat([subject]) });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <SubjectList subjects={this.state.subjects}/>
          </div>
          <div className="col-sm-offset-1 col-md-3">
            <SideBar addSubject={this.addSubject}/>
          </div>
        </div>
      </div>
    );
  }
}
