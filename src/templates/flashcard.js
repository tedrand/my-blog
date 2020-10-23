import React from "react";
import { graphql } from "gatsby";
import { useSpring, animated, config } from "react-spring";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Flashcard from "../components/flashcards/flashcard"
import flashcardNav from "../components/flashcards/nav"

const FlashcardTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const props = useSpring({
        marginTop: '0px', opacity: 1,
        from: { marginTop: '500px', opacity: 0 },
        duration: 2000, delay: 500, config: config.slow
    })

    const { previous, next } = pageContext;
    return (
        <Layout location={location}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <div className="container flashcard-container">
                {flashcardNav(previous, next, post.fields.slug.split("/")[1])}
                <animated.div style={props}>
                    <Flashcard front={post.frontmatter.question}
                        back={post.html} title={post.frontmatter.title} />
                </animated.div>
            </div>
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
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                question
            }
        }
    }
`
