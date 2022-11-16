import styled from 'styled-components';
export const Container = styled.div`
	// border: 1px solid red;
	margin: 20px 0 50px 0;
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		li {
			font-size: clamp(0.9rem, 1.5vw, 1.25rem);
			cursor: pointer;
			:hover {
				color: rgba(160, 34, 121, 1);
			}
		}

		input {
			padding: 7px;
			border-radius: 5px;
			border: 1px solid black;
			width: 110px;
			outline: none;
			::placeholder {
				color: rgba(51, 51, 51, 1);
			}
		}
	}
	.ctg {
		display: flex;
		align-items: center;
		// border: 1px solid red;
		width: max-content;
		cursor: pointer;
		display: none;
	}
	.icon {
		border: 2px solid rgba(51, 51, 51, 1);
		width: 7px;
		height: 7px;
		border-left: none;
		border-top: none;
		transform: rotate(45deg);
		cursor: pointer;
		:hover {
			color: rgba(160, 34, 121, 1);
		}
	}
	p {
		color: rgba(51, 51, 51, 1);

		font-size: 1.2rem;
		cursor: pointer;
		align-items: center;
		margin-right: 7px;
		:hover {
			color: rgba(160, 34, 121, 1);
		}
	}
	// @media screen and (max-width: 815px) {
	// 	padding: 20px 3%;
	// }
	@media screen and (max-width: 660px) {
		ul {
			display: none;
		}
		.ctg {
			display: flex;
		}
	}
`;
