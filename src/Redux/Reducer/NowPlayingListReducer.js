var NowPlayingListReducer = (prevstate=[],action)=>{
	let {type,playload} = action;
	switch(type){
		case "getNowPlayingList":
		return [...prevstate,...playload];
		default:
			return prevstate;
	}
    return prevstate;
}
export default NowPlayingListReducer