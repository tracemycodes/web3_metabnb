import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 2;
	background: rgba(0, 0, 0, 0.8);

	.modalCard {
		width: 90%;
		max-width: 550px;

		background: #fff;
		border-radius: 15px;

		.modalHeader {
			// border: 1px solid red;
			display: flex;
			justify-content: space-between;
			padding: 15px;
			border-bottom: 1px solid rgba(207, 216, 220, 1);
			align-items: center;
			h1 {
				font-size: clamp(1.2rem, 2vw, 1.5rem);
				color: rgba(51, 51, 51, 1);
			}
			.icon {
				cursor: pointer;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
	.wallets {
		padding: 15px;
		> div {
			margin: 10px 0;
			border-radius: 7px;
			padding: 10px;
			cursor: pointer;
			background: rgba(207, 216, 220, 0.8);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.top {
			margin-bottom: 20px;
		}
	}
`;
