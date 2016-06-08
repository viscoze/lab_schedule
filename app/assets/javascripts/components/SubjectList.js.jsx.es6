class SubjectList extends React.Component {
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
