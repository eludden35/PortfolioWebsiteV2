import './App.css';
import Landing from './views/Landing';
import React, { useState } from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Fullpage from './components/Fullpage';

function App() {
	const [modalVisible, setModalVisible] = useState(true);

	return (
		<div className="main">
			{/* <NavBar /> */}
			<Landing
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
			<Fullpage />
		</div>
	);
}

export default App;
