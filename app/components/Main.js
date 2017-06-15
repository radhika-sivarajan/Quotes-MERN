var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({
  render: function () {
    return (
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Quotes</Link>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/saved-quotes">Quotes</Link></li>
                <li><Link to="/save-quote">Save Quote</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <div className="row text-center footer">
          <p>Copyright &copy; 2017 Radhika Sivarajan</p>
        </div>
      </div>
    );
  }
});

module.exports = Main;
