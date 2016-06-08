class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject : {},
      labs:     []
    };
  }

  componentDidMount() {
    let id = this.props.subject.id;
    sendRequest('GET', `/subjects/${id}`, function(err, _data) {
      if (err) throw new Error(err);
      let data    = JSON.parse(_data);
      let subject = data.subject;
      let labs    = data.labs;
      this.setState({
        subject: subject,
        labs:    labs
      });
    }.bind(this));
  }

  render() {
    const { id, title, deadline } = this.state.subject;
    const labs = this.state.labs;

    return (
      <div className="subject-card">
        <div className="row">
          <div className="col-md-11">
            <div className="subject">
              <Header id={id} title={title} deadline={deadline} />
              <LabList labs={labs} />
            </div>
          </div>
          <div className="col-md-1">
            <CheckBar />
          </div>
        </div>
      </div>
    );
  }
}
