import React,{Component} from "react";
import "./index.css";
import {connect} from "react-redux";

class ShopCart extends Component{
	componentWillMount(){
		this.props.getIsShow(false);
	}
	
	render(){
		return(
			<div id = "shopCart">
				<div className="cart-top">
					<a className="iconfont icon-shangyiye" onClick={()=>{
						this.props.history.push("/shopping");
					}}></a>
					
					<div className="cart-center">
						购物车
					</div>
				</div>
				
				<div className="cart-cen">
					<i className="cart-pic"></i>
					<p>购物车还是空的，快去挑几件中意的商品吧</p>
					
					<div className="bigbtn">
						<a className="btn_hui" onClick={() =>{
							this.props.history.push("/shopping");
						}}>去购物</a>
					</div>
				</div>
			</div>
		)
	}
}

/*export default connect(null,{
	showNavBar:() =>{
		return {
			type:"hideNavBar"
		}
	}
})(ShopCart);*/

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
 )(ShopCart);

/*
	connect(

	mapStatetoProps 映射store 的状态 成为当前组件的属性（自己定义想要的属性名），

	mapDispatchtoProps 映射dispatch 成为当前组件的属性（自定定义想要的属性方法）
	)(我们的UI组件)

	原理：
	
	connect 实现原理 是 HOC ( 高阶组件 ) 
 */