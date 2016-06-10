class LabList extends React.Component {
  render() {
    const labs = this.props.labs ? this.props.labs : [] ;
    let currentIndex = 0;
    return (
      <div className="labs">
        <div className="row">
          {
            labs.map((lab) => {
              currentIndex++;
              return (<Lab key={currentIndex} id={currentIndex}
                           refreshLabs={this.props.refreshLabs} lab={lab}
                           subject_id={this.props.subject_id}/>);
            })
          }
        </div>
      </div>
    );
  }
}
