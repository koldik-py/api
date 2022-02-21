import { Component } from 'react';
import './app.scss';
import Cards from '../cards/cards'
import Category from '../category/category'
import Functional from '../functional/functional'

class App extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
 	 }
 	componentDidUpdate() {
 	 }
  	componentWillUnmount() {
	  }
	dict = {
		imgUrl: 'moscow.jpg',
		title: 'Москва',
		descriprion: 'Хороший город для покорения вершин и всего такого. Много веселья и друзей',
		category: ['Самый большой в мире', 'Самый красивый в мире']
	}
	render() {
		return (
			<>
				<header className="head">
					<Category/>
					<Functional/>
				</header>
				<Cards/>
			</>
			);
	}
}

export default App