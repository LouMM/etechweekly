import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HeaderWrapper = styled.header`
  background-color: #fff;
  position: relative;
  z-index: 99999;
  transition: 0.25s ease-in-out;
  border-bottom: 1px solid ${themeGet('colors.borderColor', '#DBDBDB')};
`;

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  transition: 0.25s ease-in-out;
  width: 1385px;
  padding: 25px 15px;
  margin: 0 auto;
  @media (max-width: 1420px) {
    width: 1170px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 25px 20px;
  }
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 150px;
  margin-left: auto;
  margin-right: 40px;
  flex-shrink: 0;
  @media (max-width: 1024px) {
    margin-right: 25px;
  }
  @media (max-width: 767px) {
    margin-right: auto;
  }
  @media (max-width: 460px) {
    max-width: 100px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const MenuWrapper = styled.div`
  display: inline-block;
  flex-grow: 1;
  margin-right: auto;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuItemWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin: 0 12px;
  list-style: none;
  a {
    padding: 5px 10px;
    white-space: nowrap;
    font-size: ${themeGet('fontSizes.4', '16')}px;
    font-weight: ${themeGet('fontWeights.4', '500')};
    color: ${themeGet('colors.textColor', '#121213')};
    transition: 0.15s ease-in-out;
    @media (max-width: 1024px) {
      font-size: ${themeGet('fontSizes.3', '15')}px;
      padding: 5px;
    }
    &:hover {
      color: ${themeGet('colors.primary', '#FF2E55')};
    }
    &.active-link {
      color: ${themeGet('colors.primary', '#FF2E55')};
    }
  }
`;

export const NavSearchButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  padding: 5px 0 5px 10px;
  margin-right: 30px;
  cursor: pointer;
  transition: all 0.25s;
  @media (max-width: 1024px) {
    margin-right: 0;
  }
  svg {
    display: block;
  }
  &:hover {
    color: ${themeGet('colors.primary', '#FF2E55')};
  }
`;

export const SearchCloseButton = styled.button`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  cursor: pointer;
  z-index: 1;
  padding: 0;
  color: #757575;
  font-size: 45px;
  margin-left: -54px;
  transition: all 0.3s;
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
  }
  svg {
    display: block;
  }
  &:hover {
    color: ${themeGet('colors.black', '#000000')};
  }
`;

export const SocialProfileWrapper = styled.div`
  position: relative;
  padding-left: 25px;
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 40px;
    background-color: ${themeGet('colors.black', '#000000')};
  }
`;

export const NavSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  height: 0;
  visibility: hidden;
  transition: 0.35s ease-in-out;

  > * {
    opacity: 0;
    transition: 0.35s ease-in-out;
  }

  &.expand {
    height: 145px;
    visibility: visible;
    @media (max-width: 1199px) {
      height: 120px;
    }
    @media (max-width: 1024px) {
      height: 90px;
    }
    @media (max-width: 767px) {
      height: 75px;
    }
    .nav-search-input,
    > * {
      opacity: 1;
    }
  }

  .nav-search-input {
    width: 870px;
    transition: 0.35s ease-in-out;

    .inner-wrap {
      .search-icon {
        width: 70px;
      }
      input,
      .icon-left {
        height: 54px;
        padding: 0 70px;
        border-radius: 3px;
        ::placeholder {
          color: #757575;
        }
      }
    }
  }
`;

export const NavSearchFromWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1350px;
  height: 100%;
  position: relative;
  @media (max-width: 1420px) {
    width: 1140px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 40px;
  }
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const SocialProfiles = styled.div`
  margin-top: 60px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 40px;
  }

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    background: #292929;
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`;

export const DrawerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 40px;
  .mobile-menu {
    display: block;
    padding-top: 50px;
    margin-bottom: auto;
    li {
      margin: 0 0 15px 0;
      a {
        display: block;
        position: relative;
        padding-left: 25px;
        padding-right: 25px;
        &.active-link {
          &:before {
            opacity: 1;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 3px;
          height: 18px;
          top: 50%;
          left: 0;
          opacity: 0;
          background: ${themeGet('colors.textColor', '#292929')};
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export const DrawerContentBlock = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DrawerContentTitle = styled.span`
  font-size: ${themeGet('fontSizes.4', '16')}px;
  font-weight: ${themeGet('fontWeights.5', '600')};
  color: ${themeGet('colors.textColor', '#121213')};
  margin-bottom: 25px;
`;

export const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 5px 0;
`;

export const DrawerLogo = styled.div`
  max-width: 110px;
  padding-left: 25px;
  display: flex;
  img {
    max-width: 100%;
  }
`;

export const DrawerClose = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  padding: 0 15px;
  cursor: pointer;
`;

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: ${themeGet('colors.primary', '#FF2E55')};
  }
  span {
    display: block;
    height: 2px;
    background-color: ${themeGet('colors.textColor', '#292929')};
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;

export const HamburgerIconSquare = styled.div`
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    background-color: ${themeGet('colors.textColor', '#292929')};
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;

export default HeaderWrapper;
