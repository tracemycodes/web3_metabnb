import { Container } from './rentStyles';
import rentImg1 from '../../assets/rentImg1.png';
import rentImg2 from '../../assets/rentImg2.png';
import rentImg3 from '../../assets/rentImg3.png';
import rentImg4 from '../../assets/rentImg4.png';

const Rent = () => {
	return (
		<Container>
			<div className='rent_a_place'>
				<h2>
					Rent a <span>Place</span> away from <span>Home</span> in the{' '}
					<span>Metaverse</span>
				</h2>
				<p>
					we provide you access to luxury and affordable houses in the
					metaverse, get a chance to turn your imagination to reality at your
					comfort zone
				</p>
				<form>
					<input type='text' />
					<button>search</button>
				</form>
			</div>
			<div className='rightSect'>
				<figure className='item_a'>
					<img src={rentImg1} alt='home' />
				</figure>
				<figure className='item_b'>
					<img src={rentImg2} alt='home' />
				</figure>

				<figure className='item_c'>
					<img src={rentImg3} alt='home' />
				</figure>
				<figure className='item_d'>
					<img src={rentImg4} alt='home' />
				</figure>
			</div>
		</Container>
	);
};

export default Rent;
