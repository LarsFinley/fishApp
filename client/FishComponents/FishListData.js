var React = require('react');
var FishList = require('./FishList');
var Loader = require('../Loader');
/*
// FishApp
//     FishBox
//         FishData
//             FishList
//                 FishCard
//         FishFormData
//             FishForm
*/
var FishListData = React.createClass({

	getInitialState: function() {
		return {
			allFish: null
		}
	},

	contextTypes: {
			sendNotification: React.PropTypes.func.isRequired
	},

	deleteFish(id) {
		var self = this;
		if(confirm('Are you sure you want to delete this fish?')) {
		$.ajax({
			url: '/api/fish/oneFish/' + id,
			method: 'DELETE',
		}).done(function(){
			self.context.sendNotification("Hey you deleted a fish!!!!!");												
			self.loadAllFishFromServer();
		});
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
		return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={ this.props.getId } deleteFish={ this.deleteFish } /> : <Loader/>
	}
});

module.exports = FishListData;