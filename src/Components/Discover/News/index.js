import React,{Component} from "react";
import "./index.css";
import axios from "axios";
class News extends Component{
	constructor(){
		super();
		this.state={
			page:1,
			newsList : [],
			newsbodylist:[]
		}
	}
	componentWillMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20185415331435418').then(
			res=>{
				this.setState({
					newsList:res.data.news
				})
				console.log(res.data);
			}
		)
		axios.get('/Service/callback.mi/News/NewsList.api?t=201854165589833&pageIndex=1').then(
			res=>{
				this.setState({
					newsbodylist:res.data.newsList
				})
				console.log(this.state.newsbodylist);
			}
		)
	}
	render(){
		return(
			<div id='news' >
				<div className='banner' >
					<img src={this.state.newsList.imageUrl} /> 
					<h3>{this.state.newsList.title}</h3>
				</div>
				<ul className='_newsList'>
				{
					this.state.newsbodylist.map(item=>
						item.type==1?
						<li className='table notbigpic' key={item.id} >
							<div className='newstxt td' >
								<dl>
									<dt>{item.title}</dt>
									<dd>
										<div className='picshow' >
											<p className='td' >
												<a href="##">
												<img className="m_img img_box" src={item.images[0].url1} /> 
												</a>
											</p>
											<p className='td' >
												<a href="##">
												<img className="m_img img_box" src={item.images[1].url1} /> 
												</a>
											</p>
											<p className='td' >
												<a href="##">
												<img className="m_img img_box" src={item.images[2].url1} /> 
												</a>
											</p>
										</div>
									</dd>
									<dd>
										<time>{((new Date().getDate())-(new Date(item.publishTime*1000).getDate()))*24+new Date().getHours()+8-(new Date(item.publishTime*1000).getHours())}小时前</time>
										{
											item.commentCount!=0?
											<b>评论{item.commentCount}</b>
											:null
										}
									</dd>
								</dl>
							</div>
						</li>
						:<li className='table' key={item.id} >
							<div className='npic' >
								<a href="##">
								<img src={item.image} className="m_img img_box" /> 
								</a>
							</div>
							<div className='newstxt td'>
								<dl>
									<dt>{item.title}</dt>
									<dd>
									
									</dd>
									<dd>
										<time>{((new Date().getDate())-(new Date(item.publishTime*1000).getDate()))*24+new Date().getHours()+8-(new Date(item.publishTime*1000).getHours())}小时前</time>
										{
											item.commentCount!=0?
											<b>评论{item.commentCount}</b>
											:null
										}
									</dd>
								</dl>
							</div>
						</li>
					)
				}
				</ul>
				<p onClick={this.addNews.bind(this,this.state.page)} >查看更多</p>
			</div>

		)
	}
	addNews(page){
		page++;
		this.setState({
			page:page
		},()=>{
			axios.get(`/Service/callback.mi/News/NewsList.api?t=201854165589833&pageIndex=${page}`).then(
				res=>{
					var newlist = [...this.state.newsbodylist,...res.data.newsList];
					//newlist.push(res.data.newsList)
					this.setState({
						newsbodylist:newlist
					})
					console.log(this.state.newsbodylist);
				}
			)
		})
		
	}
}

export default News