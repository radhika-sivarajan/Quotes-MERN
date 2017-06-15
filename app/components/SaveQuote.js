var React = require("react");
var helpers = require("../utils/API.js");

var SaveQuote = React.createClass({
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit: function (event) {
        event.preventDefault();
        // this.props.updateSearch(this.state.newQuote);
        console.log(this.state.newQuote);
        return false;
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="newQuote">Add a quote</label>
                            <input type="textarea" className="form-control" id="newQuote" onChange={this.handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SaveQuote;
