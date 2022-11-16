import styled from 'styled-components';

export const Container = styled.section`
	position: relative;
	padding: 40px 7%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.ham {
		color: rgba(160, 34, 121, 1);
		position: absolute;
		right: 7%;
		display: none;
	}
	.logo {
		width: clamp(10rem, 20vw, 14.375rem);
		img {
			width: 100%;
			height: 100%;
		}
	}
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 40%;
	}
	li, a {
		cursor: pointer;
		color:rgba(67, 67, 67, 1);
		font-size: clamp(1rem, 1.5vw, 1.2rem);
		:hover{
			color:rgba(160, 34, 121, 1);
		}
	}
	.active{
				color:rgba(160, 34, 121, 1);
	}
	.button {
		border: none;
		padding: 15px 25px;
		background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
		border-radius: 7px;
		color: ${({ theme }) => (theme ? theme.colors.plain : '#fff')};
		cursor: pointer;
	}
	@media screen and (max-width: 970px) {
		ul {
			width: 45%;
		}
		.button {
			padding: 10px 20px;
		}
	}
	@media screen and (max-width: 815px) {
		padding: 40px 3%;
	}
	@media screen and (max-width: 745px) {
				// justify-content:unset;
		.ham{
			display:block;
		}
			ul {
				display none
			}
			.button {
				display :none;
			}
	}
`;
