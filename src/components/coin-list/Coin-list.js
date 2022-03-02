import './coin-list.scss';
import Coin from '../coin/Coin';
import up from './up.svg';
import down from './down.svg';

// name, amount, index
function CoinList({data, view, id}) {
	
	switch (view) {
		case 'purse': return purse(data, id)
		case 'history': return history(data, id)
	}
}
function history(data, key) {
	const name = data.map( (item, i) => <div key={i} className="coin-list__cell">{item.name}/USDT</div>);
	const date = data.map( (item, i) => <div key={i} className="coin-list__cell">{(item.date.getHours()) + ':' + item.date.getMinutes()}</div>);
	const amount = data.map( (item, i) => <div key={i+1} className="coin-list__cell">{item.amount}</div>);
	const index = data.map( (item, i) => <div key={i+2} className="coin-list__cell">{item.index + ' $'}</div>);
	const prise = data.map( (item, i) => <div key={i+3} className="coin-list__cell">{(item.amount * item.index) + ' $'}</div>);

	return (
		<div className="coin-list coin-list--history" >
			<div className="coin-list__tr">
				<div className="coin-list__cell coin-list__cell--min">Тип</div>
				<div className="coin-list__cell coin-list__cell--min"><img src={up} alt="" /></div>
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Дата</div>
				{date}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Пара</div>
				{name}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Количество</div>
				{amount}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Цена за шт.</div>
				{index}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Стоимость</div>
				{prise}
			</div>
		</div>
	)
}
function purse(data, key) {
	const name = data.map( (item, i) => <div key={i} className="coin-list__cell">{item.name}</div>);
	const amount = data.map( (item, i) => <div key={i+1} className="coin-list__cell">{item.amount}</div>);
	const index = data.map( (item, i) => <div key={i+2} className="coin-list__cell">{item.index + ' $'}</div>);
	const prise = data.map( (item, i) => <div key={i+3} className="coin-list__cell">{(item.amount * item.index) + ' $'}</div>);

	return (
		<div className="coin-list" >
			<div className="coin-list__tr">
				<div className="coin-list__cell">Название</div>
				{name}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Количество</div>
				{amount}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Цена за шт.</div>
				{index}
			</div>
			<div className="coin-list__tr">
				<div className="coin-list__cell">Стоимость</div>
				{prise}
			</div>
		</div>
	)
}
export default CoinList