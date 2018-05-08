import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "../Redux/Store";
import App from "../Components/App";
import Home from "../Components/Home";
import Film from "../Components/Film";
import Nowplaying from "../Components/Film/Nowplaying";
import Comingsoon from "../Components/Film/Comingsoon";
import Ticket from "../Components/Ticket";
import Shopping from "../Components/Shopping";
import Discover from "../Components/Discover";
import News from "../Components/Discover/News";
import Review from "../Components/Discover/Review";
import Toplist from "../Components/Discover/Toplist";
import Trailer from "../Components/Discover/Trailer";
import Mine from "../Components/Mine";
import Detail from "../Components/Detail";
import Login from '../Components/Mine/Login'
import Register from '../Components/Mine/Register'
import Search from '../Components/Search'
import ShopSearch from "../Components/ShopSearch";
import ShopCart from "../Components/ShopCart";
import MoWan from "../Components/MoWan";
import ShopDetail from "../Components/ShopDetail";

const router=(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/search" component={Search}/>
					<Route path="/film" render={()=>
						<Film>
							<Switch>
								<Route path="/film/nowplaying" component={Nowplaying}/>
								<Route path="/film/comingsoon" component={Comingsoon}/>
								<Redirect from="/film" to="/film/nowplaying"/>
	 						</Switch>
						</Film>
					}/>
					<Route path="/ticket" component={Ticket}/>
					<Route path="/shopping" component={Shopping}/>
					<Route path="/discover" render={()=>
						<Discover>
							<Switch>  
								<Route path='/discover/news' component={News} />
								<Route path='/discover/review' component={Review} />
								<Route path='/discover/toplist' component={Toplist} />
								<Route path='/discover/trailer' component={Trailer} />
								<Redirect from='/discover' to='/discover/news' />
							</Switch>
						</Discover>
					} />
					<Route path="/detail/:id" component={Detail}/>

					<Route path="/mine" render={()=>
						<Mine>
							<Switch>  
								<Route path='/mine/login' component={Login} />
								<Route path='/mine/register' component={Register} />
								<Redirect from='/mine' to='/mine/login' />
							</Switch>
						</Mine>
					} />
					<Route path="/shopSearch" component={ShopSearch}/>
					<Route path="/shopCart" component={ShopCart}/>
					<Route path="/moWan" component={MoWan}/>
					<Route path="/shopDetail/:id" component={ShopDetail}/>
					<Redirect from="*" to="/home"/>
				</Switch>
			</App>
		</Router>
		</Provider>
	)

export default router;