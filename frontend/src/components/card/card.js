import { Component } from 'react';


class Card extends Component {
	constructor(props) {
		super(props)
	}
	state = {
		imgUrl: null,
		title: null,
		descriprion: null,
		category: null,
		activite: false
	}
	dataGet(dict) {
		this.setState(dict)
	}
	componentDidMount() {
		this.dataGet(this.props.data)
 	}
	componentDidUpdate() {
	}
	componentWillUnmount() {
  }

  listCategory(li) {
  	
  	if (li) {
  		const listLi = li.map( (item, index) => {

  		const loading = item ? 'card__note' : 'card__note--skelet'

  		return <li key={index+1} className={loading}> {item} </li> })

			return listLi

  	} else return null

  	// return li ? li.map( (category, i) => (<li key={i+1} className={category ? 'card__note' : 'card__note--skelet'}>{category}</li>) ) : null
  }

  onActivite = () => this.setState( {activite: !this.state.activite } )

  viewImg(imgUrl) {
  	if (this.state.imgUrl) {
  		return (<img className="card__img" 
  					 					onClick={this.onActivite}
  							 			src={imgUrl} 
  							 			alt=""/>)
  	} else {
  		return (<div className="card__img--skelet"></div>)
  	}
  }

	render() {
		const {imgUrl, title, descriprion, category} = this.state;
		const li = this.listCategory(category);
		const activite = this.state.activite ? 'card__all--active' : null;
		const viewTitle = title ? 'card__title' : 'card__title--skelet';
		const viewDescription = descriprion ? 'card__description' : 'card__description--skelet';

		return (
			 <div className="card">
			 	<div className="card__main">
			 		<div className="card__box-img">
			 			{this.viewImg(imgUrl)}
			 		</div>
			 		<div className="card__box-title">
            <h2 className={viewTitle}>{title} </h2>
          </div>
          <div className="card__box-description">
            <p className={viewDescription}>{descriprion}</p>
          </div>
          <ul className="card__box-notes">
            {li}
          </ul>
			 	</div>
			 	<div className={"card__all " + activite}>
          <div className="card__box-title">
          	<input type="text" className="card__link"/>
            <button type="button" className="card__copy">Копировать</button>
          </div>
          <div className="card__box-description">
            <p>{'{'}</p>
            <p className="card__json card__json--start">
              title: <span className="card__json--text">'Moscow'</span>,
            </p>
            <p className="card__json card__json--start">
              imgUrl: <span className="card__json--text">'http://localhost:3000/'</span>,
            </p>
            <p className="card__json card__json--start">
              description: <span className="card__json--text">'Хороший город для покорения вершин и всего такого. Много веселья и друзей'</span>,
            </p>
            <p className="card__json card__json--start">notes: [<span className="card__json--text">'Самый большой в мире'</span>, <span className="card__json--text">'Самый большой в мире'</span>]</p>
            <p>{'}'}</p>
          </div>
        </div>
			 </div>
			);
	}
}

export default Card