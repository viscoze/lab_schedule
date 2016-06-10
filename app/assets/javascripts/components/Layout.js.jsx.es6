class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subjects: [] };

    this.addSubject = this.addSubject.bind(this);
    this.refreshSubjects = this.refreshSubjects.bind(this);
  }

  componentDidMount() {
    sendRequest('GET', '/subjects', (err, _data) => {
      if (err) throw new Error(err);
      let subjects = JSON.parse(_data);
      this.setState({ subjects: subjects });
    });
  }

  addSubject(subject) {
    this.setState({ subjects: this.state.subjects.concat([subject]) });
  }

  refreshSubjects(subjects) {
    this.setState({ subjects: subjects });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <SubjectList subjects={this.state.subjects}
                         refreshSubjects={this.refreshSubjects} />
          </div>
          <div className="col-sm-offset-2 col-md-3">
            <SideBar addSubject={this.addSubject}/>
          </div>
        </div>
      </div>
    );
  }
}
