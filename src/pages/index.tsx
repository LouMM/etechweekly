import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PersonalBlog from '../containers/home';
import SEO from '../components/seo';
import PersonalBlogWrapper from '../containers/home/style';
import Banner from '../containers/home/banner';
import FeaturedPosts from '../containers/home/featured-post';

const HomePage : React.FunctionComponent<any> = (props: any) => {
  const { data } = props;

  return (
    <Layout>

      <SEO
        title="ETechWeekly 🎙️"
        description={data.site.siteMetadata.description}
      />
      <PersonalBlogWrapper>
      <Banner />
			<FeaturedPosts />
        <PersonalBlog />
      </PersonalBlogWrapper>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
