class Lab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, deadline, description } = this.props.lab;

    return (
      <div className="lab">
        <div className="row">
          <div className="col-md-10">
            <Header id={id} title={title} deadline={deadline} />
            <Description description={description}/>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    );
  }
}
