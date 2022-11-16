import { Container } from './metanftstyles';
import threenft from '../../assets/threenft.png';

const Metanfts = () => {
	return (
		<Container>
			<section className='info'>
				<h2>Metabnb NFTs</h2>
				<p>
					we provide you access to luxury and affordable houses in the
					metaverse, get a chance to turn your imagination to reality at your
					comfort zone
				</p>
				<button>Learn more</button>
			</section>
			<section className='rightSect'>
				<figure className='threenft'>
					<img src={threenft} alt='nfts' />
				</figure>
			</section>
		</Container>
	);
};

export default Metanfts;
