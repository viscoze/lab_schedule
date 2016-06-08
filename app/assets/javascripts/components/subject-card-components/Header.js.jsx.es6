class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-md-1">
            <span className="number">
              {this.props.id}
            </span>
          </div>
          <div className="col-md-6">
            <span className="title">
              {this.props.title}
            </span>
          </div>
          <div className="col-md-5">
            {
              this.props.deadline ?
              `Deadline: ${this.props.deadline}` : ''
            }
          </div>
        </div>
      </div>
    );
  }
}
