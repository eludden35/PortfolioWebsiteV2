import './App.css';
import Landing from './views/Landing';
import React, { useState } from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import pic from './img/circle-cropped.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [modalVisible, setModalVisible] = useState(true);

	return (
		<div className="main">
			{/* <NavBar /> */}
			<Landing
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>

			<Card
				html={[
					<>
						<div className="col-12 text-center">
							<h3 className="heading">About Me</h3>
							<div className="heading-underline"></div>
						</div>

						<div className="row justify-content-center">
							<div className="col-lg-12 aboutme">
								<div className="row">
									<div className="col-lg-4">
										<img src={pic} alt="Elonzo" />
									</div>
									<div className="col-lg-8">
										<p>
											<i className="fas fa-quote-left"></i>
											I am a passionate, aspiring
											Full-stack Developer that is soon to
											graduate from the Coding Dojo
											bootcamp with experience in Python,
											MERN, and Java. I have previous
											experience in leaderships roles and
											equal opportunity advisory. I am a
											hard-working, quick-learning, and
											organized individual. I am one that
											thrives in stressful and team
											environments. I am independently
											motivated and focused on writing
											effective and well-written code. I
											am excited for a career in software
											development that will engage,
											challenge, and progress my
											abilities.
											<br />
											<br />
											<i className="fas fa-lock"></i>{' '}
											<strong>
												Secret Security Clearance
											</strong>
											<hr className="aboutme-hr" />
											<cite>
												&#8212; Elonzo, Full Stack
												Software Developer
											</cite>
										</p>
									</div>
								</div>
							</div>
						</div>
					</>
				]}
			/>
		</div>
	);
}

export default App;
