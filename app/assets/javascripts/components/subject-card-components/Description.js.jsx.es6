class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="description">
        <div className="row">
          <div className="col-md-12">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
