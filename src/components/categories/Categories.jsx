import { Container } from './catgoryStyle';

const Categories = () => {
	return (
		<Container>
			<ul>
				<li>Restaurant</li>
				<li>Cottage</li>
				<li>Castle</li>
				<li>fantasy</li>
				<li>beach</li>
				<li>carbins</li>
				<li>off-grid</li>
				<li>Farm</li>
				<li>
					<input type='text' placeholder='Location' />
				</li>
			</ul>
			<div className='ctg'>
				<p>category</p>
				<div className='icon'></div>
			</div>
		</Container>
	);
};

export default Categories;
