import React from 'react';
import Card from '../nft/Card';
import { Container } from './metahomeStyles';
import a from '../../assets/nfts/nft1.png';
import b from '../../assets/nfts/nft2.png';
import c from '../../assets/nfts/nft3.png';
import d from '../../assets/nfts/nft4.png';
import e from '../../assets/nfts/nft5.png';
import f from '../../assets/nfts/nft6.png';
import g from '../../assets/nfts/nft7.png';
import h from '../../assets/nfts/nft8.png';

const Metahomes = () => {
	const iconArr = [a, b, c, d, e, f, g, h];
	return (
		<Container>
			<h2>Inspiration for your next adventure</h2>
			<section className='grid'>
				{iconArr.map((item, indx) => (
					<Card key={indx} icon={item} />
				))}
			</section>
		</Container>
	);
};

export default Metahomes;
