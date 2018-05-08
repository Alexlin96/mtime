import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import ReactSwipe from 'react-swipe';
import {Carousel, WingBlank} from 'antd-mobile';

class Comingsoon extends Component{
	
	constructor(props){
		super(props);
		this.state={
			arrMonth:[],
			comingsoonlist:[],
			attentionlist:[]
		}
	}

	componentWillMount(){
		
		axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=291"
		).then(res=>{
			//console.log(res.data)
			var arr=[];
			for(let i=0;i<res.data.moviecomings.length;i++){
				if(arr.indexOf(res.data.moviecomings[i].rMonth) == -1){
				    arr.push(res.data.moviecomings[i].rMonth);
				}
			}
			//console.log(arr)
			this.setState({
				arrMonth:arr,
				attentionlist:res.data.attention,
				comingsoonlist:res.data.moviecomings
			})
			/*store.dispatch({
				type:"getNowPlayingList",
				payload:res.data.ms
			})*/
		}).catch(err=>{
			console.log(err);
		})
	}

	render(){
		return(
			<div id="comingsoon">
				<h2>最受关注<span>（{this.state.attentionlist.length}部）</span></h2>
				<WingBlank>
			        <Carousel
			        autoplay={false}
			        dots={false}
			        infinite={false}
			        >
						{
							this.state.attentionlist.map(item=>
								<div className="loop" key={item.id} onClick={this.getMovieId.bind(this,item.id)}>
									<div className="loop_date">{item.rMonth}月{item.rDay}日</div>
									<div className="loop_pic">
										<img src={item.image}/>
									</div>
									<div className="loop_intro">
										<div className="loop_title">
											<h3>{item.title}</h3>
											<p>
												<span className="wanted_count">{item.wantedCount}</span>
												<span>人想看-{item.type}</span>
											</p>
											<p>导演：{item.director}</p>
											<p>演员：{item.actor1},{item.actor2}</p>
										</div>
										<div className="loop_presell">
											{
												item.isTicket?
												<span className="ticket">超前预售</span>
												:null
											}
											{
												item.isVideo?
												<span className="video">预告片</span>
												:null
											}
										</div>
									</div>
									
								</div>
							)
						}
					</Carousel>
				</WingBlank>
				<h2>即将上映<span>（{this.state.comingsoonlist.length}部）</span></h2>
				{
					this.state.arrMonth.map((item,index)=>
						<div className="movie_coming" key={index}>
							<div className="month">{this.state.arrMonth[index]}月</div>
							<ul>
								{
									this.state.comingsoonlist.map(item=>

										<div className="movie_list" key={item.id} onClick={this.getMovieId.bind(this,item.id)}>
											{	
												item.rMonth==this.state.arrMonth[index]?
												<div className="movie">
													<p className="rday">{item.rDay}日</p>
													<div className="movie_pic">
														<img src={item.image}/>
													</div>
													<div className="movie_intro">
														<div className="movie_title">
															<h3>{item.title}</h3>
															<p>
																<span className="wanted_count">{item.wantedCount}</span>
																<span>人想看-{item.type}</span>
															</p>
															{
																item.director?
																<p>导演：{item.director}</p>
																:null
															}
														</div>
														<div className="movie_presell">
															{
																item.isTicket?
																<span className="ticket">超前预售</span>
																:null
															}
															{
																item.isVideo?
																<span className="video">预告片</span>
																:null
															}
														</div>
													</div>
												</div>
												:null
											}
										</div>
									)
								}
							</ul>
						</div>
					)
				}
				
			</div>
		)
	}
	getMovieId(id){
		this.props.history.push(`/detail/${id}`);
		//console.log(id)
	}
}

export default Comingsoon