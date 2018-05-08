import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import logo from "../../.././logo_foot.png";

const footerImage = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(' + logo + ')'
}

class Footer extends Component{

	render(){
		return(
			<div id="footer">
				<div className="footernav">
					<ul>
						<li><NavLink to="/home">首页</NavLink></li>
	                    <li><NavLink to="/ticket">购票</NavLink></li>
	                    <li><NavLink to="/shopping">商城</NavLink></li>
	                    <li><NavLink to="/discover">发现</NavLink></li>
	                    <li><NavLink to="/mine">我的</NavLink></li>
					</ul>
				</div>
				<div className="footerlink">
					<ul>
						<li><span>PC版</span></li>
						<li><span>客户端下载</span></li>
						<li><span>意见反馈</span></li>
						<li><span>帮助中心</span></li>
					</ul>
				</div>
				<div className="copy">
					<p><span style={footerImage}></span></p>
					<p>
						<span>Copyright </span>
						<span>2006-2018</span>
						<span> Mtime.com Inc. All rights reserved.</span>
					</p>
				</div>
			</div>
		)
	}
}

export default Footer
   