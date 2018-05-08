import React,{Component} from "react";
import "./index.css";
import axios from "axios";
class Review extends Component{
	constructor(){
		super();
		this.state={
			page:1,
			reviewList : [],
			reviewbodylist:[]
		}
	}
	componentWillMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20185415331435418').then(
			res=>{
				this.setState({
					reviewList:res.data.review
				})
				console.log(this.state.reviewList);
			}
		)
		axios.get('/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=201854233021803').then(
			res=>{
				this.setState({
					reviewbodylist:res.data
				})
				console.log(this.state.reviewbodylist);
			}
		)
	}
	render(){
		return(
			<div id='review' >
				<div className='banner' >
					<img src={this.state.reviewList.imageUrl} /> 
					<h3>{this.state.reviewList.title}</h3>
				</div>
				<ul className='_reviewList' >
				{
					this.state.reviewbodylist.map(item=>
						<li className='_reviewItem' key={item.id} >
						<dl>
							<dt>
								<a href="##">{item.title}</a>
								<div className='cinema_reviews' >
									<ul>
										<li className='table' >
											<div className="cine_user">
												<img  src={item.userImage} className="m_img img_box" /> 
											</div>
											<div className='cine_txt td' >
												<p>
													<b>{item.nickname}-评分<strong>《{item.relatedObj.title}》</strong></b>
													{
														item.rating!=''?
														<em className="m_score"><i>{item.rating}</i></em>
														:null
													}
												</p>
											</div>
										</li>
									</ul>
								</div>
							</dt>
						</dl>
					</li>
					)
				}
				</ul>
			</div>
		)
	}
}

export default Review