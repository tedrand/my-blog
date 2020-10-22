import React from "react"
import { css } from "@emotion/core"

export default (previous, next, category) => {
    return (
        <nav className="blog-post-nav">
            <ul
                css={css`
                    display: flex;
                    flexWrap: wrap;
                    justifyContent: space-between;
                    listStyle: none;
                    padding: 0;
                `}
            >
                <li className="nav-link">
                    {previous && (
                        <a className="btn btn-primary" href={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </a>
                    )}
                </li>
                <li className="nav-link">
                    <a className="btn btn-secondary"
                        href={`/flashcards/${category}`}>
                        Back to Category
                    </a>
                </li>
                <li className="nav-link">
                    {next && (
                        <a className="btn btn-primary" href={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </a>
                    )}
                </li>
            </ul>
        </nav>
    )
}