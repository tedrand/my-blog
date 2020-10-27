import React from "react"

const TrackerTable = ({ items }) => {
    return (
        <table className="table">
            <thead><tr>
                <th scope="col">Case Name</th>
                <th scope="col">Date</th>
                <th scope="col">Download</th>
            </tr></thead>
            <tbody>
                {items.map(row => (
                    <tr>
                        <td>{row.name}</td>
                        <td>{new Date(row.date_created).toDateString()}</td>
                        <td>
                            <form method="get" action={row.download_url}>
                                <button className="btn btn-primary"
                                    href={row.download_url}>
                                    Download
                                </button>
                            </form>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TrackerTable