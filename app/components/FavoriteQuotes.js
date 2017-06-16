var React = require("react");
var helpers = require("../utils/API.js");

var FavoriteQuotes = React.createClass({
    getInitialState: function () {
        return {
            allQuotes: []
        }
    },
    componentDidMount: function () {
        helpers.default.getQuotes().then(function (quotesData) {
            this.setState({ allQuotes: quotesData.data });
        }.bind(this));
    },
    renderFavoriteQuotes: function () {
        return this.state.allQuotes.map(function (quotes, index) {
            if (quotes.favorited) {
                return (
                    <li className="list-group-item" key={index}>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-trash pull-right"></span>
                        <br />{quotes.text}
                    </li>
                );
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12 clearfix quote-section">
                    <ul className="clearfix" id="quote-list">
                        {this.renderFavoriteQuotes()}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = FavoriteQuotes;
