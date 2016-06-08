class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.subjects.map((subject) => {
          return (
            <Subject key={subject.id} subject={subject} />
          );
        })}
      </div>
    );
  }
}
