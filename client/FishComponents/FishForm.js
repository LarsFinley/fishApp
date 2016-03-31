var React = require('react');

var FishForm = React.createClass({
	getInitialState: function() {
		return{
			fishName: null,
			fishColor: null,
			fishLength: null,
			eats_people: null,
			imgUrl: null,
		}
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
	handleFormSubmit: function(e) {
		e.preventDefault();
		var data= {
			name: this.state.fishName.trim(),
			color: this.state.fishColor.trim(),
			length: this.state.fishLength.trim(),
			people_eater: this.state.people_eater,
			img: this.state.imgUrl.trim(),
		}
		console.log(data)
		this.props.submitFishToServer(data);
		alert("submitting a new fish");
		this.setState({fishName: '', fishColor: '', fishLength:'', imgUrl: '', people_eater: ''});
	},

	render: function() {
		return (
			<div className="jumbotron newFish">
				<form onSubmit={ this.handleFormSubmit }>
					<h3> Enter New Fish </h3>
				  <fieldset className="form-group">
				    <label>Name</label>
				    <input onChange={ this.onNameChange } value={ this.state.fishName } type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label >Color</label>
				    <input onChange={ this.onColorChange } value={ this.state.fishColor } type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label >Length</label>
				    <input onChange={ this.onLengthChange } value={ this.state.fishLength } type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label >Image URL</label>
				    <input onChange={ this.onUrlChange } value={ this.state.imgUrl } type="text" className="form-control" />
				  </fieldset>
				  
				  <fieldset className="form-group">
				    <label htmlFor="exampleSelect1">Eats People?</label>
				    <select onChange={ this.people_eater } type="text" className="form-control" >
							<option value={ 'hey' }>Please Choose</option>
							<option value={ true }>yes</option>
      				<option value={ false }>no</option>
				  	</select>
				  </fieldset>

				  <button type="submit" className="btn btn-success">Submit</button>

				</form>
			</div>
			)
	}
});

module.exports = FishForm;