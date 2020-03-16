import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import MachineContainer from './containers/MachineContainer';
import MachineDetailContainer from './containers/MachineDetailContainer'
import store from './redux/store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MachineDetail from './containers/MachineDetail';
import { fetchMachines } from './redux/machineRedux';

function App () {
	useEffect(() => {
		console.log("asdfasdfasdf")
		store.dispatch(fetchMachines())
	})
	
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<header className='App-header'>
						<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
					</header>

					<nav className='App-nav'>
						<Link to='/'>Home</Link>
						<Link to='/machines'>Machines</Link>
					</nav>

					<Switch>
						<Route path='/machines/:id' component={MachineDetailContainer} />
						<Route path='/machines'>
							<MachineContainer />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
