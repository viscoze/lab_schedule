class Lab extends React.Component {
  constructor(props) {
    super(props);

    this.refreshLabs = this.props.refreshLabs.bind(this);
    this.onLabDelete = this.onLabDelete.bind(this);
  }

  onLabDelete(e) {
    e.preventDefault();
    const subject_id = this.props.subject_id;
    const labs_id    = this.props.lab.id;

    $.ajax({
      url: `/subjects/${subject_id}/labs/${labs_id}`,
      method: 'DELETE',
      dataType: 'json'
    }).then((response) => {
      this.refreshLabs(response);
    }, (err) => console.log("FUCK!"));
  }

  render() {
    const { title, deadline, description } = this.props.lab;
    const id = this.props.id;

    return (
      <div className="lab">
        <div className="row">
          <div className="col-md-10">
            <Header id={id} title={title} deadline={deadline} />
          </div>
          <div className="col-md-2">
            <button className="btn btn-danger btn-sm" onClick={this.onLabDelete}>
              <span className="glyphicon glyphicon-remove-sign"></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
