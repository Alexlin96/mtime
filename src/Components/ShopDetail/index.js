import React,{Component} from "react";
import "./index.css";
import {connect} from "react-redux";
import axios from "axios";

class ShopDetail extends Component{
	constructor(){
		super();
		
		this.state={
			goods:null
		}
	}
	
	componentWillMount(){
		this.props.getIsShow(false);
	}
	
	componentDidMount(){
		axios.get(`/Service/callback-mall.mi/product/detail.api?goodsId=${this.props.match.params.id}&locationId=290&t=2018559504651351`).then(res =>{
			console.log(res.data.data.productDetail.saleProperties);
			
			this.setState({
				goods:res.data.data.productDetail.goods
			});
		});
	}
	
	render(){
		return(
			<div id="ShopDetail">
				<div className="ShopDetail-top">
					<a className="iconfont icon-shangyiye" onClick={()=>{
						this.props.history.push("/shopping");
					}}></a>
						
					<div className="ShopDetail-center">
						<a className="iconfont icon-shouye" onClick={()=>{
							this.props.history.push("/shopping");
						}}></a>
						
						<a className="iconfont icon-caigou-xianxing" onClick={()=>{
							this.props.history.push("/shopCart");
						}}></a>
						
						<a className="iconfont icon-fenxiang" onClick={()=>{
							this.props.history.push("/shopping");
						}}></a>
					</div>
				</div>
				
				{
					this.state.goods?
					<div className="ShopDetail-image">
						<img src={this.state.goods.image}/>
						<p className="ShopDetail-name">{this.state.goods.longGoodsName}</p>
						<p className="xinping">{this.state.goods.style.goodsTag}</p>
						<p className="price"><span>￥{this.state.goods.txnSalePrice/100}</span><a>登录享受会员价</a></p>
						<p className="shichangjia">市场价<span>￥{this.state.goods.marketPrice/100}</span></p>
						<p className="mian">{this.state.goods.postAgeText}</p>
						<p className="xuanzhe"><span>选择尺寸 人物</span><a className="iconfont icon-xiayiye"></a></p>
					</div>:null
				}
				
				<div className="control">
					<div className="controlmid">
						<a href="#"></a>
					</div>
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
 )(ShopDetail);