import { Container } from './sponsorStyle';
import mbtoken from '../../assets/sponsor/mbtoken.png';
import metamask from '../../assets/sponsor/metamask.png';
import opensea from '../../assets/sponsor/opensea.png';

const Sponsor = () => {
	return (
		<Container>
			<div>
				<img src={mbtoken} alt='mbtoken' />
			</div>
			<div>
				<img src={metamask} alt='metamask' />
			</div>
			<div>
				<img src={opensea} alt='opensea' />
			</div>
		</Container>
	);
};

export default Sponsor;
