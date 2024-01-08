import styled from 'styled-components';

export const FeaturedPostWrapper = styled.div`
	margin: 0 auto 25px;
	position: relative;
`;

export const FeaturedPostRow = styled.div`
	margin: 0 -15px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1024px) {
		margin-bottom: -35px;
	}
	@media (max-width: 767px) {
		margin: 0 -10px -35px;
	}
	@media (max-width: 575px) {
		margin-bottom: -30px;
	}
`;

export const FeaturedPostCol = styled.div`
	max-width: 33.333333%;
	flex: 0 0 33.333333%;
	padding: 0 15px;
	@media (max-width: 1024px) {
		max-width: 50%;
		flex: 0 0 50%;
		margin-bottom: 35px;
	}
	@media (max-width: 767px) {
		padding: 0 10px;
	}
	@media (max-width: 575px) {
		max-width: 420px;
		flex: 0 0 420px;
		margin-bottom: 30px;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 460px) {
		max-width: 100%;
		flex: 0 0 100%;
	}
`;
