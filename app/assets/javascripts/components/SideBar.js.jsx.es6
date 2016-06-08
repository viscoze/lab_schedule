class SideBar extends React.Component {
  render() {
    return (
      <div className="side-bar">
        <SubjectForm addSubject={this.props.addSubject} />
      </div>
    );
  }
}
