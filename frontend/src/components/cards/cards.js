import { Component } from 'react';
import './cards.scss';
import Card from '../card/card'

class Cards extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
 	 }
 	componentDidUpdate() {
 	 }
  	componentWillUnmount() {
	  }
	dict = [{
		imgUrl: 'moscow.jpg',
		title: 'Москва',
		descriprion: 'Хороший город для покорения вершин и всего такого. Много веселья и друзей',
		category: ['Самый большой в мире', 'Самый красивый в мире']
	},{
		imgUrl: 'moscow.jpg',
		title: 'Москва',
		descriprion: 'Хороший город для покорения вершин и всего такого. Много веселья и друзей',
		category: ['Самый большой в мире', 'Самый красивый в мире']
	},{
		imgUrl: 'moscow.jpg',
		title: 'Москва',
		descriprion: 'Хороший город для покорения вершин и всего такого. Много веселья и друзей',
		category: ['Самый большой в мире', 'Самый красивый в мире']
	}]

	render() {
		const elements = this.dict.map((e,i) => <Card key={i+1} data={e}/>)
		return (
			<div className="container">
				{elements}
			</div>
			);
	}
}

export default Cards