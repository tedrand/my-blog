import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core"

import Layout from "../components/layout";
import SEO from "../components/seo";

const FlashcardTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    console.log(post)

    return (
        <Layout location={location}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article
                className="blog-post container paper-container"
                itemScope
                itemType="http://schema.org/Article"
                css={css`
                    background-color: transparent;
                `}
            >
                <div className="card">
                    <h3 className="card-title"
                        css={css`
                            padding: 10px;
                            border-bottom: 1px solid var(--color-secondary);
                        `}>
                        {post.frontmatter.title}
                    </h3>
                    <div className="card-body">
                        <section
                            dangerouslySetInnerHTML={{ __html: post.html }}
                            itemProp="articleBody"
                        />
                        {post.frontmatter.subtype === "question" && (
                            <a className="btn btn-primary" href={`/${post.frontmatter.category}/a-${post.frontmatter.qString}`}>See Answer</a>
                        )}
                        {post.frontmatter.subtype === "answer" && (
                            <a className="btn btn-warning" href={`/${post.frontmatter.category}/q-${post.frontmatter.qString}`}>Review Question</a>
                        )}
                        
                    </div>
                </div>
            </article>

        </Layout>
    );
};

export default FlashcardTemplate

export const pageQuery = graphql`
    query FlashcardBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                subtype
                category
                qString
            }
        }
    }
`
