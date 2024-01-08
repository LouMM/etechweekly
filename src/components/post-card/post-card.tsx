import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import GatsbyImage from '../gatsby-image';
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostCategory,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
} from './post-card.style';

interface PostCardProps {
  image?: any;
  title: string;
  postColor: string;
  description?: string;
  url: string;
  date?: string;
  tags?: [];
  categories?: [];
  className?: string;
  placeholderBG?: string;
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  postColor,
  description,
  url,
  date,
  tags,
  categories,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: date,
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
         /* {categories == null ? null : (
            <PostCategory categoryColor={postColor}>
              {categories &&
                categories.map((cat, index) => (
                  <Link key={index} to={`/category/${_.kebabCase(cat)}/`}>
                    {cat}
                  </Link>
                ))}
            </PostCategory>
          )}*/
          <PostTitle className="post_title">
            <Link to={url}>{title}</Link>
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="excerpt"
            />
          )}

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

export default PostCard;
