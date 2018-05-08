import React,{Component} from "react";
import "./index.css";
import Search from "../Common/Search";
import Hotplaying from "./Hotplaying";
import Hotpoint from "./Hotpoint";
import axios from "axios";
import { ActivityIndicator } from 'antd-mobile';
import {NavLink} from "react-router-dom";
import store from "../../Redux/Store";
import { connect } from 'react-redux';

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			nowplayinglist:[],
			comingsoonnum:0,
			hotpointlist:[],
			isShow:false
		}
	}

	componentWillMount(){
		this.props.getIsShow(true)
	}

	componentDidMount(){
		this.setState({
			isShow:true
		})
		Promise.all([axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=291"),axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t")
		]).then(res=>{
			//console.log(res[0].data);
			//console.log(res[1].data);
			this.setState({
				nowplayinglist:res[0].data.ms,
				comingsoonnum:res[0].data.totalComingMovie,
				hotpointlist:res[1].data.hotPoints,
				isShow:false
			})

			store.dispatch({
				type:"getNowPlayingList",
				payload:res[0].data.ms
			})
		}).catch(err=>{
	  		console.log(err);
	  	})
	}

	render(){
		return(
			<div id="home">
                <Search></Search>
               <NavLink to="/film/nowplaying">
	                <h2 nlist={this.state.nowplayinglist}>
	                	正在热映（{this.state.nowplayinglist.length}部）
	                	<i className="iconfont icon-xiayiye"></i>
                	</h2>
                </NavLink>
				<Hotplaying nlist={this.state.nowplayinglist}></Hotplaying>
				<NavLink to="/film/comingsoon">
					<h2 className="coming">
						即将上映（{this.state.comingsoonnum}部）
						<i className="iconfont icon-xiayiye"></i>
					</h2>
				</NavLink>
				<div className="cin_line">
					<p></p>
					<p></p>
				</div>
				<h2>今日热点</h2>
				<Hotpoint hlist={this.state.hotpointlist}></Hotpoint>
				<ActivityIndicator toast text="Loading..." animating={this.state.isShow}></ActivityIndicator>
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
    )(Home)