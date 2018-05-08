import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom"
import store from "../../Redux/Store";
import { connect } from 'react-redux';


class Discover extends Component{

	componentWillMount(){
		this.props.getIsShow(true)
	}

	render(){
		return(
			<div id='discover'>
				<ul className="discoverheader">
					<li><NavLink to="/discover/news" activeClassName="active">新闻</NavLink></li>
					<li><NavLink to="/discover/trailer" activeClassName="active">预告片</NavLink></li>
					<li><NavLink to="/discover/toplist" activeClassName="active">排行榜</NavLink></li>
					<li><NavLink to="/discover/review" activeClassName="active">影评</NavLink></li>
				</ul>
				{
					this.props.children
				}
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
    )(Discover)