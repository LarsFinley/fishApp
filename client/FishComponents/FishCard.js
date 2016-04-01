var React = require('react');

function FishCard(props) {
		return (
			<div className="card fish-flex">
			  <img className="card-img-top fishPic" src={ props.img } alt="some fish" />
			  <div className="card-block fishButton">
			    <h4 className="card-title"> { props.name } </h4>
			    <button onClick={ props.getId.bind(null, props.id)} className="btn-primary">GO</button>
			  </div>
			</div>
			)
	};


module.exports = FishCard;