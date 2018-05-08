import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import store from "../../Redux/Store";
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import { ActivityIndicator} from 'antd-mobile';
import $ from 'jquery';

class Shopping extends Component{
	constructor(){
		super();
		
		this.state={
			loopList:[],
			navigatorIcon:[],
			cellA:"",
			cellB:"",
			list:null,
			topicList:null,
			subList:null,
			category:null,
			goodsList:null,
			animating: false
		}
	}
	
	componentWillMount(){

		this.props.getIsShow(true)
	}

	componentDidMount(){
		this.setState({ animating: !this.state.animating });
	/*	axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20185215104828077").then(res =>{
			//console.log(res.data.topic[0].subList);
			//console.log(res.data.category);
		});
		*/
		/*axios.get("/Service/callback.mi/ECommerce/RecommendProducts.api?t=201853151549348&goodsIds=&pageIndex=1").then(res =>{
			//console.log(res.data);
		});*/
		
		Promise.all([axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20185215104828077"),axios.get("/Service/callback.mi/ECommerce/RecommendProducts.api?t=201853151549348&goodsIds=&pageIndex=1")]).then(res =>{
			//console.log(res[0].data.navigatorIcon);
			
			this.setState({
				loopList:res[0].data.scrollImg,
				navigatorIcon:res[0].data.navigatorIcon,
				cellA:res[0].data.cellA,
				cellB:res[0].data.cellB,
				list:res[0].data.cellC.list,
				topicList:res[0].data.topic,
				subList:res[0].data.topic[0].subList,
				category:res[0].data.category,
				goodsList:res[1].data.goodsList,
				animating: !this.state.animating
			});
		});
		
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
	
	shopSearch(){
		this.props.history.push("/ShopSearch");
	}
	
	handleLi(name){
		switch(name){
			case "模玩":
				this.props.history.push("/moWan");
			break;

			default:
				return;
		}
	}
	
	render(){
		return(
			<div id="shopping">
				<div className="sh-top">
					<div className="search" onClick={this.shopSearch.bind(this)}>
						<i className="iconfont icon-icon--"></i>
						<span>搜索正版电影周边</span>
					</div>
					<div className="shop" onClick={() => {
						this.props.history.push("/shopCart");
					}}>
						<i className="iconfont icon-caigou-xianxing"></i>
					</div>
				</div>
				
				<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 3000}} key={this.state.loopList.length}>		
				 	{
				 		this.state.loopList.map(item =>
				 			<img src={item.image} key={item.image}/>
				 		)
				 	}
	            </ReactSwipe>
				
				
				<div className="nav">
					<ul>
						{
							this.state.navigatorIcon.map(item => 
								<li key={item.image} onClick={this.handleLi.bind(this,item.iconTitle)}>
									<a>
										<img src={item.image} alt=""/>
										<span>{item.iconTitle}</span>
									</a>
								</li>
							)
						}

					</ul>
				</div>
				
				<div className="mallshop">
					<div className="shop01">
						<a>
							<img src={this.state.cellA.img} alt=""/>
						</a>
					</div>
					
					<div className="shopRight">
						<div className="shop03">
							<a>
								{
									this.state.list?
									<img src={this.state.list[0].image} alt=""/>
									:null
								}
							</a>
						</div>
					
						<div>
							<a>
								{
									this.state.list?
									<img src={this.state.list[1].image} alt=""/>
									:null
								}
							</a>
						</div>
					</div>
					
					<div>
						<a>
							<img src={this.state.cellB.img} alt=""/>
						</a>
					</div>
				</div>
				
				{
					this.state.topicList?
					<div className="america" style={{background:"url("+this.state.topicList[0].backgroupImage+") no-repeat",backgroundSize:"100% auto"}}>
						<ul>
							{
								this.state.topicList.map(item =>
									<li key={item.checkedImage}><img src={item.checkedImage} alt=""/></li>
								)
							}
						</ul>
					</div>
					:null
				}
				
				<div className="mall">
					<h4>Captain America</h4>
					<h3>美国队长系列</h3>
					<ul>
						{
							this.state.subList?
							this.state.subList.map(item =>
								<li key={item.goodsId}>
									<img src={item.image} alt=""/>
									<p className="title">{item.title}</p>
									<p className="price">￥440</p>
								</li>
							)
							:null
						}
					</ul>
					
					<div className="btn">
						<a>更多商品 ></a>
					</div>
				</div>
				
				{
					this.state.category?
					this.state.category.map(itemFirst =>
						<div className="wanju" key={itemFirst.image}>
							<div className="wanju-top">
								<h2><i></i>{itemFirst.name}</h2>
								
								<div className="gengduo">
									<a>更多</a>
									<i className="iconfont icon-xiayiye"></i>
								</div>
							</div>
							
							<div className="hot">
								<a>
									<img src={itemFirst.image}/>
								</a>
								
								<ul>
									{
										itemFirst.subList.map(item =>
											<li key={item.goodsId}>
												<a>
													<img src={item.image} alt=""/>
													<p className="hot-title">{item.title}</p>
													<p className="hot-price">￥440</p>
												</a>
											</li>
										)
									}
								</ul>
							</div>
						</div>
					)
					:null
				}
				
				<div className="shop-bottom">
					<h2><b>你可能感兴趣的</b></h2>
					
					<ul>
						{
							this.state.goodsList?
							this.state.goodsList.map(item =>
								<li key={item.goodsId}>
									<a href="#">
										<span>{item.iconText}</span>
										<img src={item.image} alt=""/>
										<p className="shop-title">{item.name}</p>
										<p className="shop-price">￥440</p>
									</a>
								</li>
							):null
						}
					</ul>
				</div>
				
				<div className="morelink">
					<a href="#">奋力加载中...</a>
				</div>
				
				 <ActivityIndicator
	                toast
	                text="Loading..."
	                animating={this.state.animating}
              	></ActivityIndicator>
              	
              	
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
    )(Shopping)

