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

function FishForm(props) { 	//Pure rendering method, only needs to render, STATELESS FUNCTION!!!!
		return (
			<div className="jumbotron newFish">
				<form onSubmit={ props.submitFishToServer }>
					<h3> Enter New Fish </h3>
				  <fieldset className="form-group">
				    <label>Name</label>
				    <input onChange={ props.onNameChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label >Color</label>
				    <input onChange={ props.onColorChange }  type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label >Length</label>
				    <input onChange={ props.onLengthChange } type="text" className="form-control" />
				  </fieldset>
				  <fieldset className="form-group">
				    <label >Image URL</label>
				    <input onChange={ props.onUrlChange } type="text" className="form-control" />
				  </fieldset>
				  
				  <fieldset className="form-group">
				    <label htmlFor="exampleSelect1">Eats People?</label>
				    <select onChange={ props.people_eater } type="text" className="form-control" >
							<option value={ 'hey' }>Please Choose</option>
							<option value={ true }>yes</option>
      				<option value={ false }>no</option>
				  	</select>
				  </fieldset>

				  <button type="submit" className="btn btn-success">Submit</button>

				</form>
			</div>
			)
};

module.exports = FishForm;