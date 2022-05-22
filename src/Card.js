import React from 'react';

function Card({ item, index, num }) {
	const path = process.env.PUBLIC_URL;
	const style = {
		transform: `rotate(${(360 / num) * index}deg) translateY(-170%)`,
	};
	return (
		<article style={style}>
			<div className='inner'>
				<div className='pic'>
					<img src={`${path}/img/${item}.jpg`} alt={item} />
				</div>
				<h2>{item}</h2>
			</div>
		</article>
	);
}

export default Card;
