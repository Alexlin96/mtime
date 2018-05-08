import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import logo from "../../.././logo_mtime.png";
import { connect } from 'react-redux';
import store from "../../.././Redux/Store";

class Navbar extends Component{

	render(){

		return( 
            <div id="nav">
                {
                    this.props.isShow?
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home" className="logo">
                                    <img src={logo}/>
                                </NavLink>
                            </li>
                            <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
                            <li><NavLink to="/ticket" activeClassName="active">购票</NavLink></li>
                            <li><NavLink to="/shopping" activeClassName="active">商城</NavLink></li>
                            <li><NavLink to="/discover" activeClassName="active">发现</NavLink></li>
                            <li>
                                <NavLink to="/mine" activeClassName="active">
                                    <i className="iconfont icon-wode my-icon"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    :null
                }
            </div>
        )
       
    }
}

export default connect(
    (state)=>{
        return{
            isShow:state.isShowReducer
        }
    },{
        getIsShow:(bool)=>{
            return {
                type:"getIsShow",
                playload:bool
            }
        }
    }
   ,null,{pure:false})(Navbar)