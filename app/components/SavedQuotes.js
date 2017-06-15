var React = require("react");
var helpers = require("../utils/API.js");

var SavedQuotes = React.createClass({
    componentDidMount: function () {
        helpers.getQuotes().then(function (dbQuotes) {
              console.log(dbQuotes);
        }.bind(this));
    },
    render: function () {
        return (
            <div className="row">
                <p>Saved</p>
            </div>
        );
    }
});

module.exports = SavedQuotes;
