import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SocialProfile from '../../components/social-profile/social-profile';
import FooterWrapper, {
  FooterWrapperInner,
  FooterCol,
  Logo,
  Infos,
  FooterTitle,
  FooterContent,
  Menu,
} from './footer.style';
import LogoImage from '../../images/logo.svg';

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';

const MenuItems = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: '404 Page',
    url: '/404',
  },
];

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/redqinc/',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/redqinc/',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/redqinc',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/company/redqinc/',
  },
];

type FooterProps = {
  children: React.ReactNode;
};

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  ...props
}) => {
  
  /*const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `);

  const Category = data.allMarkdownRemark.group; */ 
  //Pulled out categories, because I can't get this data right now

  return (
    <FooterWrapper {...props}>
      <FooterWrapperInner>
        <FooterCol>
          <Logo>
            <Link to="/">
              <img src={LogoImage} alt="logo" />
            </Link>
          </Logo>

          <Infos>Orlando, FL</Infos>
          <Infos></Infos>
          <br />
          <Infos>
            Copyright &copy;&nbsp;
            <a href="https://ETechWeekly.com/" target="_blank">
              {' '}
              ETechWeekly LLC
            </a>
          </Infos>
        </FooterCol>

        <FooterCol>
          <FooterTitle>Quick Links</FooterTitle>

          <FooterContent>
            {MenuItems.map((item, index) => (
              <Menu key={index} to={item.url}>
                {item.label}
              </Menu>
            ))}
          </FooterContent>
        </FooterCol>

        <FooterCol>
        

          <FooterContent>
          
          </FooterContent>
        </FooterCol>

        <FooterCol>
          <FooterTitle>Follow Us</FooterTitle>

          <SocialProfile items={SocialLinks} />
        </FooterCol>
      </FooterWrapperInner>
    </FooterWrapper>
  );
};

export default Footer;
/*
  <FooterTitle>Category</FooterTitle>
  {Category.slice(0, 4).map((cat: any, index: any) => (
              <Menu key={index} to={`/category/${cat.fieldValue}`}>
                {cat.fieldValue}
              </Menu>
            ))}*/
