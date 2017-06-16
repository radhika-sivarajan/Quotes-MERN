var React = require("react");
var helpers = require("../utils/API.js");
var newArray = [];

var SaveQuote = React.createClass({
    getInitialState: function () {
        return {
            renderQuotes: []
        }
    },
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit: function (event) {
        event.preventDefault();
        newArray.push(this.state.newQuote);
        this.setState({ renderQuotes: newArray });
        this.renderNewQuotes();
        return false;
    },
    renderNewQuotes: function () {
        return this.state.renderQuotes.map(function (quotes, index) {
            return (
                <li className="list-group-item" key={index}>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-trash pull-right"></span>
                    <br/>{quotes} 
                </li>
            );
        }.bind(this));
    },
    renderForm: function () {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 quote-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="newQuote">Add a quote</label>
                            <input type="textarea" className="form-control" id="newQuote" onChange={this.handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
                <div className="col-md-12 quote-section">
                    <ul id="quote-list">
                        {this.renderNewQuotes()}
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
