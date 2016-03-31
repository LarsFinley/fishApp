var React = require('react');

var FishCard = React.createClass({
	render: function() {
		return (
			<div className="card fish-flex">
			  <img className="card-img-top fishPic" src={ this.props.img } alt="some fish" />
			  <div className="card-block fishButton">
			    <h4 className="card-title"> { this.props.name } </h4>
			  </div>
			</div>
			)
	}
});

module.exports = FishCard;