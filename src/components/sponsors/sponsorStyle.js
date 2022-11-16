import styled from 'styled-components';

export const Container = styled.section`
	// border: 1px solid black;
	padding: 20px 0;
	display: flex;
	background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
	justify-content: space-around;

	> * {
		width: 20%;
		height: 40px;
		// border: 1px solid yellow;
		img {
			width: 100%;
			height: 100%;
		}
	}
	@media screen and (max-width: 700px) {
		> * {
			height: 30px;
		}
	}
`;
