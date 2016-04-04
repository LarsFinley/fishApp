/*
// FishApp
//     FishBox
//         FishData
//             FishList
//                 FishCard
//         FishFormData
//             FishForm
*/
var React = require('react');
var FishForm = require('./FishForm');


var FishFormData = React.createClass({
	getInitialState: function() {
			return{
				fishName: null,
				fishColor: null,
				fishLength: null,
				eats_people: null,
				imgUrl: null,
			}
		},
		contextTypes: {
			sendNotification: React.PropTypes.func.isRequired
		},
		onNameChange: function(e) {
			this.setState({ fishName: e.target.value })
		},
		onColorChange: function(e) {
			this.setState({ fishColor: e.target.value })
		},
		onLengthChange: function(e) {
			this.setState({ fishLength: e.target.value })
		},
		onUrlChange: function(e) {
			this.setState({ imgUrl: e.target.value })
		},
		people_eater: function(e) {
			console.log(e.target.value);
			this.setState({ people_eater: e.target.value })
		},
		submitFishToServer: function(e) {
			e.preventDefault();
			
			var data= {
				name: this.state.fishName.trim(),
				color: this.state.fishColor.trim(),
				length: this.state.fishLength.trim(),
				people_eater: this.state.people_eater,
				img: this.state.imgUrl.trim(),
			};

			var self = this;
			$.ajax({
				url: '/api/fish',
				method: 'POST',
				data: data,
			}).done(function(data) {
				console.log(data);
				self.props.toggleActiveComp('fish');//we want it to redirect to the fish page
				self.context.sendNotification("Hey you added a fish!!!!!");
			});

			this.setState({fishName: '', fishColor: '', fishLength:'', imgUrl: ''});
		},
		render: function() {
			return (
				<FishForm
				submitFishToServer={ this.submitFishToServer }
						onNameChange= { this.onNameChange }
						onColorChange= { this.onColorChange }
						onLengthChange= { this.onLengthChange }
						onUrlChange= { this.onUrlChange }
						people_eater={ this.people_eater } />
		)
	}
});

module.exports = FishFormData;