import { Component } from 'react';
import './btn.scss';
import up from '../coin-list/up.svg';
import down from '../coin-list/down.svg';

class Btn extends Component {
	constructor(props) {
		super(props)
	}

	state = {

	}
	onClick = (e) => console.log(e.target)
	// componentDidMount() {	console.log('Btn создался') }
 	// componentDidUpdate() { console.log('Btn обновился') }
	// componentWillUnmount() { console.log('Btn обновился')	}

	render() {
	
		return (
			<div className="deal">
				<div className="deal__token">Монетка</div>
				<div className="deal__token">Цена</div>
				<div className="deal__token"
						onClick={(e) => this.onClick(e)}
				>Действие</div>
				<button	className="deal__token deal__token--btn"
								type="submit" 
								onClick={(e) => this.onClick(e)}
								>Подтвердить</button>
			</div>
			);
	}
}

export default Btn