import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import Banner from './banner';
import FeaturedPosts from './featured-post';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = (props) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Banner />
      <FeaturedPosts/>
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
