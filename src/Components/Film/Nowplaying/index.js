import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { connect } from "react-redux";
import store from "../../.././Redux/Store";

class Nowplaying extends Component{
	
	componentWillMount(){
		if(this.props.nowplayinglist.length==0){
			this.props.getComingsooListPromise()
		}
	}
	render(){
		return(
			<div id="nowplaying">
				<ul>
					{
						this.props.nowplayinglist.map(item=>
							<li key={item.id} onClick={this.getMovieId.bind(this,item.id)}>
								<div className="movie_pic">
									<img src={item.img}/>
								</div>
								<div className="movie_info">
									<div className="title">
										<div className="title_head">
											<b>{item.t}</b>
											{
												item.r>=0?
												<span>
													<i>{item.r.toString().length==1?item.r+".0":item.r}</i>
												</span>
												:null
											}
										</div>
										<div className="title_intro">{item.commonSpecial}</div>
										<div className="mtool">
											{
												item.is3D?
												<span>3D</span>
												:null
											}
											{
												item.isIMAX?
												<span>IMAX</span>
												:null
											}
											{
												item.isDMAX?
												<span>中国巨幕</span>
												:null
											}
										</div>
									</div>
									<div className="buy">
										<span>{item.cC}</span>
										<span>家影院上映</span>
										<span>{item.NearestShowtimeCount}</span>
										<span>场</span>
										<a href="#"><span>购票</span></a>
									</div>
								</div>
							</li>
						)
					}
				</ul>
			</div>
		)
	}
	getMovieId(id){
		this.props.history.push(`/detail/${id}`);
	}
}

export default connect(
	(state)=>{
        return{
            nowplayinglist:state.NowPlayingListReducer
        }
	},
	{
		getComingsooListPromise:()=>{
			return axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=291"
			).then(res=>{
				//console.log(res.data.ms)
				return {
					type:"getNowPlayingList",
					playload:res.data.ms
				}
			})
		}
	}
)(Nowplaying)