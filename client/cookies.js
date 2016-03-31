var React = require('react');

var Cookies = React.createClass({
	render: function() {
		return(
			<div className="jumbotron">
			  <h1 className="display-3">Hello, world!</h1>
			  <p className="lead">Cookies.</p>
			  <hr className="m-y-2"></hr>
			  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  </p>
			</div>
			)
	}
});

module.exports = Cookies;