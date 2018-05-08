
import React,{Component} from "react";
import "./index.css";

class Search extends Component{

	render(){
		return(
			<div id="search">
				<div className="head_search">
					<div className="city">
						<b>重庆</b>
						<i className="iconfont icon-icon--2"></i>
					</div>
					<div className="content">
						<i className="iconfont icon-icon--"></i>
						<input type="text" placeholder="影片/影院/影人"/>
					</div>
					<div className="goto">
						<span>搜索</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Search