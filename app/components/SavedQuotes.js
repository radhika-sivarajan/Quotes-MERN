var React = require("react");
var helpers = require("../utils/API.js");

var SavedQuotes = React.createClass({

    getInitialState: function () {
        return { savedArticles: "" };
    },

    render: function () {
        return (
            <div className="row text-center footer">
                <p>Saved</p>
            </div>
        );
    }
});

module.exports = SavedQuotes;
