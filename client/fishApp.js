//Fish
	//jumbotron
	//display fish
	//edit fish
	//toggle fish

var React = require('react');
var FishBox = require('./FishComponents/FishBox');

var Jumbotron = React.createClass({
	render: function() {
		return(
			<div className="jumbotron">
			  <h1 className="display-3">Hello, world!</h1>
			  <p className="lead">Fish.</p>
			  <hr className="m-y-2"></hr>
			  <p>Fissssshhhhhyyyyyyyyyyyyyyyyyy.</p>
			</div>
			)
	}
})

var Loader = React.createClass({
	render: function() {
		return(
		<div>
	    	<i className="fa-spin fa fa-cogs fa-6 myFont"></i>
	    </div>
	    )
	}
})
var FishApp = React.createClass({
	getInitialState: function() {
		return {
			fishArray: null
		}
	},
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
		if(this.state.fishArray) {
		return(
			<div>
				<Jumbotron />
				<FishBox submitFishToServer= {this.submitFishToServer } fishArray={ this.state.fishArray }/>
			</div>
			)
	} else {
		return <Loader />
	}
	}
});

module.exports = FishApp;