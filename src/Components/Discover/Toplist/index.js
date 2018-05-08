import React,{Component} from "react";
import "./index.css";
import axios from "axios";
class Toplist extends Component{
	constructor(){
		super();
		this.state={
			page:1,
			topList : [],
			topbodylist:[]
		}
	}
	componentWillMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20185415331435418').then(
			res=>{
				this.setState({
					topList:res.data.topList
				})
				console.log(this.state.topList);
			}
		)
		axios.get('/Service/callback.mi/TopList/TopListOfAll.api?t=201855131298463&pageIndex=1').then(
			res=>{
				this.setState({
					topbodylist:res.data.topLists
				})
				console.log(this.state.topbodylist);
			}
		)
	}
	render(){
		return(
			<div id='toplist' >
				<div className='banner' >
					<img src={this.state.topList.imageUrl} /> 
					<h3>{this.state.topList.title}</h3>
				</div>
				<div className='toplist' >
					<div className='topmenu' >
						<ul className='table_vh_c' >
							<li>
								<a href="##">
									<i className="top01"></i>
									<p><span className='no1' >时光Top100</span></p>
								</a>
							</li>
							<li>
								<a href="##">
									<i className="top02"></i>
									<p><span  className='no2' >华语Top100</span></p>
								</a>
							</li>
							<li>
								<a href="##">
									<i className="top03"></i>
									<p><span  className='no3' >全球票房榜</span></p>
								</a>
							</li>
						</ul>
					</div>
					<ul className='topnews' >
					{
						this.state.topbodylist.map(item=>
							<li className='link' key={item.id} >
								<a href="##">
									<div className='toptxt'>
										<h2><b>{item.topListNameCn}</b></h2>
										<p className='txt_elli'>
										<span>{item.summary}</span>
										</p>
									</div>
									<i className="i_tnext">&gt;</i>
								</a>
							</li>	
						)
					}
					</ul>
					<p className='btn' onClick={this.addNews.bind(this,this.state.page)} >查看更多</p>
				</div>
			</div>
		)
	}
	addNews(page){
		page++;
		this.setState({
			page:page
		},()=>{
			axios.get(`/Service/callback.mi/TopList/TopListOfAll.api?t=201855131298463&pageIndex=${page}`).then(
				res=>{
					var newlist = [...this.state.topbodylist,...res.data.topLists];
					this.setState({
						topbodylist:newlist
					})
					console.log(this.state.topbodylist);
				}
			)
		})
		
	}
}

export default Toplist