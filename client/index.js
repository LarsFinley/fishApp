var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar.js');
var Footer = require('./footer.js');
var Welcome = require('./welcome.js');
var Cookies = require('./cookies.js');
var FishApp = require('./fishApp.js');
var Bears = require('./bears.js');
var Beer = require('./beer.js');


require('./stylesheets/main.scss');

var App = React.createClass({
	getInitialState: function() {
		return {
			activeComponent: 'welcome'
		}
	},
	setActiveComponent: function(componentName) {
		console.log("FoundComp: ", componentName);
		this.setState({
			activeComponent: componentName
		})
	},
	showWhichComponent: function() {
		switch(this.state.activeComponent) {
    		case 'welcome':
				return <Welcome/>
	        break;
		    case "cookies":
		        return <Cookies/>
		        break;
		    case "fish":
		        return <FishApp/>
		        break;
		    case "bears":
		        return <Bears/>
		        break;
		    case "beer":
		        return <Beer/>
		        break;
		    default:
		        return <Welcome/>
		}
	},

  render: function() {
    return (
      <div>
      	<NavBar setActiveComponent={ this.setActiveComponent }/>
      		<div>
      			{ this.showWhichComponent() }
      		</div>	
        <Footer/>      
      </div>
      )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);
