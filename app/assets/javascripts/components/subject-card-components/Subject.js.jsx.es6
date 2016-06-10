class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { labs : this.props.subject.labs  };

    this.onSubjectDelete = this.onSubjectDelete.bind(this);
    this.refreshLabs = this.refreshLabs.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addLab = this.addLab.bind(this);
    this.refreshSubjects = this.props.refreshSubjects.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const id = this.props.subject.id;
    const title = this.refs.title.value;
    const deadline = this.refs.deadline.value;

    const lab = {
      lab: {
        title: title,
        deadline: deadline
      }
    }

    $.ajax({
      url: `/subjects/${id}/labs`,
      method: 'POST',
      data: lab,
      dataType: 'json'
    }).then((response) => {
      this.addLab(response);
    }, (err) => console.log("FUCK!"));

    this.refs.title.value = "";
    this.refs.deadline.value = "";
  }

  addLab(lab) {
    this.setState({ labs: this.state.labs.concat([lab]) });
  }

  refreshLabs(labs) {
    this.setState({ labs: labs });
  }

  onSubjectDelete(e) {
    e.preventDefault();
    const id = this.props.subject.id;

    $.ajax({
      url: `/subjects/${id}`,
      method: 'DELETE',
      dataType: 'json'
    }).then((response) => {
      this.refreshSubjects(response);
    }, (err) => console.log("FUCK!"));
  }

  render() {
    const { title, deadline } = this.props.subject;
    const labs = this.state.labs;
    const id = this.props.id;

    return (
      <div className="subject-card">
        <div className="row">
          <div className="col-md-12">
            <div className="subject">
              <Header id={id} title={title} deadline={deadline} />
              <LabList subject_id={this.props.subject.id}
                       labs={labs} refreshLabs={this.refreshLabs} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="labs-buttons">
            <button className="btn btn-warning">Done</button>
            <button className="btn btn-success">Pass</button>
            <button onClick={this.onSubjectDelete} className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="row">
          <div className="add-lab">
            <form className="form-inline" onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" className="form-control" id="title" ref="title"/>
              </div>
              <div className="form-group">
                <label htmlFor="deadline">Deadline: </label>
                <input type="date" className="form-control" id="deadline" ref="deadline" />
              </div>
              <button type="submit" className="btn btn-info">Add Lab</button>
            </form>
          </div>
        </div>
      </div>


    );
  }
}
