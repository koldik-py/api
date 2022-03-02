import { Component } from 'react';
import './app.scss';
import CoinList from '../coin-list/Coin-list';
import Btn from '../btn/btn'


class App extends Component {
	constructor(props) {
		super(props)
	}

	state = {
		coin: [{name: 'USDT', amount: 0, index: 1},],
		deal: [],
	}
	// data = [{name: 'USDT', amount: 0, index: 1},]
	//! Для сделок нужен отдельный массив с датой


	componentDidMount() {}
 	componentDidUpdate() {}
	componentWillUnmount() {}
	
	render() {
		return (
			<div className="container">
				<Btn />
				{/* <CoinList data={this.state.coin} view={'purse'}/> */}
			</div>
			);
	}
}

export default App