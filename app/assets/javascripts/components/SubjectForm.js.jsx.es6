class SubjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.addSubject = this.props.addSubject.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const quantity_of_labs = this.refs.quantity_of_labs.value;
    const priority = this.refs.priority.value;
    const deadline = this.refs.deadline.value;

    const subject = {
      subject: {
        title: title,
        quantity_of_labs: quantity_of_labs,
        priority: priority,
        deadline: deadline
      }
    }

    $.ajax({
      url: '/subjects',
      method: 'POST',
      data: subject,
      dataType: 'json'
    }).then((response) => {
      this.addSubject(response);
    }, (err) => console.log("FUCK!"));

    this.refs.title.value = "";
    this.refs.quantity_of_labs.value = "";
    this.refs.priority.value = "";
    this.refs.deadline.value = "";
  }

  render() {
    return (
      <div className="subject-form">
        <form className="new_subject" onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input type="text" className="form-control" id="title" ref="title" />
          </div>
          <div className="form-group">
            <label htmlFor="q-o-l">Quantity of Labs: </label>
            <input type="number" className="form-control" id="q-o-l" ref="quantity_of_labs" />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority(0..10): </label>
            <input type="number" min="0" max="10" className="form-control"
             id="priority" ref="priority" />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline: </label>
            <input type="date" className="form-control" id="deadline" ref="deadline" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning btn-block">Add Subject</button>
          </div>
        </form>
      </div>
    );
  }
}
