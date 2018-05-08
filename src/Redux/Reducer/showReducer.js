var showReducer = (prevstate=true,data={})=>{
	let {type,playload} = data;

	switch(type){
		case "showTitle":
			return true;

		case "hideTitle":
			return false;
		default:
			return prevstate;
	}

	return prevstate;	// 返回是什么， 状态就被改成什么 
}

export default showReducer;