import React,{Component} from "react";
import "./index.css";

function Hotpoint(props){
	//console.log(props)
	let { hlist } = props;
	return (
		<div id="hotpoint">
			<ul>
				{
					hlist.map(item=>
						<li key={item.id}>
							<div className="hotpic">
								<img src={item.img}/>
							</div>
							<div className="hotcontent">
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
								<p></p>
							</div>
						</li>
					)
				}
			</ul>
		</div>
	)
}

export default Hotpoint