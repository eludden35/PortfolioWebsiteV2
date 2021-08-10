import React from 'react';
import Card from './Card';
import pic from '../img/circle-cropped.png';
import kwuan from '../assets/kwuan.gif';
import squad from '../assets/esquadup.gif'
import ReactFullpage from '@fullpage/react-fullpage';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
	require('./statics/fullpage.cards.min.js');
};

const Fullpage = () => (
	<ReactFullpage
		pluginWrapper={pluginWrapper}
		scrollingSpeed={300}
		cardsKey={
			'bG9uem8tcG9ydGZvbGlvLmhlcm9rdWFwcC5jb21fMUlLWTJGeVpITT10OVM='
		}
		cards={true}
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div id="fullpage">
						<div class="section" id="section1">
							<div class="fp-bg"></div>
							<div class="fp-content">
								<Card
									html={[
										<>
											<div className="col-12 text-center">
												<h3 className="heading">
													About Me
												</h3>
												<div className="heading-underline"></div>
											</div>

											<div className="row justify-content-center">
												<div className="col-lg-12 aboutme">
													<div className="row">
														<div className="col-lg-4">
															<img
																src={pic}
																alt="Elonzo"
															/>
														</div>
														<div className="col-lg-8">
															<p>
																<i className="fas fa-quote-left"></i>
																I am a
																passionate,
																aspiring
																Full-stack
																Developer that
																is soon to
																graduate from
																the Coding Dojo
																bootcamp with
																experience in
																Python, MERN,
																and Java. I have
																previous
																experience in
																leaderships
																roles and equal
																opportunity
																advisory. I am a
																hard-working,
																quick-learning,
																and organized
																individual. I am
																one that thrives
																in stressful and
																team
																environments. I
																am independently
																motivated and
																focused on
																writing
																effective and
																well-written
																code. I am
																excited for a
																career in
																software
																development that
																will engage,
																challenge, and
																progress my
																abilities.
																<br />
																<br />
																<i className="fas fa-lock"></i>{' '}
																<strong>
																	Secret
																	Security
																	Clearance
																</strong>
																<hr className="aboutme-hr" />
																<cite>
																	&#8212;
																	Elonzo, Full
																	Stack
																	Software
																	Developer
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
						</div>
						<div class="section" id="section2">
							<div class="slide" id="slide2-1">
								<div class="fp-bg"></div>
								<div class="fp-content">
									<Card
										html={[
											<>
												<div class="row dark text-center">
													{/* <div class="col-12 text-center">
														<h1 class="heading">
															Skills
														</h1>
														<div class="heading-underline"></div>
													</div> */}

													<div class="col-md">
														<h3>
															Programming Languages
														</h3>
														<div class="feature">
															<i class="fas fa-code fa-3x"></i>
														</div>
														<p class="lead">
															HTML, CSS, JavaScript, Typescript, Python, Java
														</p>
													</div>

													{/* <div class="col-md-4">
														<h3>Frameworks</h3>
														<div class="feature">
															<i class="fas fa-th-large fa-3x"></i>
														</div>
														<p class="lead">
															Django, ASP.NET,
															Node.js, Express,
															MongoDB, Bootstrap,
															Entity
														</p>
													</div>

													<div class="col-md-4">
														<h3>Databases</h3>
														<div class="feature">
															<i class="fas fa-database fa-3x"></i>
														</div>
														<p class="lead">
															MySQL, MongoDB,
															Django ORM
														</p>
													</div>

													<div class="col-md-6">
														<h3>Version Control</h3>
														<div class="feature">
															<i class="fas fa-code-branch fa-3x"></i>
														</div>
														<p class="lead">Git</p>
													</div>

													<div class="col-md-6">
														<h3>Methodologies</h3>
														<div class="feature">
															<i class="fas fa-sitemap fa-3x"></i>
														</div>
														<p class="lead">
															MVC, OPP, AJAX,
															API's, TTD
														</p>
													</div>
													<p>
														<strong>
															Version Control:
														</strong>{' '}
														Git
													</p>
													<p>
														<strong>
															Methodologies:
														</strong>{' '}
														MVC, OPP, AJAX, API's,
														TTD
													</p> */}
												</div>
											</>
										]}
									/>
								</div>
							</div>
							<div class="slide" id="slide2-2">
								<div class="fp-bg"></div>
								<div class="fp-content">
								<Card
										html={[
											<>
												<div class="row dark text-center">

													{/* <div class="col-md-4">
														<h3>Frameworks</h3>
														<div class="feature">
															<i class="fas fa-th-large fa-3x"></i>
														</div>
														<p class="lead">
															Django, ASP.NET,
															Node.js, Express,
															MongoDB, Bootstrap,
															Entity
														</p>
													</div>

													<div class="col-md-4">
														<h3>Databases</h3>
														<div class="feature">
															<i class="fas fa-database fa-3x"></i>
														</div>
														<p class="lead">
															MySQL, MongoDB,
															Django ORM
														</p>
													</div>

													<div class="col-md-6">
														<h3>Version Control</h3>
														<div class="feature">
															<i class="fas fa-code-branch fa-3x"></i>
														</div>
														<p class="lead">Git</p>
													</div>

													<div class="col-md-6">
														<h3>Methodologies</h3>
														<div class="feature">
															<i class="fas fa-sitemap fa-3x"></i>
														</div>
														<p class="lead">
															MVC, OPP, AJAX,
															API's, TTD
														</p>
													</div>
													<p>
														<strong>
															Version Control:
														</strong>{' '}
														Git
													</p>
													<p>
														<strong>
															Methodologies:
														</strong>{' '}
														MVC, OPP, AJAX, API's,
														TTD
													</p> */}
												</div>
											</>
										]}
									/>
								</div>
							</div>
						</div>
						<div class="section" id="section3">
							<div class="fp-bg"></div>
							<div class="fp-content">
								<Card
									html={[
										<>
											<div class="narrow">
												<div class="col-12 text-center">
													<h3 class="heading">
														My Projects
													</h3>
													<div class="heading-underline"></div>
												</div>

												<div class="row text-center">
													<div class="col-md-6">
														<div class="feature">
															<h2 class="heading1">
																Artist Portfolio Website
															</h2>
															<img src={kwuan} alt="kwuan website gif"/>
															<br />
															<a
																class="btn btn-light btn-md"
																href="https://www.kwuanburks.com"
															>
																Go To Project
															</a>
														</div>
													</div>

													<div class="col-md-6">
														<div class="feature">
															<h2 class="heading1">
																Tournament Gaming Website
															</h2>
															<img src={squad} alt="esquadup website gif"/>
															<br />
															<a
																class="btn btn-light btn-md"
																href="https://www.esquadup.com"
															>
																Go To Project
															</a>
														</div>
													</div>

													{/* <div class="col-md-6">
														<div class="feature">
															<h3 class="heading1">
																eCommerce
															</h3>
															<p>
																Full stack
																eCommerce
																website
															</p>
															<i class="fab fa-html5 fa-3x"></i>
															<i class="fab fa-css3 fa-3x"></i>
															<i class="fab fa-python fa-3x"></i>
															<img src={djangoImg} alt="django logo"/>
															<br />
															<a
																class="btn btn-light btn-md"
																href="/"
																target="_blank"
																rel="noreferrer"
															>
																Coming Soon...
															</a>
														</div>
													</div> */}
												</div>
											</div>
										</>
									]}
								/>
							</div>
						</div>
						<div class="section" id="section4">
							<div class="fp-bg"></div>
							<div class="fp-content">
								<Card
									html={[
										<>
											<div id="contact" class="offset">
												<div class="row justify-content-center">
													<div class="col-md-5 text-center">
														<h3>Contact Info</h3>
														<div class="heading-underline"></div>
														<p>
															(626) 590-0773
															<br />
															elonzo.ludden@gmail.com
														</p>
														<a
															href="https://www.github.com/eludden35"
															target="_blank"
															rel="noreferrer"
														>
															<i class="fab fa-github-square fa-3x"></i>
														</a>
														<a
															href="https://www.linkedin.com/in/elonzo-ludden/"
															target="_blank"
															rel="noreferrer"
														>
															<i class="fab fa-linkedin fa-3x"></i>
														</a>
													</div>
												</div>
											</div>
										</>
									]}
								/>
							</div>
						</div>
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

export default Fullpage;
