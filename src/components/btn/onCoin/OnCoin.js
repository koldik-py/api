import { Component } from 'react';
import './onCoin.scss';

class OnCoin extends Component {
	constructor(props) {
		super(props)
	}

	state = {
		activite: true,
		coins: ['BNB','ALICE','DOT', 'CLASS', 'HEY'],
	}

	componentDidMount() {}
 	componentDidUpdate() {}
	componentWillUnmount() {}

	reVisible = () => this.setState({ activite: !this.state.activite })

	coinList() {
		const data = this.state.coins;
		const indexC =  ((Math.round( (data.length + 1) /2) ) - 1);
		
		// const coinsList = data.filter( (e, i) => i == index - 1 || i == index || i == index + 1)
		const coinsList = data.map( (coin, index) => {
			let className = false;
			if (index === (indexC - 1)) className = this.state.activite ? "coin__top coin__top--active" : "coin__top";
			if (index === indexC) className = this.state.activite ? "coin__middle coin__middle--active" : "coin__middle";
			if (index === (indexC + 1)) className = this.state.activite ? "coin__bottom coin__bottom--active" : "coin__bottom";
			
			return className ? <div className={className} data-name={coin} key={index}>{coin}</div> : null
		})

		return coinsList
	}

// <div className={"coin__top coin__top--active" : "coin__top"} data={x}>{x}</div>
	render() {
		const coin = this.state.coins;
		
		return (
			<div className="coin"
			onClick={(e)=> this.reVisible(e)}>
				<div className="coin__var">
					<div className={this.state.activite ? "coin__count coin__count--active" : "coin__count"}>
					{this.coinList()}
					</div>
				</div>
			</div>
			)
	}
}

/*			<div className="coin"
			onClick={(e)=> this.onHidden()}>
				<div className="coin__var">
					<div className={this.state.activite ? "coin__count coin__count--active" : "coin__count"}
						onClick={(e)=> this.onClick(e)}>
<div className={this.state.activite ? "coin__top coin__top--active" : "coin__top"}
data-toggle={coin[0]}>{coin[0]}</div>
<div className={this.state.activite ? "coin__middle coin__middle--active" : "coin__middle"}
data-toggle={coin[1]}>{coin[1]}</div>
<div className={this.state.activite ? "coin__bottom coin__bottom--active" : "coin__bottom"}
data-toggle={coin[2]}>{coin[2]}</div>
					</div>
				</div>
			</div>*/
export default OnCoin
