import React,{Component} from "react";
import "./index.css";
import {withRouter} from "react-router-dom";

class Hotplaying extends Component{
		
	render(){
		return (
			<div id="hotplaying">
				<ul>
				{
					this.props.nlist.length>8?
					this.props.nlist.slice(0, 8).map(item=>
						<li key={item.id} onClick={this.getMovieId.bind(this,item.id)}>
							<div className="pic">
								<img src={item.img}/>
								{
									item.r>0?
									<span><i>{item.r.toString().length==1?item.r+".0":item.r}</i></span>
									:null
								}
							</div>
							<p className="title"><span>{item.t}</span></p>
						</li>
					)
					:this.props.nlist.map(item=>
						<li key={item.id}>
							<p>{item.t}</p>
						</li>
					)
				}
				</ul>
			</div>
		)
	}
	getMovieId(id){
		this.props.history.push(`/detail/${id}`);
	}
}

export default withRouter(Hotplaying)