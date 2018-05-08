import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import store from "../../Redux/Store";
import { connect } from 'react-redux';

class Mine extends Component{

	componentWillMount(){
		this.props.getIsShow(false)
	}

	render(){
		return(
			<div id='mine'>
				<header>
					
					<NavLink to="/home"><i className='iconfont icon-shangyiye'></i></NavLink>
					<a href='##' className='logo' >
						<i className='logo_mtime' ></i>
					</a>
				</header>
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
    )(Mine)