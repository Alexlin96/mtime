import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { connect } from 'react-redux';
import {NavLink} from "react-router-dom";
import cine_01 from "../.././cine_01.png";
import cine_02 from "../.././cine_02.png";
import cine_03 from "../.././cine_03.png";
import cine_04 from "../.././cine_04.png";

const bgCine_01 = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(' + cine_01 + ')'
}
const bgCine_02 = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(' + cine_02 + ')'
}
const bgCine_03 = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(' + cine_03 + ')'
}
const bgCine_04 = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(' + cine_04 + ')'
}

class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			movieinfo:null,
			hotcomments:[],
			totalcount:'',
			shortcomments:{},
			isShow:false
		}
	}

	componentWillMount(){
		//console.log(this.props.match.params.id);
		this.props.getIsShow(false)
		Promise.all([axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.id}&locationId=291`),axios.get(`/Service/callback.mi/Movie/HotLongComments.api?movieId=${this.props.match.params.id}&pageIndex=1`),axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.props.match.params.id}&pageIndex=1`)
		]).then(res=>{
			console.log(res[2].data)
			this.setState({
				movieinfo:res[0].data,
				hotcomments:res[1].data.comments,
				totalcount:res[1].data.totalCount,
				shortcomments:res[2].data
			})
		}).catch(err=>{
			console.log(err);
		})
	}

	render(){
		return(
			<div id="detail">
				
				{
					this.state.movieinfo?
					<div className="wrap">
						<div className="detail_head">
							<div className="head_pic">
								<img src={this.state.movieinfo.image}/>
							</div>
							<div className="menu">
								<i className="iconfont icon-shangyiye" onClick={this.goBack.bind(this)}></i>
								<i className="iconfont icon-fenxiang"></i>
								<i className="iconfont icon-shoucang"></i>
							</div>
							<div className="detail_info">
								<div className="info_pic">
									<img src={this.state.movieinfo.image}/>
									<div className="moviever">
										{
											this.state.movieinfo.is3D?
											<span style={bgCine_01}></span>
											:null
										}
										{
											this.state.movieinfo.isIMAX?
											<span style={bgCine_02}></span>
											:null
										}
										{
											this.state.movieinfo.isIMAX3D?
											<span className="bgCine_03" style={bgCine_03}></span>
											:null
										}
										{
											this.state.movieinfo.isDMAX?
											<span className="bgCine_04" style={bgCine_04}></span>
											:null
										}
									</div>
								</div>
								<div className="info">
									<div className="titleCn">{this.state.movieinfo.titleCn}</div>
									<div className="titleEn">{this.state.movieinfo.titleEn}</div>
									<div className="rate">
										{
											this.state.movieinfo.rating>0?
											<span>{this.state.movieinfo.rating}</span>
											:null
										}
									</div>
									<div>
										{ 
											this.state.movieinfo.runTime!=="0分钟"?
											<span>{this.state.movieinfo.runTime}</span>
											:null
										}
									</div>
									<div>
										{
											this.state.movieinfo.type[0]?
											<span>{this.state.movieinfo.type[0]}</span>
											:null
										}
										{
											this.state.movieinfo.type[1]?
											<span> / {this.state.movieinfo.type[1]}</span>
											:null
										}
										{
											this.state.movieinfo.type[2]?
											<span> / {this.state.movieinfo.type[2]}</span>
											:null
										}
									</div>
									<div>
										{
											this.state.movieinfo.release.date.split("-")[0]+"年"+this.state.movieinfo.release.date.split("-")[1]+"月"+this.state.movieinfo.release.date.split("-")[2]+"日"+this.state.movieinfo.release.location+"上映"
										}
									</div>
									<div className="see">
										<span>我想看</span>
										<span>我要评分</span>
									</div>
								</div>
							</div>
						</div>
						<div className="detail_buy">
							<p>查影讯/购票</p>
						</div>
						<div className="cin_line">
							<p></p>
							<p></p>
						</div>
						<div className="plot_region">
							<p className={this.state.isShow?"":"hide"}>{this.state.movieinfo.content}</p>
							<p onClick={this.getIsShow.bind(this)}>
								{
									this.state.isShow?
									<i className="iconfont icon-icon--1"></i>
									:<i className="iconfont icon-icon--2"></i>
								}
							</p>
						</div>
						<div className="cin_line">
							<p></p>
							<p></p>
						</div>
						<div className="cin_line">
							<p></p>
							<p></p>
						</div>
						<div className="credits">
							<div className="goto_t">
								<b>{this.state.movieinfo.personCount}位演职员</b>
								<i className="iconfont icon-xiayiye"></i>
							</div>
							<div className="credits_info">
								<div className="director">
									<span>导演</span>
									<p className="pic">
										<img src={this.state.movieinfo.director.directorImg}/>
									</p>
									<p>{this.state.movieinfo.director.directorName}</p>
									<p>{this.state.movieinfo.director.directorNameEn}</p>
								</div>
								<div className="actor">
									<span>主要演员</span>
									<ul>
										{
											this.state.movieinfo.actorList.map(item=>
												<li key={item.actorId}>
													<p className="actor_pic">
														<img src={item.actorImg}/>
													</p>
													<p className="actor_name">{item.actor}</p>
													<p className="actorEn_name">{item.actorEn}</p>
													<p className="role_pic">
														<img src={item.roleImg}/>
													</p>
													<p className="role_name">{item.roleName}</p>
												</li>
											)
										}
									</ul>
								</div>
							</div>
						</div>
						<div className="cin_line">
							<p></p>
							<p></p>
						</div>
						<div className="movie_img">
							<div className="goto_t">
								<b>{this.state.movieinfo.imageCount}张图片</b>
								<i className="iconfont icon-xiayiye"></i>
							</div>
							<ul>
								{
									this.state.movieinfo.images.map((item,index)=>
										<li key={index}>
											<img src={item}/>
										</li>
									)
								}
							</ul>
						</div>
						<div className="cin_line">
							<p></p>
							<p></p>
						</div>
						{
							this.state.hotcomments.length>0?
							<div>
								<div className="hot_comments">
									<div className="goto_t">
										<b>精选影评（{this.state.totalcount}）</b>
										<i className="iconfont icon-xiayiye"></i>
									</div>
									<div className="hot_com">
										<b>{this.state.hotcomments[0].title}</b>
										<p>{this.state.hotcomments[0].content.substr(0,58)+"..."}</p>
									</div>
									<div className="uesr">
										<div className="user_pic">
											<img src={this.state.hotcomments[0].headurl}/>
										</div>
										<div className="uesr_name">
											<p>{this.state.hotcomments[0].nickname}</p>
											<p>
												{this.getTime(this.state.hotcomments[0].modifyTime)} 看过
												{
													this.state.hotcomments[0].rating>0?
													<span> - 评分<i>{this.state.hotcomments[0].rating}</i></span>
													:null
												}
											</p>
										</div>
									</div>
								</div>
								<div className="cin_line">
									<p></p>
									<p></p>
								</div>
							</div>
							:null
						}
						{
							this.state.shortcomments.cts.length>0?
							<div className="short_comments">
								<div className="goto_t">
									<b>网友短评（{this.state.shortcomments.totalCommentCount}）</b>
								</div>
								{
									this.state.shortcomments.cts.map(item=>
										<div className="comments" key={item.tweetId}>
											<div className="user_head">
												<img src={item.caimg}/>
											</div>
											<div className="user_comments">
												<p className="user_name">
													<span className="commentsdate">
														<span>
															{
																Date.parse(new Date())/1000+28800-item.lcd<86400?
																parseInt((Date.parse(new Date())/1000+28800-item.lcd)/3600)+"小时前"
																:this.getTime(item.lcd)
															}
														</span>
														{
															item.cr>0?
															<span> - 评
																<i>{item.cr.toString().length==1?item.cr+".0":item.cr}</i>
															</span>
															:null
														}
													</span>
													<span>{item.ca}</span>
												</p>
												<p className="content">
													{
														item.ce.length>50?
														item.ce.slice(0, 50)+"..."
														:item.ce
													}
												</p>
												<p className="reply">
													<i className="iconfont icon-xinxi"></i>
													<span>
														{
															item.commentCount>0?
															item.commentCount
															:"回复"
														}
													</span>
													<i className="iconfont icon-zan"></i>
													<span>赞</span>
												</p>
											</div>
										</div>
									)
								}
							</div>
							:null
						}
					</div>
					:null
				}
			</div>
		)
	}

	goBack(){
		this.props.history.go(-1);
	}

	getIsShow(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	getTime(time){
		//console.log(time)
		let date = new Date((time-28800)*1000)
		let Y = date.getFullYear() + '-';
		let M = (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-';
		let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
		let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
		let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
		let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); 
		return (Y+M+D+h+m+s);
	}
}

export default connect(
    null
    ,{
        getIsShow:(bool)=>{
            return {
                type:"getIsShow",
                playload:bool
            }
        }
    }
    )(Detail)