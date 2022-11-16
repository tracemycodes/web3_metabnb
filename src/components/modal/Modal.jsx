import { Container } from './modalStyles';
import { FaTimes } from 'react-icons/fa';
import metaWallet from '../../assets/modal/metamaskConnect.png';
import walletConnect from '../../assets/modal/walletConnect.png';
import angle from '../../assets/modal/angleRight.svg';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Modal = () => {
	const { setClick } = useContext(AppContext);
	return (
		<Container>
			<div className='modalCard'>
				<div className='modalHeader'>
					<h1>Connect Wallet</h1>
					<FaTimes className='icon' onClick={() => setClick()} />
				</div>
				<div className='wallets'>
					<p>Choose your preferred wallet:</p>
					<div className='top'>
						<img src={metaWallet} alt='wallet' />
						<img src={angle} alt='angle' />
					</div>
					<div>
						<img src={walletConnect} alt='wallet' />
						<img src={angle} alt='angle' />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Modal;
