import React, { useContext } from 'react';
import Drawer from '../../components/drawer/drawer';
import SocialProfile from '../../components/social-profile/social-profile';
import { DrawerContext } from '../../components/drawer/drawer-context';
import Menu from './menu';
import {
	DrawerContentWrapper,
	DrawerHead,
	DrawerLogo,
	DrawerClose,
	DrawerContentBlock,
	DrawerContentTitle,
	HamburgerIconSquare,
} from './navbar.style';
import { FiX } from 'react-icons/fi';
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoLinkedin,
} from 'react-icons/io';

type MobileMenuProps = {
	items: any;
	logo: string;
};

const SocialLinks = [
	{
		icon: <IoLogoFacebook />,
		url: 'https://www.facebook.com/redqinc/',
		tooltip: '',
	},
	{
		icon: <IoLogoInstagram />,
		url: 'https://www.instagram.com/redqinc/',
		tooltip: '',
	},
	{
		icon: <IoLogoTwitter />,
		url: 'https://twitter.com/redqinc',
		tooltip: '',
	},
	{
		icon: <IoLogoLinkedin />,
		url: 'https://www.linkedin.com/company/redqinc/',
		tooltip: '',
	},
];

const DrawerComp: React.FunctionComponent<MobileMenuProps> = ({
	items,
	logo,
}) => {
	const { state, dispatch }: any = useContext(DrawerContext);

	// Toggle drawer
	const toggleDrawer = () => {
		dispatch({
			type: 'TOGGLE',
		});
	};

	return (
		<Drawer
			width='290px'
			placement='left'
			drawerHandler={
				<HamburgerIconSquare>
					<span />
					<span />
					<span />
				</HamburgerIconSquare>
			}
			open={state.isOpen}
			toggleHandler={toggleDrawer}
		>
			<DrawerContentWrapper>
				<DrawerHead>
					<DrawerLogo>
						<img src={logo} alt='Logo' />
					</DrawerLogo>
					<DrawerClose onClick={toggleDrawer}>
						<FiX />
					</DrawerClose>
				</DrawerHead>
				<Menu items={items} className='mobile-menu' />

				<DrawerContentBlock>
					<DrawerContentTitle>Follow us</DrawerContentTitle>
					<SocialProfile items={SocialLinks} />
				</DrawerContentBlock>
			</DrawerContentWrapper>
		</Drawer>
	);
};

export default DrawerComp;
