var React = require('react');
var FishListData = require('./FishListData');
var FishForm = require('./FishForm');

//FishBox
	//Toggler
	//FishList
		//FishCard
	//FishForm


var Toggler = React.createClass({
	render: function() {
		return(
			<div className="container">
			  <div className="btn-group" data-toggle="buttons">
			    <button onClick={this.props.toggleActiveComp.bind(null, 'fish')}> Fish Display </button>
			    <button onClick={this.props.toggleActiveComp.bind(null, 'form')}> Modify Fish </button>
			  </div>
			</div>
			)
	}
});

var FishBox = React.createClass({
	getInitialState: function() {
		return {
			activeComponent: 'fish'
			}
	},
	showComp: function() {
		//this function returns one function based on activeComp state
		if(this.state.activeComponent === 'fish'){
			return <FishListData/>
		} else if (this.state.activeComponent === 'form') {
				return <FishForm submitFishToServer={ this.props.submitFishToServer }/>
		} else {
			throw new Error("Invalid active component", this.state.activeComponent)
		}
	},
		toggleActiveComp: function(name){
			this.setState({activeComponent: name})
		},
		render: function() {
			return (
				<div>
					<Toggler toggleActiveComp={this.toggleActiveComp}/>
					{ this.showComp }
				</div>	
			)
	}
});

module.exports = FishBox;