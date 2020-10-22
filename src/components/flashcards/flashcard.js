import React from "react"
import { css } from "@emotion/core";

class Flashcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flipped: false,
        }
    }

    render() {
        return (
            <div className="card">
                <h3 className="card-title"
                    css={css`
                                    padding: 10px;
                                    border-bottom: 1px solid var(--color-secondary);
                                `}>
                    {this.props.title}
                </h3>
                <div className="card-body">
                    {this.state.flipped ? 
                        <section
                            dangerouslySetInnerHTML={{__html: this.props.back}}
                            itemProp="articleBody"
                        />
                    : <p>Question: {this.props.front}</p>}
                    <button className="btn btn-primary" 
                        onClick={() => this.setState(prevState => ({flipped: !prevState.flipped}))}>
                            Flip Card
                    </button>
                </div>
            </div>
        )
    }
}

export default Flashcard