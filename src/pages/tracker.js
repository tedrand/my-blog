import React from "react"

import Layout from "../components/Layout"

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
          <div>Loading...</div>
        </Layout>
      )
    } else {
      return (
        <Layout location={"/tracker"}>
          <div>
            <h1>CAFC Tracker</h1>
            <ul>
              {items.map(item => (
                <li>
                  <h2>{item.date_created}</h2>
                  <h2>{item.name}</h2>
                </li>
              ))}
            </ul>
          </div>
        </Layout>
      )
    }
  }
}

export default Tracker
