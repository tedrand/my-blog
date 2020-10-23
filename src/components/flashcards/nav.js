import React from "react"

export default (previous, next, category) => {
    return (
        <div className="btn-toolbar" role="toolbar">
            {previous && (
                <a className="btn btn-sm btn-primary mr-2" href={previous.fields.slug} rel="prev">
                    ← Previous Card
                </a>
            )}
            <a className="btn btn-sm btn-warning"
                href={`/flashcards/${category}`}>
                Category
            </a>
            {next && (
                <a className="btn btn-sm btn-primary ml-2" href={next.fields.slug} rel="next">
                    Next Card →
                </a>
            )}
        </div>
    )
}