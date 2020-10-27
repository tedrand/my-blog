import React, { Component } from "react"
import { Index } from "elasticlunr"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder="enter search terms"
        />
        <nav className="navbar navbar-dark search-nav"
          style={{ display: this.state.results.length ? "block" : "none", }}>
          <ul className="nav flex-column">
            <h6 className="navbar-text">Search Results</h6>
            {this.state.results.map(page => (
              <li className="nav-item" key={page.id}>
                <a className="nav-link" href={page.path}>
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
