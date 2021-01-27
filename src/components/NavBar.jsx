import React from 'react';
import logo from '../img/logo.png';

const NavBar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="/">
				<img src={logo} className="d-inline-block align-top" alt="" />
			</a>
			<div className="container collapse navbar-collapse">
				<div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="/">
								Left
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="//codeply.com">
								Codeply
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								Link
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								Link
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								Link
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
