class SubjectList extends React.Component {
  render() {
    let currentIndex = 0;
    return (
      <div>
        {this.props.subjects.map((subject) => {
          currentIndex++;
          return (
            <Subject key={currentIndex} id={currentIndex}
                     subject={subject} refreshSubjects={this.props.refreshSubjects}/>
          );
        })}
      </div>
    );
  }
}
