import styled from 'styled-components';
export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	// border: 1px solid red;
	padding: 5% 7%;
	> * {
		width: 37%;
	}
	.rent_a_place {
		width: 55%;

		h2 {
			font-size: clamp(2.1rem, 5vw, 3rem);
			margin-bottom: 3rem;
			color: rgba(67, 67, 67, 1);
			span {
				color: rgba(160, 34, 121, 1);
			}
		}
		p {
			font-size: clamp(1.2rem, 2vw, 1.4rem);
			line-height: 1.6;
			margin-bottom: 2rem;
		}

		form {
			display: flex;
			input {
				width: 65%;
				border: 1px solid black;
				border-right: none;
				outline: none;
				padding: 20px 0;
				font-size: clamp(0.9rem, 1.5vw, 1.1rem);
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
			}
			button {
				width: 35%;
				border: none;
				background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
				font-size: clamp(0.9rem, 1.5vw, 1.1rem);
				color: #fff;
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
			}
		}
	}
	.rightSect {
		// border: 1px solid blue;
		display: grid;
		gap: 10px;
		grid-auto-rows: 1fr;
		grid-auto-columns: 1fr;
		grid-template-areas:
			' . . b b '
			' a a b b '
			' a a d d '
			' c c d d '
			' c c . . ';

		> * {
			/*   padding: 20px 0; */
			height: clamp(8rem, 15vw, 10rem);
			img {
				width: 100%;
				height: 100%;
			}
		}
		.item_a {
			grid-area: a;
			// border: 1px solid red;
		}
		.item_b {
			grid-area: b;
			// border: 1px solid blue;
		}
		.item_c {
			grid-area: c;
			// border: 1px solid green;
		}
		.item_d {
			grid-area: d;
			// border: 1px solid yellow;
		}
	}
	@media screen and (max-width: 815px) {
		padding: 5% 3%;
		.rightSect {
			width: 40%;
		}
	}
	@media screen and (max-width: 700px) {
		flex-direction: column;
		justify-content: unset;
		align-items: unset;
		.rent_a_place,
		.rightSect {
			width: 100%;
		}
		.rent_a_place {
			margin-bottom: 1.5rem;
		}
		.rightSect {
			// border: 1px solid blue;
			display: grid;
			gap: 15px;
			grid-auto-rows: 1fr;
			grid-auto-columns: 1fr;
			grid-template-areas:
				' . a a b b . '
				' . a a b b . '
				' . c c d d . '
				' . c c d d . ';
		}
	}
`;
