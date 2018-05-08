import React,{Component} from "react";
import "./index.css";
import Search from "../Common/Search";
import axios from "axios";
import store from "../../Redux/Store";
import { connect } from 'react-redux';
class Ticket extends Component{
	constructor(){
		super();
		this.state={
			cinemaList : []
		}
	}
	componentWillMount(){
		this.props.getIsShow(true)
		axios.get('/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=291&_=1525332403696').then(
			res=>{
				this.setState({
					cinemaList:res.data
				})
				console.log(this.state.cinemaList);
			}
		)
	}

	render(){
		return(
			<div id='ticket' >
				<Search></Search>
				<div className='_3HOBO'>
					<ul className='_2TG3p'>
						<li>
							<a href="javascript:void(0)"><span>离我最近</span><i className='iconfont icon-icon--2' ></i></a>
						</li>
						<li className='haveborder' >
						<a href="javascript:void(0)"><span>全城</span><i className='iconfont icon-icon--2'  ></i></a>
						</li>
						<li>
						<a href="javascript:void(0)"><span>影厅特效</span><i className='iconfont icon-icon--2' ></i></a>
						</li>
					</ul>
				</div>
				<div className='banner' >
					<img src="//static1.mtime.cn/feature/mobile/banner/2018/0211/jhsf750175.jpg"/> 
				</div>
				<ul className='_zVfpB'>
					{
						this.state.cinemaList.map(item=>
						<li className='_10VN3' key={item.cinemaId} >
						<dl>
							<dt className='_1yfC8'>
								<p className='_eaesd'>
									<span>{item.cinameName}</span>
								</p>
								<p className='_sEOO0'> 
									<b>{item.minPrice/100}</b>
									<span>元起</span>
								</p>
							</dt>
							<dd className='_1yfC8 _10hXh' >
								<p>{item.address}</p>
							</dd>
							<dd className='_HsWfu'>
								{	
									item.feature.has3D==1?
									<i>3D</i>
									:null

								}
								{
									item.feature.hasFeature4D==1?
									<i>4D</i>
									:null
								}
								{
									item.feature.hasFeature4K==1?
									<i>4K</i>
									:null
								}
								{
									item.feature.hasFeatureDolby==1?
									<i>杜比</i>
									:null
								}
								{
									item.feature.hasIMAX==1?
									<i>IMAX</i>
									:null
								}
								{
									item.feature.hasLoveseat==1?
									<i>情侣座</i>
									:null
								}
								{
									item.feature.hasVIP==1?
									<i>VIP</i>
									:null
								}			
							</dd>
						</dl>
					</li>
						)
					}
				</ul>
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
    )(Ticket)