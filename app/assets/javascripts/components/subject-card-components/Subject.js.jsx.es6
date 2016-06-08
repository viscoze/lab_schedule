class Subject extends React.Component {
  render() {
    const { id, title, deadline, labs } = this.props.subject;

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
