import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FeaturedCard from '../../../components/featured-card/featured-card';
import { FeaturedPostWrapper, FeaturedPostRow, FeaturedPostCol } from './style';

type FeaturedPostsProps = {};

const colors = ['#E33974', '#006EE5', '#4F4DBF'];
function getRandomColor(values: string[]) {
	const random = Math.floor(Math.random() * values.length);
	return values[random];
}

const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 3
				filter: { frontmatter: { tags: { eq: "featured" } } }
			) {
				totalCount
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							title
							description
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
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;

	return (
		<FeaturedPostWrapper>
			<FeaturedPostRow>
				{posts.map(({ node }: any) => {
					const title = node.frontmatter.title || node.fields.slug;
					return (
						<FeaturedPostCol key={title}>
							<FeaturedCard
								postColor={getRandomColor(colors)}
								title={title}
								image={
									node.frontmatter.cover == null
										? null
										: node.frontmatter.cover.childImageSharp.gatsbyImageData
								}
								url={node.fields.slug}
								//categories={node.frontmatter.categories}
								date={node.frontmatter.date}
								overlay={true}
							/>
						</FeaturedPostCol>
					);
				})}
			</FeaturedPostRow>
		</FeaturedPostWrapper>
	);
};

export default FeaturedPosts;
