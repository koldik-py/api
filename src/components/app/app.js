import { Component } from 'react';
import './app.scss';
import CoinList from '../coin-list/Coin-list';
import Btn from '../btn/btn'

async function getResourse(url) {
  const res = await fetch( `${url}` );
  // Если операция неудачна
  if (!res.ok) {
    throw new Error(`Error ${url} // %{res.status}`)
  }
  return await res.json();
}


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
		// getResourse('https://api2.binance.com/api/v3/ticker/prise/')
		// .then( data => console.log(data))
		return (
			<div className="container">
				<Btn />
				{/* <CoinList data={this.state.coin} view={'purse'}/> */}
			</div>
			);
	}
}

export default App

// getResourse('https://api2.binance.com/api/v3/ticker/prise/')
