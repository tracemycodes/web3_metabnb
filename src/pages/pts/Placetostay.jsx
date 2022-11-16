import React, { useContext } from 'react';
import Categories from '../../components/categories/Categories';
import AppContext from '../../components/context/AppContext';
import Modal from '../../components/modal/Modal';
import Card from '../../components/nft/Card';
import { Container } from './ptsStyles';
import a from '../../assets/nfts/nft1.png';
import b from '../../assets/nfts/nft2.png';
import c from '../../assets/nfts/nft3.png';
import d from '../../assets/nfts/nft4.png';
import e from '../../assets/nfts/nft5.png';
import f from '../../assets/nfts/nft6.png';
import g from '../../assets/nfts/nft7.png';
import h from '../../assets/nfts/nft8.png';
import i from '../../assets/nfts/nft9.png';
import j from '../../assets/nfts/nft10.png';
import k from '../../assets/nfts/nft11.png';
import l from '../../assets/nfts/nft12.png';
import m from '../../assets/nfts/nft13.png';
import n from '../../assets/nfts/nft14.png';
import o from '../../assets/nfts/nft15.png';
import p from '../../assets/nfts/nft16.png';

const Placetostay = () => {
	const iconArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];
	const { showModal } = useContext(AppContext);
	return (
		<Container>
			{showModal && <Modal />}
			<Categories />
			<section className='grid'>
				{iconArr.map((item, indx) => (
					<Card key={indx} icon={item} />
				))}
			</section>
		</Container>
	);
};

export default Placetostay;
