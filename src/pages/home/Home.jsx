import { useContext } from 'react';
import AppContext from '../../components/context/AppContext';
import Metahomes from '../../components/metahomes/Metahomes';
import Metanfts from '../../components/meta_nft/Metanfts';
import Modal from '../../components/modal/Modal';
import Rent from '../../components/rent/Rent';
import Sponsor from '../../components/sponsors/Sponsor';

const Home = () => {
	const { showModal } = useContext(AppContext);
	return (
		<>
			{showModal && <Modal />}
			<Rent />
			<Sponsor />
			<Metahomes />
			<Metanfts />
		</>
	);
};

export default Home;
