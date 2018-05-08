import React,{Component} from "react";
import "./index.css";
import {connect} from "react-redux";

class ShopSearch extends Component{
	componentWillMount(){
		this.props.getIsShow(false);
	}
	
	render(){
		return(
			<div id = "shopSearch">
				<div className="search-top">
					<a className="iconfont icon-shangyiye" onClick={()=>{
						this.props.history.push("/shopping");
					}}></a>
					
					<div className="search-center">
						<i className="iconfont icon-icon--"></i>
						<input type="text" placeholder="搜索正版电影周边" className="searchText"/>
					</div>
					
					<a href="#" className="search-xx">搜索</a>
				</div>
				
				<div className="search-cen"></div>
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
 )(ShopSearch);

/*
	connect(

	mapStatetoProps 映射store 的状态 成为当前组件的属性（自己定义想要的属性名），

	mapDispatchtoProps 映射dispatch 成为当前组件的属性（自定定义想要的属性方法）
	)(我们的UI组件)

	原理：
	
	connect 实现原理 是 HOC ( 高阶组件 ) 
 */