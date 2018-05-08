import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import Search from "../Common/Search";
import store from "../../Redux/Store";
import { connect } from 'react-redux';

class Film extends Component{

	componentWillMount(){
		this.props.getIsShow(false)
	}

	render(){
		return(
			<div id="film">
				<div className="filmheader">
					<NavLink to="/home" className="goback">
						<i className="iconfont icon-shangyiye"></i>
					</NavLink>
					<ul>
						<li><NavLink to="/film/nowplaying" activeClassName="active">正在热映</NavLink></li>
						<li><NavLink to="/film/comingsoon" activeClassName="active">即将上映</NavLink></li>
					</ul>
				</div>
				<Search></Search>
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
    )(Film)