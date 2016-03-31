//Fish
	//jumbotron
	//display fish
	//edit fish
	//toggle fish

var React = require('react');
var FishBox = require('./FishComponents/FishBox');
var FishJumbotron = require('./FishComponents/FishJumbotron');

var FishApp = React.createClass({
	submitFishToServer: function(data) {
		var self = this;
		$.ajax({
			url: '/api/fish',
			method: 'POST',
			data: data,
		}).done(function(data) {
			console.log(data);
			self.loadAllFishFromServer();
		})
	},
	render: function() {
		return(
			<div>
				<FishJumbotron />
				<FishBox submitFishToServer= {this.submitFishToServer } fishArray={ this.state.fishArray }/>
			</div>
			)
	}
});

module.exports = FishApp;