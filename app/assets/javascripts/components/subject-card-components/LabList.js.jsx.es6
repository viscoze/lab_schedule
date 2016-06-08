class LabList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const labs = this.props.labs;

    return (
      <div className="labs">
        <div className="row">
          {
            labs.map((lab) => {
              return (<Lab key={lab.id} lab={lab} />);
            })
          }
        </div>
      </div>
    );
  }
}
