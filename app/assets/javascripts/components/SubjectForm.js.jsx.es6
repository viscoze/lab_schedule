class SubjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subject-form">
        <form action="/subjects" method="POST">
          <div className="form-group">
            <label for="title">Title: </label>
            <input type="text" className="form-control" id="title" name="subject[title]" />
          </div>
          <div className="form-group">
            <label for="q-o-l">Quantity of Labs: </label>
            <input type="number" className="form-control" id="q-o-l" name="subject[quantity_of_labs]" />
          </div>
          <div className="form-group">
            <label for="priority">Priority(0..10): </label>
            <input type="number" min="0" max="10" className="form-control"
             id="priority" name="subject[priority]" />
          </div>
          <div className="form-group">
            <label for="deadline">Deadline: </label>
            <input type="date" className="form-control" id="deadline" name="subject[deadline]" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default btn-block">Add Subject</button>
          </div>
        </form>
      </div>
    );
  }
}
