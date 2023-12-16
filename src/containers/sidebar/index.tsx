import _ from 'lodash';
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import FeaturePost from '../../components/feature-post/feature-post';
import PromotionImage from '../../images/ad.png';
import useInstagram from '../../hooks/use-instagram';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
  InstagramWrapper,
  InstagramPhoto,
} from './style';

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const instagramPhotos = useInstagram();
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              cover {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const Tags = Data.allMarkdownRemark.group;

  return (
    <SidebarWrapper>
      <SidebarWidget>
        <WidgetTitle>Promotion</WidgetTitle>
        <a
          href="https://1.envato.market/r1jdv"
          aria-label="Get StoryHub"
          target="_blank"
        >
          <img src={PromotionImage} alt="Get StoryHub" />
        </a>
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Latest Post</WidgetTitle>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
          // Random Placeholder Color
          const placeholderColors = [
            '#55efc4',
            '#81ecec',
            '#74b9ff',
            '#a29bfe',
            '#ffeaa7',
            '#fab1a0',
            '#e17055',
            '#0984e3',
            '#badc58',
            '#c7ecee',
          ];
          const setColor =
            placeholderColors[
              Math.floor(Math.random() * placeholderColors.length)
            ];

          return (
            <FeaturePost
              key={node.fields.slug}
              title={title}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.gatsbyImageData
              }
              url={node.fields.slug}
              tags={node.frontmatter.tags}
              placeholderBG={setColor}
            />
          );
        })}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Instagram</WidgetTitle>
        {instagramPhotos ? (
          <InstagramWrapper>
            {instagramPhotos.slice(0, 4).map((node: any) => {
              // Random Placeholder Color
              const placeholderColors = [
                '#55efc4',
                '#81ecec',
                '#74b9ff',
                '#a29bfe',
                '#ffeaa7',
                '#fab1a0',
                '#e17055',
                '#0984e3',
                '#badc58',
                '#c7ecee',
              ];
              const setColor =
                placeholderColors[
                  Math.floor(Math.random() * placeholderColors.length)
                ];

              return (
                <InstagramPhoto key={node?.id}>
                  <a href={node?.permalink} target="_blank">
                    <img
                      src={node?.media_url}
                      alt="Instagram Photo"
                      style={{ backgroundColor: setColor }}
                    />
                  </a>
                </InstagramPhoto>
              );
            })}
          </InstagramWrapper>
        ) : (
          ''
        )}
      </SidebarWidget>
    </SidebarWrapper>
  );
};

export default Sidebar;
