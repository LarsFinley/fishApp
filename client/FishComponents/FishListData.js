var React = require('react');
var FishList = require('./FishList');
var Loader = require('../Loader');

var FishListData = React.createClass({

	getInitialState: function() {
		return {
			allFish: null
		}
	},
	loadAllFishFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/fish',
			method: 'GET',
		}).done(data => this.setState({allFish: data}));
	},
	componentDidMount: function() {
		this.loadAllFishFromServer();
	},
	render: function() {
		return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={ this.props.getId } /> : <Loader/>
	}
});

module.exports = FishListData;