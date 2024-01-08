import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Link } from 'gatsby';

const FooterWrapper = styled.footer`
	width: 100%;
	padding: 120px 0 50px;
	@media (max-width: 1024px) {
		padding-top: 100px;
	}
	@media (max-width: 767px) {
		padding-top: 80px;
	}
`;

export const FooterWrapperInner = styled.div`
	display: flex;
	margin: 0 -15px;
	@media (max-width: 1024px) {
		flex-wrap: wrap;
		margin-bottom: -50px;
	}
`;

export const FooterCol = styled.div`
	flex: 0 0 20%;
	max-width: 20%;
	padding: 0 15px;

	&:first-child {
		flex: 0 0 40%;
		max-width: 40%;
	}
	@media (max-width: 1024px) {
		flex: 0 0 33.33%;
		max-width: 33.33%;
		margin-bottom: 50px;
		order: 1;
		display: flex;
		flex-direction: column;
		align-items: center;

		&:first-child {
			flex: 0 0 100%;
			max-width: 100%;
			order: 2;
		}
	}

	@media (max-width: 767px) {
		flex: 0 0 50%;
		max-width: 50%;

		&:last-child {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}

	@media (max-width: 460px) {
		flex: 0 0 100%;
		max-width: 100%;
		align-items: flex-start;

		&:first-child {
			flex: 0 0 100%;
			max-width: 100%;
			align-items: flex-start;
		}
	}
`;

export const Logo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	img {
		max-width: 100%;
	}

	@media (max-width: 1024px) {
		width: auto;
	}
`;

export const Infos = styled.span`
	font-size: ${themeGet('fontSizes.4', '16')}px;
	font-weight: ${themeGet('fontWeights.3', '400')};
	line-height: 1.5;
	color: ${themeGet('colors.textLightColor', '#595959')};
	display: flex;
	align-items: center;
	margin-bottom: 13px;
	&:last-child {
		margin-bottom: 0;
	}
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
		margin-bottom: 10px;
	}
	a {
		color: ${themeGet('colors.textColor', '#121213')};
		&:hover {
			color: ${themeGet('colors.primary', '#FF2E55')};
		}
	}
`;

export const FooterTitle = styled.span`
	font-size: ${themeGet('fontSizes.4', '16')}px;
	font-weight: ${themeGet('fontWeights.6', '700')};
	line-height: 1.5;
	color: ${themeGet('colors.textColor', '#292929')};
	display: flex;
	margin-bottom: 15px;
	height: 34px;
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1024px) {
		align-items: center;
	}

	@media (max-width: 460px) {
		align-items: flex-start;
	}
`;

export const Menu = styled(Link)`
	font-size: ${themeGet('fontSizes.4', '16')}px;
	font-weight: ${themeGet('fontWeights.3', '400')};
	line-height: 1.5;
	color: ${themeGet('colors.textLightColor', '#595959')};
	margin-bottom: 14px;
	text-transform: capitalize;
	transition: color 0.35s;
	@media (max-width: 1024px) {
		font-size: ${themeGet('fontSizes.3', '15')}px;
		margin-bottom: 10px;
	}
	&:hover {
		color: ${themeGet('colors.primary', '#FF2E55')};
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export default FooterWrapper;
