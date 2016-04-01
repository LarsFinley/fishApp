
var React = require('react');
var FishBox = require('./FishComponents/FishBox');
var FishJumbotron = require('./FishJumbotron');

var FishApp = React.createClass({
	
	render: function() {
		return(
			<div>
				<FishJumbotron />
				<FishBox />
			</div>
			)
	}
});

module.exports = FishApp;