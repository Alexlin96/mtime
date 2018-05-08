import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import $ from 'jquery';
import { ActivityIndicator} from 'antd-mobile';

class MoWan extends Component{
	constructor(){
		super();
		
		this.state = {
			showSortDiv:false,
			showIcon1:false,
			showIcon2:true,
			showIcon3:false,
			showIcon4:true,
			showIcon5:false,
			showIcon6:true,
			topicList:null,
			showTopic:false,
			categoryList:null,
			showRole:false,
			goodsList:null,
			animating: false
		}
	}
	
	componentWillMount(){
		this.props.getIsShow(false);
	}
	
	componentDidMount(){
		this.setState({ animating: !this.state.animating });
		
		axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=5AD9F14BE8652E046EA1108FF01BB3A6&t=20185415392299721").then(res => {
			//console.log(res.data.content.category.categoryList);
			this.setState({
				topicList:res.data.content.showTopic.topicList,
				categoryList:res.data.content.category.categoryList,
				goodsList:res.data.content.goods.goodsList,
				animating: !this.state.animating
			});
		});
		
		/*axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=1&sm=1&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=0E6EAB5891C98B2FC9B28003BECA0465&t=20185421533256315").then(res =>{
			console.log(res.data.content.goods.goodsList);
		});*/
		
		$(function(){	
			$(window).scroll(function(){
				//console.log($(window).scrollTop());
				if($(window).scrollTop() > 500){
					$("#backtop").fadeIn();
				}else{
					$("#backtop").fadeOut();
				}
			});
			
			$("#backtop").click(function(){
				$("html,body").animate({scrollTop:0},500);
			});
		});
	}
	
	render(){
		return(
			<div id="moWan">
				<div className="moWan-top">
					<a className="iconfont icon-shangyiye" onClick={()=>{
						this.props.history.push("/shopping");
					}}></a>
					
					<div className="moWan-center">
						<i className="iconfont icon-icon--"></i>
						<input type="text" placeholder="搜索正版电影周边" className="searchText"/>
					</div>
					
					<div className="moWan-right">
						<i className="iconfont icon-shaixuan"></i>
					</div>
				</div>
				
				<div className="moWan-nav">
					<ul>
						<li onClick={() => {
							this.setState({
								showSortDiv:!this.state.showSortDiv,
								showIcon1:!this.state.showIcon1,
								showIcon2:!this.state.showIcon2
							});
							
							$(function(){			
								$(".sortDiv ul li").click(function(){
									$(this).addClass("active").siblings().removeClass("active");
								});
							});
						}}>
							<a>
								综合排序
								{
									this.state.showIcon1?
									<i className="iconfont icon-icon--1"></i>
									:null
								}
								
								{
									this.state.showIcon2?
									<i className="iconfont icon-icon--2"></i>
									:null
								}
							</a>
						</li>
						<li onClick={() => {
							this.setState({
								showIcon3:!this.state.showIcon3,
								showIcon4:!this.state.showIcon4,
								showTopic:!this.state.showTopic
							});
							
							$(function(){			
								$(".topic ul li").click(function(){
									$(this).addClass("active").siblings().removeClass("active");
								});
							});
						}}>
							<a>
								主题角色
								{
									this.state.showIcon3?
									<i className="iconfont icon-icon--1"></i>
									:null
								}
								{
									this.state.showIcon4?
									<i className="iconfont icon-icon--2"></i>
									:null
								}
							</a>
						</li>
						<li onClick={() => {
							this.setState({
								showIcon5:!this.state.showIcon5,
								showIcon6:!this.state.showIcon6,
								showRole:!this.state.showRole
							});
							
							$(function(){			
								$(".rolemain ul li").click(function(){
									$(this).addClass("active").siblings().removeClass("active");
								});
							});
						}}>
							<a>
								玩具模型
								{
									this.state.showIcon5?
									<i className="iconfont icon-icon--1"></i>
									:null
								}
								{
									this.state.showIcon6?
									<i className="iconfont icon-icon--2"></i>
									:null
								}
							</a>
						</li>
					</ul>
				</div>
				
				{/*
				  * 排序展开	
				  **/}
				<ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={500}
				          transitionLeaveTimeout={300}>
				{
					this.state.showSortDiv?
					<div className="sortDiv" onClick={() =>  {
						this.setState({
							showSortDiv:!this.state.showSortDiv,
							showIcon1:!this.state.showIcon1,
							showIcon2:!this.state.showIcon2
						});
					}}>
						<ul>
							<li className="active"><a>综合排序</a></li>
							<li onClick={() =>{
								this.setState({ animating: !this.state.animating });
								
								axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=1&sm=1&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=0E6EAB5891C98B2FC9B28003BECA0465&t=20185421533256315").then(res =>{
									//console.log(res.data.content.goods.goodsList);
									
									this.setState({
											goodsList:res.data.content.goods.goodsList,
											animating: !this.state.animating
										}
									);
								});
							}}><a>价格从低到高</a></li>
							<li onClick={() =>{
								this.setState({ animating: !this.state.animating });
								
								axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=1&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=FB02F07BA2BD94575AA38DB77EA971E0&t=20185422111547960").then(res =>{
									//console.log(res.data.content.goods.goodsList);
									
									this.setState({
											goodsList:res.data.content.goods.goodsList,
											animating: !this.state.animating
										}
									);
								});
							}}><a>价格从高到低</a></li>
							<li onClick={() =>{
								this.setState({ animating: !this.state.animating });
								
								axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=3&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=026C0E719C60BEA18C84C77A5C8EA22F&t=2018542224118499").then(res =>{
									//console.log(res.data.content.goods.goodsList);
									
									this.setState({
											goodsList:res.data.content.goods.goodsList,
											animating: !this.state.animating
										}
									);
								});								
							}}><a>好评率从高到低</a></li>
							<li onClick={() => {
								this.setState({ animating: !this.state.animating });
								
								axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=2&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=95563BA1FE1FE2C76E8F021331224465&t=20185422273716438").then(res =>{
									//console.log(res.data.content.goods.goodsList);
									
									this.setState({
										goodsList:res.data.content.goods.goodsList,
										animating: !this.state.animating
									});
								});	
							}}><a>销量从高到低</a></li>
						</ul>
					</div>
					:null
				}
				</ReactCSSTransitionGroup>
				
				{/*
				  * 主题展开	
				  **/}
				
				<ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={500}
				          transitionLeaveTimeout={300}>
				{
					this.state.showTopic?
					<div className="topic" onClick={() => {
						this.setState({
							showTopic:!this.state.showTopic,
							showIcon3:!this.state.showIcon3,
							showIcon4:!this.state.showIcon4
						});
					}}>
						<ul>
							<li className="active" onClick={() => {
								this.setState({ animating: !this.state.animating });
								
								axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=4B42DC4C8A68B4CDEE78E8BF2DE27BDB&t=20185423202819797").then(res =>{
									//console.log(res.data.content.goods.goodsList);
									
									this.setState({
										goodsList:res.data.content.goods.goodsList,
										animating: !this.state.animating
									});
								});	
							}}>
								<a><img className="m_img" src="../../../images/all.png" alt=""/><span>全部</span></a>
							</li>
							
							{
								this.state.topicList?
								this.state.topicList.map(item =>
									<li key={item.topicId} onClick={() => {
										this.setState({ animating: !this.state.animating });
										
										axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=2&sm=2&topicId=${item.topicId}&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=AE3A26027CBDD39372EAC62FEA9EF520&t=2018542232574574`).then(res =>{
											this.setState({
												goodsList:res.data.content.goods.goodsList,
												animating: !this.state.animating
											});
										});
									}}>
										<a><img className="m_img" src={item.img} alt=""/><span>{item.title}</span></a>
									</li>
							):null
							}
						</ul>
					</div>
					:null
				}
				</ReactCSSTransitionGroup>
				
				{/*
				  * 玩具模型
				  **/}
				
				<ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={500}
				          transitionLeaveTimeout={300}>	
				    {
				    	this.state.showRole?
				    	<div className="rolemain" onClick={() => {
				    		this.setState({
				    			showRole:!this.state.showRole,
				    			showIcon5:!this.state.showIcon5,
								showIcon6:!this.state.showIcon6
				    		});
				    	}}>
							<ul>
								<li onClick={() => {
									this.setState({ animating: !this.state.animating });
									
									axios.get("/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=4B42DC4C8A68B4CDEE78E8BF2DE27BDB&t=20185423202819797").then(res =>{
										//console.log(res.data.content.goods.goodsList);
										
										this.setState({
											goodsList:res.data.content.goods.goodsList,
											animating: !this.state.animating
										});
									});	
							}}><a><span>全部</span></a></li>
								
								{
									this.state.categoryList?
									this.state.categoryList.map(item =>
										<li key={item.categoryId} onClick={() =>{
											this.setState({ animating: !this.state.animating });
										
											axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=${item.categoryId}&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=1D25615F9739D905FD7478E89C0E7631&t=2018542249596713`).then(res =>{
												this.setState({
													goodsList:res.data.content.goods.goodsList,
													animating: !this.state.animating
												});
											});
										}}><a><span>{item.name}</span></a></li>
									)
									:null
								}
							</ul>
						</div>
						:null
				    }
				</ReactCSSTransitionGroup>
				
				<div className="maWan-list">
					<ul>
						{
							this.state.goodsList?
							this.state.goodsList.map(item =>
								<li key={item.imageSrc} onClick={() => {
									this.props.history.push(`/shopDetail/${item.goodsId}`);
								}}>
									<a>
										<img src={item.imageSrc} alt=""/>
										<p className="name">{item.name}</p>
										<p className="weizhi"><span className="youPrice">￥{item.minSalePrice/100}</span><span className="yuanPrice">￥{item.marketPrice/100}</span></p>
									</a>
								</li>
							):null
						}
					</ul>
				</div>
				
				<ActivityIndicator
	                toast
	                text="Loading..."
	                animating={this.state.animating}
              	></ActivityIndicator>
              	
              	<div className="morelink">
					<a href="#">奋力加载中...</a>
				</div>
				
				<div className="backtop" id="backtop">
              		<img src="../../../images/backtop1.png"/>
              	</div>
			</div>
		)
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
 )(MoWan);