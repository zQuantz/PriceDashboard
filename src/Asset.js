import './Asset.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Asset extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			price: props.price,
			pctdelta: 0.0,
			rng: 0.3,
			volume: 0,
			deltacolor:"textPrimary"
		};

		this.tick = this.tick.bind(this);
		this.lessActivityClick = this.lessActivityClick.bind(this);
		this.moreActivityClick = this.moreActivityClick.bind(this);

	}

	tick(){

		let rng = Math.random() < this.state.rng;
		if (!rng){
			return;
		}

		let volume = this.state.volume + (Math.round(20 * Math.random())) * this.props.multiplier;
		let price = this.state.price * (1 + (Math.random() - 0.5) / 500);
		price = Math.round(price * 100) / 100;

		let pctdelta = 100 * (price / this.props.price - 1);
		pctdelta = Math.round(pctdelta * 100) / 100;

		let deltacolor = pctdelta > 0 ? "primary" : pctdelta < 0 ? "secondary" : "textPrimary"

		this.setState({
			price: price,
			volume: volume,
			pctdelta: pctdelta,
			deltacolor: deltacolor
		})

	}

	lessActivityClick(){
		this.setState({
			rng: Math.max(0, this.state.rng - 0.05) 
		})
	}

	moreActivityClick(){
		this.setState({
			rng: Math.min(1, this.state.rng + 0.05) 
		})
	}

	componentDidMount(){
		this.tickInterval = setInterval(this.tick, 100);
	}

	componentWillUnmount(){
		clearInterval(this.tickInterval);
	}

	render(){
		return (
			<Card className="assetCard" variant="outlined">
				<CardContent>

					<Typography color="textSecondary" display="inline" gutterBottom>
						{this.props.ticker+" "}
					</Typography>
					<Typography color="textSecondary" display="inline" gutterBottom>
						- {this.props.companyName}
					</Typography>
					<br />
					<Typography variant="h5" display="inline" component="h2">
						${this.state.price} &ensp;
					</Typography>
					<Typography variant="h5" display="inline" component="h2" color={this.state.deltacolor}>
						({this.state.pctdelta}%)
					</Typography>
					<Typography color="textSecondary">
						Volume: {this.state.volume}
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant="outlined" color="secondary"onClick={this.lessActivityClick}>
						Less Activity
					</Button>
					<Button variant="outlined" color="primary"onClick={this.moreActivityClick}>
						More Activity
					</Button>
				</CardActions>
			</Card>
		);
	}

}

export default Asset;