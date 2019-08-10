import React from 'react';
import EmplList from '../../components/empl-list';
import EmplDetails from '../../components/empl-details';
import EmplModal from '../../components/empl-modal';
import EmplModalEdit from '../../components/empl-modal-edit'
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
	return (
		<main role="main">
			<Router>
				<Route path="/" component={EmplList} exact/>
				<EmplModal />
				<Route path="/details/:id" render={ ({match}) => {
					const {id} = match.params;
					return <EmplDetails itemId={id}/>
				}}/>
				<Route path="/details/:id" render={ ({match}) => {
					const {id} = match.params;
					return <EmplModalEdit itemId={id}/>
				}}/>
			</Router>
		</main>
	)
}

export default App;