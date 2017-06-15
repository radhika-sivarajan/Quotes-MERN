var React = require("react");
var Link = require("react-router").Link;

var Navbar = React.createClass({
    render: function () {
        return (
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
        );
    }
});
module.exports = Navbar;