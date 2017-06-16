var React = require("react");
var Link = require("react-router").Link;

var Navbar = React.createClass({
    render: function () {
        return (
            <div className="row">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Quotes</Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/save-quote"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                            <li><Link to="/saved-quotes"><span className="glyphicon glyphicon-heart"></span> Favorites</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
});
module.exports = Navbar;