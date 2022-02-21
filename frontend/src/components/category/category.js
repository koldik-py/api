import { Component } from 'react';
import './category.scss';

class Category extends Component {
	constructor(props) {
		super(props)
	}
	state = {
		obj: [
		{title: 'Города',
		activite: true},]
	}
	componentDidMount() {
 	 }
 	componentDidUpdate() {
 	 }
  	componentWillUnmount() {
	  }
	elements = this.state.obj.map((item, index) => 
		<li className={'head__category ' + (item.activite ? 'head__category--active' : null)}
					key = {index}
					>{item.title}</li>
					)
	render() {
		
		return (
			<menu className="head__menu">
       			{this.elements}
      		</menu>
			);
	}
}

export default Category