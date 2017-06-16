var React = require("react");
var helpers = require("../utils/API.js");
var NotificationSystem = require('react-notification-system');

var SaveQuote = React.createClass({
    getInitialState: function () {
        return {
            savedQuotes: []
        }
    },
    _notificationSystem: null,
    componentDidMount: function () {
        helpers.default.getQuotes().then(function (quotesData) {
            this.setState({ savedQuotes: quotesData.data });
        }.bind(this));
        this._notificationSystem = this.refs.notificationSystem;
    },
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit: function (event) {
        event.preventDefault();
        helpers.default.saveQuote(this.state.newQuote).then(() => {
            helpers.default.getQuotes().then((quotesData) => {
                this.setState({ savedQuotes: quotesData.data });
            });
        });
        this._notificationSystem.addNotification({
            message: 'Quote added to the database',
            level: 'success'
        });
        return false;
    },
    handleDelete: function (quotes, event) {
        event.preventDefault();
        helpers.default.deleteQuote(quotes._id).then(() => {
            helpers.default.getQuotes().then((quotesData) => {
                this.setState({ savedQuotes: quotesData.data });
            });
        });
        this._notificationSystem.addNotification({
            message: 'Quote deleted',
            level: 'error'
        });
    },
    handleFavorite: function (quotes, event) {
        event.preventDefault();
        helpers.default.favoriteQuote(quotes).then(() => {
            helpers.default.getQuotes().then((quotesData) => {
                this.setState({ savedQuotes: quotesData.data });
            });
        });
        if (quotes.favorited) {
            this._notificationSystem.addNotification({
                message: 'Quote favorited',
                level: 'info'
            });
        } else {
            this._notificationSystem.addNotification({
                message: 'Quote unfavorited',
                level: 'warning'
            });
        }
    },
    renderQuotes: function () {
        return this.state.savedQuotes.map(function (quotes, index) {
            if (quotes.favorited) {
                return (
                    <li className="list-group-item" key={index}>
                        <span className="glyphicon glyphicon-star yellow" onClick={this.handleFavorite.bind(this, quotes)}></span>
                        <span className="glyphicon glyphicon-trash pull-right" onClick={this.handleDelete.bind(this, quotes)}></span>
                        <br />{quotes.text}
                    </li>
                );
            } else {
                return (
                    <li className="list-group-item" key={index}>
                        <span className="glyphicon glyphicon-star" onClick={this.handleFavorite.bind(this, quotes)}></span>
                        <span className="glyphicon glyphicon-trash pull-right" onClick={this.handleDelete.bind(this, quotes)}></span>
                        <br />{quotes.text}
                    </li>
                );
            }
        }.bind(this));
    },
    renderForm: function () {
        return (
            <div className="row">
                <NotificationSystem ref="notificationSystem" />
                <div className="col-md-6 col-md-offset-3 quote-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="newQuote">Add a quote</label>
                            <input type="textarea" className="form-control" id="newQuote" onChange={this.handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
                <div className="col-md-12 clearfix quote-section">
                    <ul className="clearfix" id="quote-list">
                        {this.renderQuotes()}
                    </ul>
                </div>
            </div>
        );
    },
    render: function () {
        return this.renderForm();
    }
});

module.exports = SaveQuote;
