import React from 'react';

const Card = props => {
	return (
		<div className="h-100 row align-items-center">
			<div className="col d-flex justify-content-center">
				<div className="col col-md-10 jumbotron">{props.html}</div>
			</div>
		</div>
	);
};

export default Card;
