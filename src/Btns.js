import { useState, useEffect } from 'react';

function Btns({ sec, num }) {
	const [count, setCount] = useState(0);
	const rotation = () => {
		sec.current.style.transform = `rotate(${(360 / num) * count}.deg)`;
	};

	useEffect(() => {
		rotation();
	}, [count]);
	return (
		<nav>
			<a
				href='#'
				className='prev'
				onClick={() => {
					setCount(count - 1);
				}}></a>
			<a
				href='#'
				className='next'
				onClick={() => {
					setCount(count + 1);
				}}></a>
		</nav>
	);
}

export default Btns;
