import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	width: 15rem;
	border: 1px solid #d7d7d7;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;

	figure {
		width: 100%;
		height: clamp(13rem, 20vw, 16rem);
		margin-bottom: 10px;
		// border: 1px solid red;
		img {
			width: 100%;
			height: 100%;
		}
	}

	.info {
		// border: 1px solid red;
		> * {
			// border: 1px solid red;
			display: flex;
			justify-content: space-between;
			margin-bottom: 7px;
		}
		p {
			font-size: clamp(0.6rem, 1.5vw, 0.75rem);
		}
		.iconstar {
			display: flex;
			justify-content: space-between;
			// border: 1px solid red;
			width: clamp(4.625rem, 7vw, 5.625rem);
		}
	}
`;
