import Card from './Card';
import Btns from './Btns';
import { useRef } from 'react';

function Section() {
	const sec = useRef(null);
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];

	return (
		<>
			<section ref={sec}>
				{arr.map((item, idx) => {
					return (
						<Card key={idx} item={item} index={idx} num={arr.length} />
					);
				})}
			</section>
			<Btns sec={sec} num={arr.length} />
		</>
	);
}

export default Section;
