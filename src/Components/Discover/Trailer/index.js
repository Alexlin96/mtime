import React,{Component} from "react";
import "./index.css";
import axios from "axios";
class Trailer extends Component{
	constructor(){
		super();
		this.state={
			page:1,
			trailerList : [],
			trailerbodylist:[]
		}
	}
	componentWillMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20185415331435418').then(
			res=>{
				this.setState({
					trailerList:res.data.trailer
				})
				console.log(this.state.trailerList);
			}
		)
		axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=2018552353468915').then(
			res=>{
				this.setState({
					trailerbodylist:res.data.trailers
				})
				console.log(this.state.trailerbodylist);
			}
		)
	}
	render(){
		return(
			<div id='trailer' >
				<div className='banner' >
					<img src={this.state.trailerList.imageUrl} /> 
					<h3>{this.state.trailerList.title}</h3>
				</div>
				<ul className='_movieplaylist'>
				{
					this.state.trailerbodylist.map(item=>
						<li className='table' key={item.id} >
							<div className='npic' >
								<a href="##">
									<i className="i_video"></i>
									<img src={item.coverImg} />
								</a>
							</div>
							<div className='newstxt td' >
								<dl>
									<dt>{item.movieName}</dt>
									<dd><p>{item.summary}</p></dd>
								</dl>
							</div>
						</li>
					)
				}
				</ul>
			</div>
		)
	}
}

export default Trailer