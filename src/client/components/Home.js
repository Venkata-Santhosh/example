import React from 'react';

const Home = () => {
	return (
		<div>
			Hey this is home
			<button
				onClick={() => console.log('clicked')}
			>
				Click me
			</button>
		</div>
	);
};

export default Home;
