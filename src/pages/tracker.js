import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"

function formatLocalPath(path) {
  let splitPath = path.split("/")
  let slug = splitPath[splitPath.length - 1]
  let splitSlug = slug.split("_")
  for (let i = 0; i < splitSlug.length; i++) {
    // check for big v.
    if (splitSlug[i] !== "v.") {
      splitSlug[i] =
        splitSlug[i].charAt(0).toUpperCase() + splitSlug[i].substring(1)
    }
  }
  let name = splitSlug.join(" ")
  name = name.substr(0, name.lastIndexOf("."))
  return { slug, name }
}

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
  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return (
        <Layout location={"/tracker"}>
          <div className="container paper-container"
            css={css`
            min-height: 90vh;
          `}>
            <div>Loading...</div>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout location={"/tracker"}>
          <div className="container paper-container">
            <h1>CAFC Tracker</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Case Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
                {items.map(row => (
                  <tr>
                    <td>{row.name}</td>
                    <td>{new Date(row.date_created).toDateString()}</td>
                    <td>
                    <form method="get" action={row.download_url}>
                      <button
                        className="btn btn-primary"
                        href={row.download_url}
                      >
                        Download
                      </button>
                    </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Layout>
      )
    }
  }
}

export default Tracker
