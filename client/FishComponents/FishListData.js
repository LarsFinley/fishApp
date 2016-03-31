var React = require('react');
var FishList = require('./FishList');
var Loader = require('./Loader');

var FishListData = React.createClass({

	getInitialState: function() {
		return {
			allFish: null
		}
	},
	loadAllFishFromServer: function() {
		var self = this;
		//got get all fish from server
		$.ajax({
			url: '/api/fish',
			method: 'GET',
		}).done(function(data) {
			//update fish state with data
			self.setState({fishArray: data});
		})
	},
	componentDidMount: function() {
		this.loadAllFishFromServer();
	},
	render: function() {
		return this.state.allFish ? <FishList fishArray={this.state.allFish}/> : <Loader/>
	}
});

module.exports = FishListData;