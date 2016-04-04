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
var FishCard = require('./FishCard');


function FishList(props) {
		//map through data and pass it to fish card; 
		var fishList = props.fishArray.map(item => {
			return(
			    <FishCard
			    deleteFish= { props.deleteFish }
			    getId= { props.getId }
			    id= { item._id }
					name= { item.name }
					color= { item.color }
					people_eater= { item.people_eater }
					length= { item.length }
					img= { item.img } />
				);
		})
		return (
			<div className="fish-flex">
				{ fishList }
			</div>	
			)
	}

FishList.propTypes = {
	fishArray: React.PropTypes.array.isRequired
};

module.exports = FishList;