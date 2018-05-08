import {createStore,combineReducers,applyMiddleware,compose} from "redux";  //合并reducer 中间件
import reduxthunk from "redux-thunk";
import reduxpromise from "redux-promise";
import showReducer from '../Reducer/showReducer';
import promiseMiddleware from 'redux-promise';
import NowPlayingListReducer from '../Reducer/NowPlayingListReducer';
import isShowReducer from '../Reducer/isShowReducer';

//reducer切割：（先将reducer切割，写多个，合并成一个reducer，合并成一个状态）
var reducer =combineReducers({
	NowPlayingListReducer,
	isShowReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(reduxthunk,reduxpromise)
 ));  //store不能直接修改 必须通过reducer修改

export default store;
