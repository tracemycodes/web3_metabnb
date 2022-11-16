import { Container } from './footerStyles';
import homeIcon from '../../assets/logo/homeIcon_footer.svg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
	return (
		<Container>
			<div className='reach_out'>
				<figure className='logo'>
					<img src={homeIcon} alt='homeIcon' />
				</figure>
				<div className='socials'>
					<FaFacebook style={{ color: 'white' }} size={'22px'} />
					<FaInstagram style={{ color: 'white' }} size={'22px'} />
					<FaTwitter style={{ color: 'white' }} size={'22px'} />
				</div>
				<p className='copyright'>
					<span>©</span> 2022 Metabnb
				</p>
			</div>
			<div className='community'>
				<h2>Community</h2>
				<ul>
					<li>NFT</li>
					<li>Tokens</li>
					<li>Landlords</li>
					<li>Discord</li>
				</ul>
			</div>
			<div className='places'>
				<h2>Places</h2>
				<ul>
					<li>Castle</li>
					<li>Farms</li>
					<li>Beach</li>
					<li>Learn more</li>
				</ul>
			</div>
			<div className='about'>
				<h2>About us</h2>
				<ul>
					<li>Road map</li>
					<li>Creators</li>
					<li>Career</li>
					<li>Contact us</li>
				</ul>
			</div>
		</Container>
	);
};

export default Footer;
