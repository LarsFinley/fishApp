var React = require('react');

var Beer = React.createClass({
	render: function() {
		return(
			<div className="jumbotron">
			  <h1 className="display-3">Hello, world!</h1>
			  <p className="lead">Beer.</p>
			  <hr className="m-y-2"></hr>
			  <p>Beeeeeeeeer.</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  </p>
			</div>
			)
	}
});

module.exports = Beer;