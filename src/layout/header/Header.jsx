import { Container } from './headerStyles';
import homeIcon from '../../assets/logo/homeIcon.svg';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../components/context/AppContext';
const Header = () => {
	const { setClick } = useContext(AppContext);

	return (
		<Container>
			<FaBars size={'30px'} className='ham' />

			<NavLink to={'/'}>
				<figure className='logo'>
					<img src={homeIcon} alt='home_icon' />
				</figure>
			</NavLink>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<NavLink to='/placetostay'>place to stay</NavLink>
				<li>NFTs</li>
				<li>Community</li>
			</ul>
			<button className='button' onClick={() => setClick()}>
				connect wallet
			</button>
		</Container>
	);
};

export default Header;
