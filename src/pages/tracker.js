import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import TrackerTable from "../components/tracker/table"
import { formatLocalPath } from "../utils"

class Tracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch(
      "https://www.courtlistener.com/api/rest/v3/opinions/?cluster__docket__court__id=cafc"
    )
      .then(res => res.json())
      .then(result => {
        let cases = []
        try {
          result.results.forEach(function (value) {
            let { slug, name } = formatLocalPath(value.local_path)
            cases.push({
              slug: slug,
              name: name,
              date_created: value["date_created"],
              download_url: `https://www.courtlistener.com/${value["local_path"]}`,
              opinion_id: value["id"],
            })
          })
        } finally {
        }
        this.setState({
          isLoaded: true,
          items: cases,
        })
      })
  }

  loading() {
    return (
      <Layout location={"/tracker"}>
        <div
          className="container paper-container"
          css={css`min-height: 90vh;`}>
          <div>Loading...</div>
        </div>
      </Layout>
    )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return this.loading()
    } else {
      return (
        <Layout location={"/tracker"}>
          <div className="container paper-container">
            <h1>CAFC Tracker</h1>
            <TrackerTable items={items} />
          </div>
        </Layout>
      )
    }
  }
}

export default Tracker
