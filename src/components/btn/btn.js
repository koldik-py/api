import { Component } from 'react';
import './btn.scss';

import OnCoin from './onCoin/OnCoin'
//import up from '../coin-list/up.svg';
//import down from '../coin-list/down.svg';

class Btn extends Component {
	constructor(props) {
		super(props)
	}

	state = {
	}

	render() {
		const coin = this.state.coin
		return (
			
				<OnCoin/>
			
			)
		//return one()
	}
}

function one() {
	return (
			<div className="deal">
				
				<div className="deal__token">
					Монета
					<div className="deal__count">
						<div className="deal__token--alt1">Монета</div>
						<div className="deal__token--alt2">Монета</div>
						<div className="deal__token--alt3">Монета</div>
					</div>
				</div>
				
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

export default Btn