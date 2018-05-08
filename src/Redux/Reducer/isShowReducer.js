var isShowReducer = (prevstate=true,data={})=>{

	let {type,playload} = data;

	switch(type){
		case "getIsShow":
			return playload;
		default:
			return prevstate;
	}

	return prevstate;
}

export default isShowReducer
