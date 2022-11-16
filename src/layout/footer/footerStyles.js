import styled from 'styled-components';

export const Container = styled.footer`
	color: white;
	padding: 40px 7%;
	background-color: #1d1d1e;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> * {
		width: 15%;
		// border: 1px solid red;
	}
	.logo {
		width: clamp(10rem, 20vw, 14.375rem);
		margin-bottom: 4rem;

		img {
			width: 100%;
			height: 100%;
		}
	}
	.socials > * {
		margin-right: 15%;
	}
	.copyright {
		font-size: clamp(0.9rem, 1.5vw, 1.1rem);
		margin-top: 2.5rem;

		> span {
			margin-right: 0.6rem;
		}
	}
	.reach_out {
		width: 30%;
	}
	.community,
	.places,
	.about {
		h2 {
			font-size: clamp(1rem, 1.5vw, 1.2rem);
			margin-bottom: 1rem;
		}
		ul li {
			margin-bottom: 10px;
			font-size: clamp(0.8rem, 1vw, 1rem);
		}
	}
	@media screen and (max-width: 815px) {
		padding: 40px 3%;
		> * {
			width: 40%;
		}
		.reach_out {
			width: 40%;
		}
		.reach_out,
		.community {
			margin-bottom: 1.5rem;
		}
	}
`;
